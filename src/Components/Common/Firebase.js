



const Firebase=()=>{
const firebase = require('firebase') ;
    const config = {
      //your firebase config goes here
      };
    return  firebase.initializeApp(config);


}
export  const firebase = Firebase();

