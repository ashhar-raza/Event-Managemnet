// queries/update.js
const pool = require('../config/db');

async function updateRecord(table, data, condition) {
  try {
    const keys = Object.keys(data);
    const values = Object.values(data);

    const setClause = keys.map(key => `${key} = ?`).join(', ');
    const sql = `UPDATE ${table} SET ${setClause} WHERE ${condition}`;

    const [result] = await pool.query(sql, values);

    if (result.affectedRows === 0) {
      return { success: false, message: "No record found for update" };
    }

    return { success: true, message: "Record updated successfully" };
  } catch (error) {
    console.error("Error updating record:", error);
    return { success: false, error: error.message };
  }
}

module.exports = updateRecord;
