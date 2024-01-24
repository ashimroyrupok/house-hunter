const express = require("express");
require('dotenv').config();
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
const cors = require('cors');
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://65b006084d746017db34ceb9--moonlit-capybara-f3669a.netlify.app"
    ],
    credentials: true
}));
app.use(cookieParser())






// mongodb connections


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.uwnroha.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const userCollection = client.db('houseHunterDB').collection('users')
        const houseCollection = client.db('houseHunterDB').collection('houses')

            
  

        app.post('/addHouse', async (req, res) => {
            const data = req.body;
            const token = req.cookies?.token;

            try {
                const findUser = await userCollection.findOne({ token: token });

                if (!findUser) {
                    res.status(401).send('Unauthorized');
                    return;
                }

                const info = {
                    image: data?.image,
                    houseName: data?.houseName,
                    city: data?.city,
                    address: data?.address,
                    roomSize: data?.roomSize,
                    bedRooms: data?.bedRooms,
                    bathRoom: data?.bathRoom,
                    mobile: data?.mobile,
                    price: data?.price,
                    availability: data?.availability,
                    email: findUser?.email
                };

                const result = await houseCollection.insertOne(info);
                res.send(result);
            } catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });

        app.post('/logout', async (req, res) => {
            const user = req.body;
            res.clearCookie('token', { maxAge: 0 }).send({ success: true })
        })




        app.patch('/login/:email', async (req, res) => {
            const email = req.params?.email;
            const filter = { email: email };
            const updateDoc = {
                $set: {
                    token: req.cookies?.token
                }
            }
            const result = await userCollection.updateOne(filter, updateDoc);
            res.send(result);

        })

        app.post('/login', async (req, res) => {
            try {
                const check = await userCollection.findOne({ email: req.body.email });
                console.log(req.cookies?.token);

                if (!check) {
                    res.send("User not found");
                    return;
                }

                const isPassword = await bcrypt.compare(req.body.password, check.password);

                if (isPassword) {
                    const token = jwt.sign({ userId: check._id, userEmail: check.email }, process.env.JWT_TOKEN, { expiresIn: '1h' });

                    res.cookie("token", token, {
                        httpOnly: true,
                        secure: true,
                        sameSite: "none"
                    });

                    res.send({ success: true });
                } else {
                    res.send({ success: false });
                }
            } catch (error) {
                console.error(error);
                res.status(500).send({ message: "Something went wrong" });
            }
        });





        app.post('/signup', async (req, res) => {
            const data = req.body;
            // console.log(data);
            // console.log(data.email,"email");
            const email = { email: data.email }
            const existingUser = await userCollection.findOne(email);
            if (existingUser) {
                return res.send({ message: " user already exists" });
            }
            const saltRound = 10;
            const hashPassword = await bcrypt.hash(data.password, saltRound);
            data.password = hashPassword;
            const result = await userCollection.insertOne(data);
            res.send(result);

        })

        app.get('/user', async (req, res) => {
            const result = await userCollection.find().toArray();
            res.send(result);
        })







        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("House Hunter is running")
})




app.listen(port, (req, res) => {
    console.log(`HouseHunter is listening on ${port}`);
})