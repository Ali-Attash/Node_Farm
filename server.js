// core modules
const http = require('http');
const fs = require('fs');
const url = require('url');

// read all templates at once
const layoutOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const layoutProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const layoutCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');

// parse product data
const rawData = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const products = JSON.parse(rawData);

// helper: inject product data into template
const fillTemplate = (tpl, item) => {
  let output = tpl;
  output = output.replace(/{%PRODUCTNAME%}/g, item.productName);
  output = output.replace(/{%IMAGE%}/g, item.image);
  output = output.replace(/{%PRICE%}/g, item.price);
  output = output.replace(/{%QUANTITY%}/g, item.quantity);
  output = output.replace(/{%NUTRIENTS%}/g, item.nutrients);
  output = output.replace(/{%FROM%}/g, item.from);
  output = output.replace(/{%DESCRIPTION%}/g, item.description);
  output = output.replace(/{%ID%}/g, item.id);
  output = output.replace(/{%NOT_ORGANIC%}/g, item.organic ? '' : 'not-organic');
  return output;
};

// start server
const app = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  // route: overview
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const cards = products.map(p => fillTemplate(layoutCard, p)).join('');
    const finalOutput = layoutOverview.replace('{%CARDS%}', cards);
    res.end(finalOutput);

  // route: individual product
  } else if (pathname === '/product') {
    const product = products[query.id];
    if (product) {
      const productHTML = fillTemplate(layoutProduct, product);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(productHTML);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>Product not found</h1>');
    }

  // route: API
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(rawData);

  // route: 404
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Page Not Found</h1>');
  }
});

// launch server
app.listen(3030, () => {
  console.log('🚀 Server running at http://localhost:3030');
});
