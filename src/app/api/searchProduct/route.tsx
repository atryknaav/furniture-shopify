import dbConnect from '@/app/lib/dbConnect'; // Ensure correct path for dbConnect
import Product from '@/app/models/Product'; // Ensure correct path for Product model
import { NextRequest, NextResponse } from 'next/server';

// GET handler to fetch a product by ID
export async function GET(req: NextRequest) {
  await dbConnect(); // Connect to the database

  const name = req.headers.get('name');
 

  try {
    const products = await Product.find({name: { $regex: name, $options: 'i'}}).exec(); // Fetch product by piece of name

    if (!products) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 }); 
    }

    return NextResponse.json({ products: products}, { status: 200 }); 
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }); 
  }
}