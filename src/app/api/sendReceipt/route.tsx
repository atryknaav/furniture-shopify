
import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');


interface resInt {
    message: string
}

export async function POST(request: NextRequest, res:NextResponse) {
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    const requestBody = await request.json();
    const email = requestBody.email;
    const message = requestBody.message;


    const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,

        auth: {

            user: username,
            pass: password
        }
    });


    // const response = await fetch('/api/renderBoughtItems');
    // const boughtItemsHtml = await response.text();

    try {

        await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
            <p>Name: JOB </p>
            <p>Email: ${email} </p>
            <p> THIS IS THE RECEIPT FOR YOU PURCHASE ${message}</p>
            
            `,
        })



        // res.status(200).json({ message: `${username} + ${password} + ${myEmail}` });
        return NextResponse.json({message: message}, {status: 200})


    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: `Internal Server Error: ${error}` },
            { status: 500 });
    }

  }