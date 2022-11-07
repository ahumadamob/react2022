import instance from "../Config/axios"
export function getAllProductos(){
    return instance.get("sites/MLA/search?q=messi")
}
export function getByIdProductos(id){
    return instance.get(`items/${id}`)
}
export function createProductos(){
    
}