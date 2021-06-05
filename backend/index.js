require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());
const db = require('./db');

const obterDespesa = (req, res) => {
    db.listarDespesa((despesas) => {
    despesas = despesas.map((d) => {
        return { id_despesa: d.id_despesa, valor_despesa: d.valor_despesa, motivo: d.motivo, situacao: d.situacao === 1 ? true : false}
    });
    res.json({ despesas });
    })
}

const obterReceita = (req, res) => {
    db.listarReceita((receitas) => {
    receitas = receitas.map((r) => {
        return { id_receita: r.id_receita, valor_receita: r.valor_receita };
    });
    res.json({ receitas });
    })
}


//despesa
app.get('/despesa', (req, res) => {
   obterDespesa(req, res);
})
    
app.post("/despesa", (req, res) =>{
    const d = req.body;
    db.inserirDespesa(d, (resultado)=> {
        obterDespesa(req, res)
    });
})

app.put('/despesa', (req, res) => {
    console.log(req.body);
    db.atualizarDespesa(req.body, (resultado) => {
        obterDespesa(req, res);
    });
});

//receita
app.get('/receita', (req, res) => {
    obterReceita(req, res);
});
    
app.post("/receita", (req, res) =>{
    const r = req.body;
    db.inserirReceita(r, (resultado)=>{
        obterReceita(req, res);
    });
})

app.put('/receita', (req, res) => {
    console.log(req.body);
    db.atualizarReceita(req.body, (resultado)=>{
        obterReceita(req, res);
    });
});


app.listen(process.env.PORT, () => console.log('up and running'));