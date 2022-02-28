const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 3001

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
