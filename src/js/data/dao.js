import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyBdW4FUGvj0ivGFzpY4jaIizW_59Lz_yR4",
    authDomain: "fables-edb5c.firebaseapp.com",
    databaseURL: "https://fables-edb5c.firebaseio.com",
    storageBucket: "",
});

let cache;

function getFables() {
    if(cache) {
        return Promise.resolve(cache);
    }

    return firebase.database().ref('/fables').once('value').then(snapshot => {
        const fables = snapshot.val();
        cache = fables;
        return fables;
    });
}

function getFable(id) {
    return getFables().then(fables => fables[id]);
}

export { getFables, getFable };
