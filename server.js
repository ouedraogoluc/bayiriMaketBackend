const express = require('express');

const  data  = require("./data");

// import data from "./data";

const app = express();


app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});



app.get('/api/products',(req,res)=>{
    res.send(data.products);
  });''

const port = process.env.PORT || 5000;

//ecoute du port
app.get("/",async(req,res)=>{
    res.send("hello welcome to my web site");
  });
  app.listen(port,()=>{
      console.log(`la connexion est ouverte sur le port.${port}`);
  });