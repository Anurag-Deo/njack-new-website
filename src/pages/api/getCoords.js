import Cors from 'cors';
import { Client } from '@notionhq/client';
import initMiddleware from '../../../lib/init-middleware';

const notion = new Client({ auth: 'secret_z80el7Y7mL8YzJpNBWcNmZm7CFagbwqXJC4Snj3xHu4' });
const databaseId = '5026ded3a79a48a1ba23397a12d5ec89';

// Initialize the cors middleware
const cors = initMiddleware(
    Cors({
        methods: ['GET'], // Specify the allowed HTTP methods
    })
);

async function handler(req, res) {
    // Run the cors middleware
    await cors(req, res);

    if (req.method === 'GET') {
        try {
            const response = await notion.databases.query({
                database_id: databaseId,
            });
            // console.log('response', response);
            // Iterate through each item in response and log it into the console
            // response.results.forEach((page) => {
            //     console.log(page.properties.Name.title[0].plain_text);
            // });

            const data = response.results.map((result) => {
                return ({
                    name: result.properties.Name.title[0].plain_text,
                    committee: result.properties.Committee.rich_text[0].plain_text,
                    image: result.properties.Image.rich_text[0].plain_text,
                    linkedin: result.properties.LinkedIn.rich_text[0].plain_text,
                    github: result.properties.Github.rich_text[0].plain_text
                });
            });
            // console.log('data', data);
            if (data.length === 0) {
                res.status(200).json([]);
            } else {
                res.status(200).json(data);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

export default handler;
