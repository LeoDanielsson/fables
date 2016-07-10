import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyBdW4FUGvj0ivGFzpY4jaIizW_59Lz_yR4",
    authDomain: "fables-edb5c.firebaseapp.com",
    databaseURL: "https://fables-edb5c.firebaseio.com",
    storageBucket: "",
});

let cache = {
  "-KM9odspCvurySVPYBp_" : {
    "artist" : "Annika Heed",
    "audioUrl" : "https://firebasestorage.googleapis.com/v0/b/fables-edb5c.appspot.com/o/p4_barnradion_20160113_1900_2feb57b.mp3?alt=media&token=cefc5a3c-1ceb-49e9-9247-a6bc46dbcc36",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere tempor hendrerit. Donec id consectetur neque. Donec molestie nisl quis commodo maximus.",
    "imageUrl" : "https://firebasestorage.googleapis.com/v0/b/fables-edb5c.appspot.com/o/169.jpg?alt=media&token=2b52a64a-3ec0-4799-bf99-7fc3a4fd7dd6",
    "name" : "Kamelen"
  },
  "-KM9ooywOyIHCO2lEQd0" : {
    "artist" : "Bosse Bengtsson",
    "audioUrl" : "https://firebasestorage.googleapis.com/v0/b/fables-edb5c.appspot.com/o/p4_barnradion_20160113_1900_2feb57b.mp3?alt=media&token=cefc5a3c-1ceb-49e9-9247-a6bc46dbcc36",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere tempor hendrerit. Donec id consectetur neque. Donec molestie nisl quis commodo maximus.",
    "imageUrl" : "https://firebasestorage.googleapis.com/v0/b/fables-edb5c.appspot.com/o/97.jpg?alt=media&token=a7ec068c-6adc-4cc2-b52b-da21c9ea6876",
    "name" : "Katten"
  },
  "-KM9osmzoAU81oeOHyeR" : {
    "artist" : "Uffe Larsson",
    "audioUrl" : "https://firebasestorage.googleapis.com/v0/b/fables-edb5c.appspot.com/o/p4_barnradion_20160113_1900_2feb57b.mp3?alt=media&token=cefc5a3c-1ceb-49e9-9247-a6bc46dbcc36",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere tempor hendrerit. Donec id consectetur neque. Donec molestie nisl quis commodo maximus.",
    "imageUrl" : "https://firebasestorage.googleapis.com/v0/b/fables-edb5c.appspot.com/o/148.jpg?alt=media&token=177c465e-6594-4fca-b553-24fe8dfd4e8f",
    "name" : "Björnen"
  },
  "-KM9ovAAu8gAPqREfd3B" : {
    "artist" : "Viveka Vitlök",
    "audioUrl" : "https://firebasestorage.googleapis.com/v0/b/fables-edb5c.appspot.com/o/p4_barnradion_20160113_1900_2feb57b.mp3?alt=media&token=cefc5a3c-1ceb-49e9-9247-a6bc46dbcc36",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere tempor hendrerit. Donec id consectetur neque. Donec molestie nisl quis commodo maximus.",
    "imageUrl" : "https://firebasestorage.googleapis.com/v0/b/fables-edb5c.appspot.com/o/145.jpg?alt=media&token=33dba9ed-e0ea-4751-8123-62c75998cfb3",
    "name" : "Haren"
  }
};

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
