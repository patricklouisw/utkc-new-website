import { NextResponse } from "next/server";
import md5 from "md5";

const client = require("@mailchimp/mailchimp_marketing");

const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;
const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
const DATACENTER = process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER;

client.setConfig({
    apiKey: API_KEY,
    server: DATACENTER,
});


export default async (req: any, res: any) => {
    let { firstName, lastName, email } = req.body;
    email = email.toLowerCase()
    let subscriber_hash = md5(email)

    console.log({ firstName, lastName, email });

    if (!firstName) {
        return NextResponse.json({ error: 'firstName is required' }, {status: 400});
    }
    if (!lastName) {
        return NextResponse.json({ error: 'lastName is required' }, {status: 400});
    }
    if (!email) {
        return NextResponse.json({ error: 'Email is required' }, {status: 400});
    }


    await client.lists.setListMember(AUDIENCE_ID, subscriber_hash, {
        merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
        email_address: email,
        status_if_new: "subscribed",
        status: 'subscribed',
    })
    .then((response: any) => {
        if (response.statusCode >= 400) {
            return res.status(400).json({
                error: `There was an error subscribing to the newsletter. <br />
                Send us an email (<b><u><a href='mailto:exec.utkc@gmail.com'>exec.utkc@gmail.com</a></u></b>) and I'll add you the old fashioned way :(.`
            });
        }else{
            return res.status(201).json({ error: '' });
        }
    }).catch((err: any) => {
        console.log(err)
        return res.status(400).json({
            error: `There was an error subscribing to the newsletter. <br />
            Send us an email (<b><u><a href='mailto:exec.utkc@gmail.com'>exec.utkc@gmail.com</a></u></b>) and I'll add you the old fashioned way :(.`
        })
    })
};