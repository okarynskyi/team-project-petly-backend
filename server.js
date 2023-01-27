const app = require('./app');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const { DB_HOST, PORT } = process.env;

const connection = mongoose.connect(DB_HOST);

connection
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) console.error('Error at server launch', err)
      console.log(`Server running at port ${PORT}`)
    })
    console.log(`Database connection successful`)
  })
  .catch(err => {
    console.log('Failed to launch application with error:', err.message);
    process.exit(1)
  })