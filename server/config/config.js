// ==========
// Port
// ==========
process.env.PORT = process.env.PORT || 3000;

// ==========
// Environment
// ==========
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==========
// Database
// ==========
let urlDB;

if (process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost:27017/cafe';
} else {
  urlDB = 'mongodb://user-cafe:123456M@ds037468.mlab.com:37468/cafe_test';
}

process.env.URLDB = urlDB;



