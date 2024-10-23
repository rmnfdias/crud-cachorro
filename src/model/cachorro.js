const nomes = new Array("Ted", "Chopper", "Chico")

class ModelCachorro{
    GetCachorro(){
        return nomes, raca
    }
    CreateCachorro(name, race){
        return nomes.push(name,race)
    }
    UpdateCachorro(id, name, race){
        return nomes[id] = name, race
    }
    DeleteCachorro(id){
        return nomes.splice(id, 1)
    }
}

module.exports = new ModelCachorro()