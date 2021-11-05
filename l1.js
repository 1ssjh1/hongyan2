let obj = { name: "juanjuan", age: 18, gender: 'male or famle' };


function copy(insertObj) {
    let newObj = {};

    for (let i in insertObj) {
        newObj[i] = insertObj[i];
    }
    return newObj;
}


let obj1 = Object.assign({}, obj);
let obj2 = JSON.parse(JSON.stringify(obj));
let obj3 = Object.create(obj);


let arr = [];


arr.push(obj1, obj2, obj3);

console.table(arr);