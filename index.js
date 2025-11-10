const express = require('express');
const app = express();
const port = process.env.PORT || 3010;

app.get('/', (req, res) => {
  res.send("Provider: Railway 🚆");
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});