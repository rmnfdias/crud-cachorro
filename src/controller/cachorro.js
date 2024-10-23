const ServiceCachorro = require ('../service/cachorro')

class ControllerCachorro{
    GetCachorro(req, res){
        try {
            const cachorro = ServiceCachorro.GetCachorro()
            res.send({msg: cachorro})
            
        } catch (error) {
            res.status(500).send({msg: error.message})            
        }

    }
    CreateCachorro(req, res){
        try {
            const name = req.body.name
            const cachorro = ServiceCachorro.CreateCachorro(name)
            
            res.send({msg: cachorro})

            } catch (error) {
            res.status(500).send({msg: error.message})            
            }
    }
    UpdateCachorro(req, res){
        try {const name = req.body.name
            const id = req.params.id
            const cachorro = ServiceCachorro.UpdateCachorro(id, name)
            
            res.send({msg: cachorro})

            } catch (error) {
            res.status(500).send({msg: error.message})            
            }
    }
    DeleteCachorro(req, res){
        try {
            const id = req.params.id
            const cachorro = ServiceCachorro.DeleteCachorro(id)
            
            res.send({msg: cachorro})
            } catch (error) {
            res.status(500).send({msg: error.message})            
            }
    }

}

module.exports = new ControllerCachorro()