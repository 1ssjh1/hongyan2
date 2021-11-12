const person = {
    name: '露露姐姐',
    age: 1000000,
    address: {
        city: 'ChongQing',
        area: 'NanShan'
    },
    title: ['student', { year: 2021, title: 'GoodStudent' }]
}
var area = person.address.area;
var mountain = area;
let { age: year } = person;
let { name } = person;
let { address: { city } } = person;



let { title: [title1, ] } = person;
let { title: [, { title }] } = person;
let title2 = title;
let { title: [, { year: title3 }] } = person;


console.log(name) // 露露姐姐
console.log(year) // 1000000 这里没有写错哈，就是要输出1000000，结合课件
console.log(city) // ChongQing 
console.log(mountain) // NanShan //这里没有写错，就是要输出NanShan，结合课件
console.log(title1) // student
console.log(title2) // GoodStudent
console.log(title3) // God 结合课件

// 期待老师的修改