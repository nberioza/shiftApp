



const Firebase=()=>{
const firebase = require('firebase') ;
    const config = {
        apiKey: 'AIzaSyBl_yXrVKzbp6bQ0aJ6kNZqoRF0Sj-WJmE',
        authDomain: 'shiftsapp-1cdc1.firebaseapp.com',
        databaseURL: 'https://shiftsapp-1cdc1.firebaseio.com',
        projectId: 'shiftsapp-1cdc1',
        storageBucket: '',
        messagingSenderId: '66390814105'
      };
    return  firebase.initializeApp(config);


}
export  const firebase = Firebase();

