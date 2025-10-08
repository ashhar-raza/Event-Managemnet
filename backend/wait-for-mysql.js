// wait-for-mysql.js
const mysql = require('mysql2/promise');

const dbHost = process.env.DB_HOST || 'db';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || 'root';
const dbName = process.env.DB_NAME || 'event_database';
const dbPort = process.env.DB_PORT || 3306;

async function waitForMysql() {
  let connected = false;
  while (!connected) {
    try {
      const connection = await mysql.createConnection({
        host: dbHost,
        user: dbUser,
        password: dbPassword,
        database: dbName,
        port: dbPort,
      });
      await connection.end();
      connected = true;
      console.log('✅ MySQL is ready!');
    } catch (err) {
      console.log('⏳ Waiting for MySQL to be ready...');
      await new Promise(res => setTimeout(res, 3000));
    }
  }
}

waitForMysql();
