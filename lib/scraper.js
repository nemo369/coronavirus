import axios from 'axios';
import cheerio from 'cheerio';
import db from './db';

export async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

export async function mapPplCount(html) {
  const $ = cheerio.load(html);
  return 7640244883;

}

export async function mapCorona(html) {
  // load up Cheerio
  const $ = cheerio.load(html);
  const spans = $('.maincounter-number span');
  let nummbers = []
  spans.each(function (i, elm) {
    nummbers.push(parseFloat($(this).text().replace(/,/g, '')))
  });
  return nummbers
}

export async function getCoronaData() {
  const html = await getHTML('https://www.worldometers.info/coronavirus/');
  const coronaCount = await mapCorona(html);
  return coronaCount;
}
export async function getPplCount() {
  const html = await getHTML('https://www.overpopulationawareness.org/en');
  const pplCount = await mapPplCount(html);
  return pplCount;
}

export async function runCron() {
  const [cCount, tCount] = await Promise.all([
    getCoronaData(),
    getPplCount(),
  ]);
  const [cases, deaths, recovered] = cCount
  db.get('coronaCases')
    .push({
      date: Date.now(),
      count: cases,
    })
    .write();
  db.get('coronaDeaths')
    .push({
      date: Date.now(),
      count: deaths,
    })
    .write();
  db.get('coronaRecovered')
    .push({
      date: Date.now(),
      count: recovered,
    })
    .write();
  db.get('pplCount')
    .push({
      date: Date.now(),
      count: tCount,
    })
    .write();
  console.log('added to corona DB!');
}
