import instance from "../Config/axios"
export function getAllProductos(buscar){
    return instance.get(`sites/MLA/search?q=${buscar}`)
}
export function getByIdProductos(id){
    return instance.get(`items/${id}`)
}
export function createProductos(){
    
}