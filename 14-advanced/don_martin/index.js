const fs = require('fs');
const axios = require('axios');
const $ = require('cheerio');

const sourceURL = 'https://www.madcoversite.com/dmd-alphabetical.html';

const scrape = async () => {
  const response = await axios.get( sourceURL ); // fake sync
  const html = response.data;
  const $rows = $('table table tr:nth-child(n+2)', html); // we pass in the target because we don't have a DOM

  const entries = [];

  $rows.each(function () {
    const $cells = $('td', this);
    const entry = {
      sound: $cells.eq(0).text(),
      description: $cells.eq(1).text(),
      source: $cells.eq(2).text(),
      title: $cells.eq(3).text()
    };

    entries.push( entry );
  });

  fs.writeFile('./martin.json', JSON.stringify(entries, null, 2), () => {
    console.log(`martin.json saved: ${ entries.length } entries`)
  });
};

scrape();
