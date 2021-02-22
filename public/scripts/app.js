"use strict";

var nameVar = "Hu Tao";
var nameVar = "Xiao";
console.log('nameVar', nameVar);

var nameLet = "Zhongli";
nameLet = "Childe"; //cannot redefine, can reassign
console.log('nameLet', nameLet);

var nameConst = "Beidou";
console.log('nameConst', nameConst);

function getCharName() {
    var charName = "Xiangling";
    return charName;
}

console.log(getCharName());
