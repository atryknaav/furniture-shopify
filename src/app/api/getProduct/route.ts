import dbConnect from '@/app/lib/dbConnect'; // Ensure correct path for dbConnect
import Product from '@/app/models/Product'; // Ensure correct path for Product model
import { NextRequest, NextResponse } from 'next/server';

// GET handler to fetch a product by ID
export async function GET(req: NextRequest) {
  await dbConnect(); // Connect to the database

  const id = req.nextUrl.searchParams.get('id'); // Get 'id' from request URL search parameters
  console.log("This is the ID in the server: " + id);

  try {
    const product = await Product.findById(id).exec(); // Fetch product by ID

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 }); 
    }

    return NextResponse.json({ products: product }, { status: 200 }); 
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }); 
  }
}

// POST handler to add a new product
export async function POST(req: NextRequest) {
  await dbConnect(); // Connect to the database

  const name = req.nextUrl.searchParams.get("name"); 
  const description = req.nextUrl.searchParams.get("description"); // Get 'description' from request URL search parameters
  const price = parseInt(req.nextUrl.searchParams.get("price")!); // Get 'price' from request URL search parameters
  const image = req.nextUrl.searchParams.get("image"); // Get 'price' from request URL search parameters


  try {
    console.log('Connected to MongoDB');
    console.log('Collection name:', Product.collection.name);
    console.log('Product name:', name);

    // Create a new product instance
    const product = new Product({ name:name, description:description, price:price, image:image });
    console.log('Product instance created:', product.image);

    await product.save(); // Save product to the database
    console.log('Product saved:', product);

    const countDocs = await Product.countDocuments(); // Get total count of documents in the collection

    return NextResponse.json({ product, countDocs, message: 'Product saved' }, { status: 200 }); // Return success response
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }); // Return 500 for server errors
  }
}
