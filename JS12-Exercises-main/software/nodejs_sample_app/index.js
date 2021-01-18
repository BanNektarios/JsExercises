const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path')
let url;



app.get('/api/posts', (req,res) => {
  res.json(posts)
})



app.use(express.static(path.join(__dirname, 'public')))

  // app.get('/', (req, res) => {
  //   console.log(`Inside .get URL: ${req.url}`)
  //   console.dir(req.url)
  //   console.dir(req.query)
  //   url = req.url
  //   res.sendFile(path.join(__dirname, 'public', 'index.html'))
  // })

app.listen(port, () => {
  console.log(".listen log: " + url);
  console.log(`Example app listening at http://localhost:${port}`)})


console.log("GLOBAL LOG: " + url)


