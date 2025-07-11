import express from 'express'

const router=express.Router();

router.get("/", (req, res)=>{
    res.json({mensaje: "esta es la ruta Get de mi entidad de categorias"});
});

router.get("/:id", (req, res)=>{
    const{id}=req.params;
    res.json({mensaje: 'esta es la ruta Get de mi entidad de categorias con id ${id}'});
});


router.post("/", (req, res)=>{
    res.post({mensaje: "esta es la ruta post de mi entidad de categorias"});
});

router.put("/:id", (req, res)=>{
    const{id}=req.params;
    res.json({mensaje: 'esta es la ruta Put de mi entidad de categorias con id ${id}'});
});

router.delete("/:id", (req, res)=>{
    const{id}=req.params;
    res.json({mensaje: 'esta es la ruta Delete de mi entidad de categorias con id ${id}'});
});

export default router;