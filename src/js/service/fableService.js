import fablesData from '../../../data/fables.json';

let fables;

function getFables() {
    fables = fables || fablesData.fables;
    return fables;
}

function getFable(id) {
    return getFables().find(fable => fable.id === id);
}

export { getFables, getFable };
