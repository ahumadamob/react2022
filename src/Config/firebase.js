import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3uVdI5eAcGfqX6bV7o2_5CpHh-kPm66w",  
    authDomain: "utn-react-2022.firebaseapp.com",  
    projectId: "utn-react-2022",  
    storageBucket: "utn-react-2022.appspot.com",  
    messagingSenderId: "721203988940",  
    appId: "1:721203988940:web:5b3b944d6bd2238dbef569"  
  };  
  

  firebase.initializeApp(firebaseConfig)
  export default firebase
