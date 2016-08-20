import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyBdW4FUGvj0ivGFzpY4jaIizW_59Lz_yR4",
    authDomain: "fables-edb5c.firebaseapp.com",
    databaseURL: "https://fables-edb5c.firebaseio.com",
    storageBucket: "",
});

const cache = {};

function getFables() {
    if(cache.fables) {
        return Promise.resolve(cache.fables);
    }

    return firebase.database().ref('/fables').orderByChild('prio').once('value').then(snapshot => {
        const fables = [];
        snapshot.forEach(child => {
            fables.push(Object.assign({id: child.key}, child.val()));
        });
        cache.fables = fables;
        return fables;
    });
}

function getFable(id) {
    return getFables().then(fables => fables.find(fable => fable.id === id));
}

function getLanguages() {
    if(cache.languages) {
        return Promise.resolve(cache.languages);
    }
    return firebase.database().ref('/languages').once('value').then(snapshot => {
        const languages = snapshot.val();
        cache.languages = languages;
        return languages;
    });
}

export { getFables, getFable, getLanguages };
