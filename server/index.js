//-------------------------------------require-statements-------------------------
const express = require('express');
const path = require('path');
const fs = require('fs');
//-------------------------------------other-constants----------------------------
const app = express();
const port = 3001;
//-------------------------------------all RESTful calls--------------------------

app.use(express.static(path.join(__dirname,'../client','public')));

app.listen(port,() => console.log(`Mothership is listening at port : ${port}`));