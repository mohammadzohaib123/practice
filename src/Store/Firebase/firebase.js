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
         fireDatabase.child('Restaurants/OcPCTJHEU3MZKu619Ry8OdhhaVg2/Tables').once("value",(snapshot)=>{
             res(snapshotToArray(snapshot))
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
export function changeStatus(key){
    console.log(key)
    return new Promise ((res)=>{
        fireDatabase.child('Restaurants/OcPCTJHEU3MZKu619Ry8OdhhaVg2/Kitchen/Orders/'+key.key).set({
           ...key.val
        })
    })
}

// function snapshotToArray(snapshot) {
//     var returnArr = [];
//     var key=[];
//     var item=[];
//     snapshot.forEach(function(childSnapshot) {
//         console.log(childSnapshot.val())
//         var item = childSnapshot.val();
//         item.key = childSnapshot.key;
//         returnArr.push(item);
//     });
//     //  returnArr.map(value=>{
//     //     console.log(value.Orders);
//     //     var order=value.Orders
//     //     key.push(Object.keys(order));
//     //     console.log(key)
//     //     item.push(Object.values(order))
//     //     console.log(item);
//     //  })
//  return returnArr;
// };
function snapshotToArray(snapshot) {
    var returnArr = [];
    var returnKey=[];
    snapshot.forEach(function(childSnapshot) {
        console.log(childSnapshot.val())
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnKey.push(item.key);
        returnArr.push(item);
    });


    return {returnArr,returnKey};
};