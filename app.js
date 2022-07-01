const express = require('express')
const app = express();
const cors = require("cors");
const routes = require('./routes/route');
const PORT=3005

app.use(cors());
app.use(express.json())

// Routes
app.use(routes);

app.listen(PORT, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port ' + PORT);
});