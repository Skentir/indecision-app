var nameVar = "Hu Tao";
var nameVar = "Xiao";
console.log('nameVar', nameVar);

let nameLet = "Zhongli";
nameLet = "Childe"; //cannot redefine, can reassign
console.log('nameLet', nameLet);

const nameConst = "Beidou";
console.log('nameConst', nameConst);

function getCharName() {
    var charName = "Xiangling";
    return charName;
}

console.log(getCharName());