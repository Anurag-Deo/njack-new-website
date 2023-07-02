import Cors from 'cors';
import { Client } from '@notionhq/client';
import initMiddleware from '../../../lib/init-middleware';

const notion = new Client({ auth: 'secret_z80el7Y7mL8YzJpNBWcNmZm7CFagbwqXJC4Snj3xHu4' });
const databaseId = '0900d13ef1b34051a2101dacae59d9d1';

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

            // response.results.forEach((result) => {
            //     console.log(result.properties.Description);
            // });

            const data = response.results.map((result) => {
                return ({
                    eventName: result.properties.EventName.title[0].plain_text,
                    dept: result.properties.Department.rich_text[0].plain_text,
                    old: result.properties.Old.rich_text[0].plain_text,
                    desc: result.properties.Description.rich_text.length==0?"No description available":result.properties.Description.rich_text[0].plain_text,
                    image: result.properties.Image.rich_text[0].plain_text,
                    registerLink: result.properties.NotionPage.rich_text.length == 0 ? "" : result.properties.NotionPage.rich_text[0].plain_text
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
