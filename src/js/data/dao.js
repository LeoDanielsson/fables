import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyBdW4FUGvj0ivGFzpY4jaIizW_59Lz_yR4",
    authDomain: "fables-edb5c.firebaseapp.com",
    databaseURL: "https://fables-edb5c.firebaseio.com",
    storageBucket: "fables-edb5c.appspot.com",
    messagingSenderId: "556542645548"
});

function getFables() {
    return firebase.database().ref('/fables').orderByChild('prio').once('value').then(snapshot => {
        const fables = [];
        snapshot.forEach(child => {
            fables.push(Object.assign({id: child.key}, child.val()));
        });
        return fables;
    });
}

function getLanguages() {
    return firebase.database().ref('/languages').once('value').then(snapshot => {
        return snapshot.val();
    });
}

export { getFables, getLanguages };
