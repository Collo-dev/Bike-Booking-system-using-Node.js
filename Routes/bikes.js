const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();

// MongoDB connection string
const uri = 'your_mongodb_connection_string';

// MongoDB database and collection names
const dbName = 'your_database_name';
const categoriesCollection = 'categories';
const brandListCollection = 'brand_list';

// Connect to MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Middleware to ensure database connection
app.use(async (req, res, next) => {
  if (!client.isConnected()) await connectDB();
  req.dbClient = client;
  req.db = client.db(dbName);
  next();
});

// Route to handle requests
app.get('/', async (req, res) => {
  let title = "";
  let sub_title = "";

  // Handle category request
  if (req.query.c) {
    try {
      const category = await req.db.collection(categoriesCollection).findOne({ _id: ObjectId(req.query.c) });
      if (category) {
        title = category.category;
        sub_title = category.description;
      }
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  }

  // Handle subcategory request
  if (req.query.s) {
    try {
      const subCategory = await req.db.collection(brandListCollection).findOne({ _id: ObjectId(req.query.s) });
      if (subCategory) {
        title = subCategory.name;
      }
    } catch (error) {
      console.error('Error fetching subcategory:', error);
    }
  }

  // Render the template with data
  res.render('template', { title, sub_title });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
