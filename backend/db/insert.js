// queries/insert.js
const pool = require('../config/db');

async function insertRecord(table, data) {
  try {
    const keys = Object.keys(data);
    const values = Object.values(data);

    const placeholders = keys.map(() => '?').join(', ');
    const sql = `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${placeholders})`;

    const [result] = await pool.query(sql, values);
    return { success: true, insertId: result.insertId };
  } catch (error) {
    console.error("Error inserting record:", error);
    return { success: false, error: error.message };
  }
}

module.exports = insertRecord;
