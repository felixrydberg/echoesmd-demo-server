import { Database } from 'bun:sqlite'
import type { EchoesServerOptions } from '../types';

const createDb = async (options: EchoesServerOptions) => {
  const db = new Database(options.database.database)
  db.exec("PRAGMA journal_mode = WAL;");
  db.query(`CREATE TABLE IF NOT EXISTS "documents" (
    "name" varchar(255) NOT NULL,
    "data" blob NOT NULL,
    UNIQUE(name)
  )`).run()

  return {
    db,
  }
}

export {
  createDb
}
