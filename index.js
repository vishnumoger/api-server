const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());

app.get('/api/startCharging/CHARGEON', async (req, res, next) => {
  console.log(1111)
  Status = true;
  console.log(Status)
  res.send("CHARGE ON")
});

app.get('/api/startCharging/CHARGEOFF', async (req, res, next) => {
  console.log(1111)
  Status = false;
  console.log(Status)
  res.send("CHARGE OFF")
});


app.listen(9002, () => {
  console.log('API server is listening on port 9002')
})