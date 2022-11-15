import firebase from '../Config/firebase'

export async function getAllProductos(){
    const querySnapshot = await firebase.firestore().collection("productos")
    .get()
    return querySnapshot.docs
}
export async function getByIdProductos(id){
    const querySnapshot = await firebase.firestore().doc(`productos/${id}`).get()
    return querySnapshot
}
export async function update(id,payload){
    return await firebase.firestore().doc(`productos/${id}`).set(payload)
}
export async function deleteProducto(id){
    return await firebase.firestore().doc(`productos/${id}`).delete()
}