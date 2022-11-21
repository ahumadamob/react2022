import firebase from '../Config/firebase'

export async function getAllProducts(){
    const querySnapshot = await firebase.firestore().collection("products")
    .get()
    return querySnapshot.docs
}
export async function getProductById(id){
    const querySnapshot = await firebase.firestore().doc(`products/${id}`).get()
    return querySnapshot
}
export async function updateProduct(id,payload){
    return await firebase.firestore().doc(`products/${id}`).set(payload)
}
export async function deleteProduct(id){
    return await firebase.firestore().doc(`products/${id}`).delete()
}