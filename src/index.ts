import { createServer } from "./hocus/index";
import { createDb } from "./db";
import type { EchoesServerOptions } from "./types";

const options: EchoesServerOptions = {
  database: {
    database: "echoes.db",
  },
  hocus: {
    port: 3000,
  },
};
const { db } = await createDb(options);
const { server } = createServer(db, options);
server.listen();