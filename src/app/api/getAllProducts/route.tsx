import dbConnect from '@/app/lib/dbConnect'; // Ensure correct path for dbConnect
import Product from '@/app/models/Product'; // Ensure correct path for Product model
import { RootState } from '@/redux/store';
import { NextRequest, NextResponse } from 'next/server';
import { useSelector } from 'react-redux';

// GET handler to fetch a product by ID
export async function GET(req: NextRequest) {
  const sortBy = req.headers.get('sortBy');
  const name = req.headers.get('name');
  await dbConnect(); // Connect to the database

//   const name = req.headers.get('name');
 

  try {
    const products = (sortBy === 'name')? await Product.find({name: { $regex: name, $options: 'i'}}).sort({name: 1}).exec()
                      :(sortBy === 'price')? await Product.find({name: { $regex: name, $options: 'i'}}).sort({price: 1}).exec()
                      : await Product.find({name: { $regex: name, $options: 'i'}}).sort({_id: -1}).exec();
    
    if (!products) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 }); 
    }
    console.log("Sorting by:" + sortBy)
    return NextResponse.json({ products: products}, { status: 200 }); 
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }); 
  }
}