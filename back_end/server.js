const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

let collection;

async function connectToMongoDB() {
  try {
    const url = 'mongodb+srv://Pragna_2803:aprv10092835@cluster0.l1mtumg.mongodb.net/react?retryWrites=true&w=majority';
  
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    await client.connect();
    console.log('Connected to MongoDB successfully!');
    
    const db = client.db('react');
    collection = db.collection('login');
    const response = await collection.find({}).toArray();
    console.log('Data retrieved from collection:', response);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err; // Rethrow the error to handle it in the calling function
  }
}

async function startServer() {
  try {
    await connectToMongoDB();

    app.post('/api/login', async (req, res) => {    
      try {
        const user = await collection.findOne({ Username: req.body.username, Password: req.body.password });
        console.log('User data from database:', user);
    
        if (user) {
          return res.json({ success: true, message: 'Login Successful' });
        } else {
          return res.status(401).json({ success: false, message: 'Invalid Credentials' });
        }
      } catch (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ success: false, message: 'Server Error' });
      }
    });

    const PORT = 8081;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Error starting the server:', err);
  }
}

startServer();
