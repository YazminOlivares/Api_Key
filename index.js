const app = require('./app');
const PORT = process.env.PORT || 3000;
/*const express = require('express');
const bodyParser = require('body-parser');

const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/task', taskRoutes);

module.exports = app;*/

app.listen(PORT, ()=>{
        console.log(`Servidor corriendo en el puerto ${PORT}`);
})