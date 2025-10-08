const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routers/events');
const attendeeRoutes = require('./routers/attendees');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/events', eventRoutes);


app.use('/', (req, res) => {
  res.json({ message: "Server is up bro" });
});



app.listen(8000, () => {
  // console.log("🚀 Backend running on http://localhost:8000");
  console.log("🌐 Frontend running on http://localhost:5173");
});
