
const express = require('express')
const app = express()
const port = 3000
let url;

app.get('/', (req, res) => {
    url = req.url.replace(/\/*\?\%/gi, "")
    // async function getUrl(){
    //     await res.send(url)

    // }
    console.log(url)
    return url
    res.end()
})
console.log("outside url: " + url)
app.listen(port, () => {
  console.log("inside url " + url)
  console.log(`Example app listening at http://localhost:${port}`)
})
