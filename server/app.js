const express=require('express');
const cors=require('cors');
const baseroute=require('./routes/routes');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use(baseroute);

app.listen(5000);