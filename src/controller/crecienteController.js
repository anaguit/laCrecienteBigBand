const crecienteController = {
    inicio:(req,res)=>{
        res.render("inicio")
    },
    nosotros:(req,res)=>{
        res.render("nosotros")
    },
    trayectoria:(req,res)=>{
        res.render("trayectoria")
    },
    propuesta:(req,res)=>{
        res.render("propuesta")
    }
};

module.exports = crecienteController;