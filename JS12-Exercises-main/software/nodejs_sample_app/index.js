const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const xhr = new XMLHttpRequest();
const express = require('express')
const app = express()
const port = 3000
let url;
getUrl()
  .then(console.log("inside get " + url))
  .then(console.log())


async function getUrl() {

  await app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.ip)
    console.log(req.hostname)
    async function reqListener() {
      console.log(this.responseText);
    }


    xhr.addEventListener("load", reqListener);
    xhr.open("GET", "::ffff:127.0.0.1:3000");
    xhr.send()
    app.path(req.url)
    res.send(`<p>URL is: ${req.url}</p>`);
    return url = req.url
  })

}


app.listen(port, () => {
  console.log("inside listen " + url);
  console.log(`Example app listening at http://localhost:${port}`)
})

console.log("outside listen " + url);

