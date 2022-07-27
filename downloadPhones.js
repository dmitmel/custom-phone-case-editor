/*
#front-editor > div.workfield > table > tbody > tr > td.pattern-wrapper2 > div
*/

const pEachSeries = require('p-each-series');
const chalk = require('chalk').default;
const axios = require('axios').default;
const cheerio = require('cheerio');

const siteURL = 'http://endorphone.com.ua';

const log = message => process.stderr.write(`${message}\n`);

run();

async function run() {
  log('fetching phone select page');
  const { data: phoneSelectHTML } = await axios.get(`${siteURL}/conf`);

  log('parsing phone select page');
  const phoneSelectDocument = cheerio.load(phoneSelectHTML);

  log('finding phone manufacturers list');
  const phonesManufacturersElement = phoneSelectDocument('.drop-brend');

  log('getting phone manufacturers');
  const phoneManufacturers = phonesManufacturersElement
    .children()
    .toArray()
    .reduce((result, element) => {
      result[element.attribs.trp] = element.children[0].data;
      return result;
    }, {});

  log('finding element with phones list');
  const phonesElement = phoneSelectDocument('.drop-model');

  log('getting phones');
  const phones = phonesElement
    .children()
    .toArray()
    .map(element => ({
      number: element.attribs.trp,
      name: element.children[0].data,
      manufacturer: phoneManufacturers[element.attribs.trbr],
    }));

  await pEachSeries(phones, async ({ manufacturer, number, name }) => {
    log(`fetching ID of ${chalk.green(name)}`);

    const { data: phoneIDResponse } = await axios.post(
      `${siteURL}/conf/js/reprice.php`,
      `devID=${number}`,
    );

    const phoneID = phoneIDResponse.split('|||')[2];
    log(`ID of ${chalk.green(name)} is ${chalk.blue(phoneID)}`);

    log(`fetching case editor page`);
    const { data: caseEditorHTML } = await axios.get(
      `${siteURL}/conf/${phoneID}-case`,
    );

    log('parsing editor page');
    const caseEditorDocument = cheerio.load(caseEditorHTML);

    log('finding phone image element');
    const imageElement = caseEditorDocument('#front-editor .pattern');

    log('getting phone image URL');
    const image = imageElement.css('background-image').match(/url\((.+?)\)/)[1];

    console.log(JSON.stringify({ manufacturer, name, image }));
  });
}
