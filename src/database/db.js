const Database = require('sqlite-async')

Database.open(__dirname + '/database.sqlite').then(execute)

function execute(db) {
    de.exec(`
                CREATE TABLE IF NOT EXISTS orphanages (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    latitude TEXT, 
                    longitude TEXT, 
                    name TEXT, 
                    about TEXT, 
                    whatsapp TEXT, 
                    images TEXT,
                    instructions TEXT, 
                    opening_hours TEXT, 
                    open_on_weekends TEXT

                );
    `)
}