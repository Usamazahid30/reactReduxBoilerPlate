import firebase from '../../config/firebase'
// import firebase from 'firebase'
const set_data = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SETDATA", data: data,
            users: { name: "Muhammad Usama", email: "zahidusama@gmail.com" }
        })
    }
}

// const Facebook_login = (data) => {
//     return (dispatch) => {
//         var provider = new firebase.auth.FacebookAuthProvider();
//         firebase
//             .auth()
//             .signInWithPopup(provider)
//             .then((result) => {
//                 var credential = result.credential;

//                 var user = result.user;
//                 console.log("user==>", user);

//             })
//             .catch((error) => {
//                 // Handle Errors here.
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 // The email of the user's account used.
//                 var email = error.email;
//                 // The firebase.auth.AuthCredential type that was used.
//                 var credential = error.credential;

//                 // ...
//             });
//     }
// }

export {
    set_data,
    // Facebook_login,
}