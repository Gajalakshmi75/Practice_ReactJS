const { Client } = require('pg');

// Database connection configuration
const dbConfig = {
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1234567",
    database: "MainDatabase"
};

// Create a new PostgreSQL client
const client = new Client(dbConfig);

// Connect to the database
client.connect((err) => {
    if (err) {
        console.error('Error connecting to database', err);
        return;
    }

    // Execute SQL queries here
    client.query('SELECT sno, customer_name, age, phone, location, created_at FROM public."Customers" ', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
        } else {
            console.log('Query result:', result.rows);
        }

        // Close the connection when done
        client.end();
    });
});
