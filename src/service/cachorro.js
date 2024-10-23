const ModelCachorro = require("../model/cachorro")
//criando a classe ServiceCachorro
class ServiceCachorro{
    GetCachorro(){

        //fazer cerificações - ex. se mandou o nome
        return ModelPessoas.GetCachorro()
    }
    CreateCachorro(name, race){
        return ModelCachorro.CreateCachorro(name, race)
    }
    UpdateCachorro(id, name){
        return ModelCachorro.UpdateCachorro(id,name, race)
    }
    DeleteCachorro(id){
        return ModelCachorro.DeleteCachorro(id)
    }
}

module.exports = new ServiceCachorro()