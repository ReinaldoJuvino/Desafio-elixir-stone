const app = require('express')();  
const consign = require('consign');


consign()
    .then('./src/config/middlewares.js')
    .then('./src/api')
    .then('./src/config')
    .into(app);

app.listen(3000, () => console.log('Server running'));
