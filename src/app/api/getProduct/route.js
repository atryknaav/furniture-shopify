// const mongoose = require('mongoose');

// // Use the correct connection string and database name
// const uri = 'mongodb+srv://myself:985o6uZ5jcgMpQfz@cluster0.n2bebem.mongodb.net/Furniture-shop';
// mongoose.connect(uri, {});

// // Define the schema for the Products collection
// const productSchema = new mongoose.Schema({ 
//   name: {
//     type: String,
//     required: true
//   }
// });
// const Product = mongoose.model('Product', productSchema);

// async function findDocumentById(id) {
//   try {
//     // Convert the string id to an ObjectId
//     const objectId = new mongoose.Types.ObjectId(id);
//     const document = await Product.findById(objectId).exec();
//     console.log(document);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// async function addDocument(name) {
//   try {
//     // Create a new instance of the Product model
//     const newProduct = new Product({ name });
    
//     // Save the new document to the database
//     const savedProduct = await newProduct.save();
//     console.log('Document added:', savedProduct);
//   } catch (error) {
//     console.error('Error adding document:', error);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// // Replace 'yourObjectId' with the actual _id of the document you want to find
// export default item = findDocumentById('669dd2f352983f03c171e511');
// // addDocument('Solo');



// pages/products.js

// import dbConnect from '@/app/lib/dbConnect';

// const dbConnect = require('src/app/lib/dbConnect.ts')
// const Product = require ('src/app/models/Product');
// const NextResponse = require('next/server');

import dbConnect from '@/app/lib/dbConnect';
import Product from '@/app/models/Product';
import { NextResponse } from 'next/server';




export async function GET(){
  await dbConnect();
   
  try{
    // const objectId = new mongoose.Types.ObjectId('669dd2f352983f03c171e511');
    // const document = await Product.findById(objectId).exec();

    const products = await Product.findById('66a08ad5a7f0e3fa0ce070de').exec();

    return NextResponse.json({ products }, { status: 200 })
  }
  catch(err){
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}


export async function POST(){
  await dbConnect();
   
  try{
    // const objectId = new mongoose.Types.ObjectId('669dd2f352983f03c171e511');
    // const document = await Product.findById(objectId).exec();

    console.log('Connected to MongoDB');

    // Log the collection name
    console.log('Collection name:', Product.collection.name);

    const products = new Product({ name: 'hi' });
    console.log('Product instance created:', products);

    await products.save();
    console.log('Product saved:', products);

    const inserted = await Product.collection.insertOne({name: 'baby'})

    const countDocs = await Product.countDocuments();

    return NextResponse.json({ products, inserted, countDocs, message: 'Product saved' }, { status: 200 });
    
  }
  catch(err){
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}



