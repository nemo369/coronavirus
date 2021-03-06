// Setup the DB
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({ coronaCases: [], coronaDeaths: [], coronaRecovered: [], pplCount: [] }).write();

export default db;

