import { createConnection } from "mysql";

export const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password : 'secret',
  database: "muralis",
});
