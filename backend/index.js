require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());

let id_despesa = 2;
let id_receita = 2;

const despesas = [
    {
        id_despesa: 1,
        valor_despesa: 129.99,
        motivo: "Comida"
    }
]

const receita = [
    {
        id_receita: 1,
        valor_receita: 500.00,
    }
]

//despesa
app.get('/despesa', (req, res) => {
    res.json({despesas})
    });
    
app.post("/despesa", (req, res) =>{
    const d = req.body;
    despesas.push({id_despesa: id_despesa, valor_despesa: d.valor_despesa, motivo: d.motivo});
    id_despesa++;
    res.json({despesas});
    })

app.put('/despesa', (req, res) => {
    const index = despesas.findIndex(d => d.id_despesa === req.body.id_despesa);
    despesas[index] = {...req.body};
    res.json({despesas});
    })

//receita
app.get('/receita', (req, res) => {
    res.json({receita})
});
    
app.post("/receita", (req, res) =>{
    const r = req.body;
    receita.push({id_receita: id_receita, valor_receita: r.valor_receita});
    id_receita++;
    res.json({receita});
    })

app.put('/receita', (req, res) => {
    const index = receita.findIndex(r => r.id_receita === req.body.id_receita);
    receita[index] = {...req.body};
    res.json({receita});
    })


app.listen(process.env.PORT, () => console.log('up and running'));