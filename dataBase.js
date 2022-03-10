const { Pool, Client } = require('pg'); // pool or client?
require('dotenv').config();
const { puppet } = require('./puppet');

async function postgres() {

    // Arrays of scraped data returned from puppet.js start() function grouped into an array.
    const show = await puppet()

    // Scraped songs
    const song = show[0]

    // Scraped label data.
    const label = show[1]

    // Scraped artist data.
    const artist = show[2]
    
    // Scraped chart position data.
    const chartPosition = show[3]

    // Connects to database.
    const client = new Client({
        connectionString: process.env.CONNECTION_STRING
    })

    client.connect();

    // maybe make a function for creating a table checks to see if that table already exists.
    // want to be able to have a function that inserts fresh new data and gets rid of the old data. Make
    // scraper work at a set interva of time deploy to heroku?
    
    // add a query variable and pass it in here
    // Inserts data into database.
    async function insert() {
        client.query("INSERT INTO musicCharts(chartPosition, song, artist, label) SELECT * FROM UNNEST ($1::int[], $2::text[], $3::text[], $4::text[])",  [chartPosition, song, artist, label], (err, res) => {
            if (err) {
                console.error(err)
                return;
            } else {
                console.log(res)
            }
            console.log('Data successfully inserted.')
            
            client.end();
        })
    }
    insert()
}

puppet()
postgres()

//wrap everything in its own function have a master function that you just pass in data as argument like twitter bot
// helper functions and main funtion
// get puppeteer to scrape at a set interval every week or so
// add comments
// make program more modular
// add to github repo