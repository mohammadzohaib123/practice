import Actions from '../Action/Actions'
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyByBZkTRSWftSWmZ4GJIgICuhQyI0SQ8ys",
    authDomain: "firsthosting-87e23.firebaseapp.com",
    databaseURL: "https://firsthosting-87e23.firebaseio.com",
    projectId: "firsthosting-87e23",
    storageBucket: "firsthosting-87e23.appspot.com",
    messagingSenderId: "482841395658"
  };
 var fire = firebase.initializeApp(config);
 var fireDatabase=fire.database().ref("/");

 export function getData(){
     return new Promise((res,rej)=>{
         fireDatabase.child('Restaurants/OcPCTJHEU3MZKu619Ry8OdhhaVg2/Kitchen/Orders').once("value",(snapshot)=>{
             console.log(snapshot);
             res(snapshot)
         })
     })
 }
  
 export function setStatus(key){
     console.log(key)
     return new Promise((res,rej)=>{
         fireDatabase.child('Restaurants/OcPCTJHEU3MZKu619Ry8OdhhaVg2/Kitchen/Orders/'+key.path).set({
             ...key.val
          },
          () => {
            console.log('in resolve')
            res({
              status:"abc"
            });//res end
          }//() end
        );//.set end
          
    });
}