const cats = ["Milo", "Otis", "Garfield"]
console.log(cats);

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(name){
    return cats.push('Ralph')
}
console.log(destructivelyAppendCat);

function destructivelyPrependCat(name){
    return cats.unshift('Bob')
}
console.log(destructivelyPrependCat);

function destructivelyRemoveLastCat(name){
    return cats.pop();
}
console.log(destructivelyRemoveLastCat);

function destructivelyRemoveFirstCat(name){
    return cats.shift();
}
console.log(destructivelyRemoveFirstCat);

function appendCat(name){
    return [...cats, "Broom"];
}
console.log(appendCat);

function prependCat(name){
    return ["Arnold", ...cats];
}
console.log(prependCat);

function removeLastCat(){
    return cats.slice(0, -1)
}
console.log(removeLastCat);

function removeFirstCat(){
    return cats.slice(1)
}
console.log(removeFirstCat);




