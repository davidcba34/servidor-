const express = require ("express");
const app = express ();
const PORT =8080;


const server = app.listen (PORT, () =>{
    console.log ("Servidor corriendo en el puerto" + PORT);

});


app.get ("/", (req, res)=> {
    res.json({mensaje : 'index de mi app'});

});

