import mysql from 'mysql2/promise';

const pool = mysql.createPool({
	host: 'localhost',
	user: 'node_user',
	password: 'password123',
	database: 'node_connect'
});

export default pool;