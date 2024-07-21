
module.exports = (app) => {
    const peserta = require("../controllers/peserta.controller")
    let router = require("express").Router()
    
    router.get("/getall", peserta.readAll)
    router.post("/create", peserta.create)
    router.put("/update/:id", peserta.update)
    router.delete("/delete/:id", peserta.delete)
    
    router.get("/:id", peserta.readById)
    app.use("/api/peserta" , router)
  }