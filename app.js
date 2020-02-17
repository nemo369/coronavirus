import express from 'express';
import cors from 'cors';
import { uniqueCount } from './lib/utils';
import { getCoronaData, getPplCount, runCron } from './lib/scraper';
import db from './lib/db';
import './lib/cron';
import aggregate from './lib/aggregate';

const app = express();
app.use(cors());
app.get(`/scrape`, async (req, res, next) => {
  console.log(`Scraping!!`);
  const [coronaCount, pplCount] = await Promise.all([
    getCoronaData(),
    getPplCount(),
  ]);
  res.json({ coronaCount, pplCount });
});

app.get(`/data`, async (req, res, next) => {
  // get the scrape data
  const { coronaCases, coronaDeaths, coronaRecovered, pplCount } = db.value();
  res.json({ corona: { coronaCases, coronaDeaths, coronaRecovered }, pplAlive: pplCount });
});

app.get(`/runCron`, async (req, res, next) => {
  const deaths = await runCron();
  res.json(`scrpae again --- ${deaths}`);
});

app.listen(process.env.PORT || 1111, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});