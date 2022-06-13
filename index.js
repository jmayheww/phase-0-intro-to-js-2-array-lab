// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function arrayFunctions() {
  beforeEach(function () {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
  });
}

function destructivelyAppendCat(newCat) {
  return cats.push(newCat);
}

destructivelyAppendCat("Ralph");

function destructivelyPrependCat(newCat) {
  return cats.unshift(newCat);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(lostCat) {
  return cats.pop(lostCat);
}
destructivelyRemoveLastCat("Garfield");

function destructivelyRemoveFirstCat(lostCat) {
  return cats.shift(lostCat);
}

destructivelyRemoveFirstCat("Otis");

function appendCat(name) {
     const copyOfCats = [...cats, name];
     return copyOfCats;
}

appendCat("Broom");

function prependCat(name) {
    const copyOfCats = [name, ...cats];
    return copyOfCats;
}
prependCat('Arnold');

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

removeLastCat();

function removeFirstCat() {
    return cats.slice(1);
}

removeFirstCat();