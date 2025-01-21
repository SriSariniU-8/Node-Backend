const { Client } = require('pg');

// Configure the PostgreSQL client
const client = new Client({
  user: process.env.DB_USER || 'postgres',         // Use environment variable or default to 'postgres'
  host: process.env.DB_HOST || 'db',              // Hostname from docker-compose.yml ('db' service)
  database: process.env.DB_NAME || 'Node_JS',     // Use environment variable or default database name
  password: process.env.DB_PASSWORD || 'postgres', // Use environment variable or default password
  port: process.env.DB_PORT || 5432,              // Default PostgreSQL port
});

// Connect to the database
client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error('Connection error', err.stack));

module.exports = client;
