import express from 'express'
import configurarRutas from "./routes/index.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.json({ mensaje:"Bienvenido a la api de VocaloidStore"});
});

configurarRutas(app);

app.listen(port, ()=>{
    console.log('servidor escuchando http://localhost:${port}')
})