const puppeteer = require('puppeteer');
const fs = require('fs/promises');

async function puppet() {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    // URL where data is being scraped from.
    const url = 'https://www.officialcharts.com/charts/progressive-albums-chart/'
    await page.goto(url, {waitUntil: 'domcontentloaded', timeout: 0})

    // Gets title of albums and groups them into an array.
    const song = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('#main > article > div > div.grid__cell.unit-2-3--desktop > section > table > tbody > tr > td > div > div.title-artist > div.title > a')).map(x => x.textContent)
    })

    // Gets labels of albums and groups them into an array.
    const label = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('#main > article > div > div.grid__cell.unit-2-3--desktop > section > table > tbody > tr > td > div > div.title-artist > div.label-cat > span')).map(x => x.textContent)
    })

    // Gets artist names of albums and groups them into an array.
    const artist = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('#main > article > div > div.grid__cell.unit-2-3--desktop > section > table > tbody > tr > td > div > div.title-artist > div.artist > a')).map(x => x.textContent)
    })

    // Gets the chart positions of albums and groups them into an array.
    const chartPosition = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.position')).map(x => x.textContent)
    })

    await browser.close()
    
    // Returns scraped data of arrays and groups them into an array.
    return [song, label, artist, chartPosition]
}

module.exports = { puppet }