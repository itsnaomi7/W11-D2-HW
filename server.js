const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const num_bottles = 99;
    res.send(`
      <h1> 99 bottles of beer on the wall</h1>
      <a href="/98">take one down, pass it around</a>
    `);
  });

  app.get('/:num', (req, res) => {
    const num = parseInt(req.params.num);
    let nextNum = num - 1;
  
    let link = '';
    if (nextNum > 0) {
      link = `<a href="/${nextNum}">Take one down, pass it around</a>`;
    }
  
    res.send(`
      <h1>${num} Bottles of beer on the wall</h1>
      ${link}
      <br />
      <br /> 
      <a href="/" style="color: red;">Start over!</a>
    `);
  });


  app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
  });