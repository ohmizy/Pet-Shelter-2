const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const colors = require('colors');
colors.enable();

const cors = require('cors');
app.use(express.json(), cors());

const connectDb = require('./server/config/mongoose.config');
connectDb();

const petRouter = require('./server/routes/pet.routes');
app.use('/api/pets', petRouter);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () =>
  console.log(colors.rainbow(`Listening on port: ${server.address().port}`))
);
