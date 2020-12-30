



// const number = [20,30,40];
// console.log(number);
 
 const nums = [1, 2, 3];

const user = {

    name: 'ali',
    familyname: 'aghakhani',
    age: 20,
    walk(){
       
         console.log(this.name,'userwalking')
        // return 'hello world'

    },
    array: [{ name: 'mehrad', age: '32', grade: 'c-' }, { title: 'computer', methods: 'php', grade:'a+'} ]
    ,
    objectsOfarray : {

        name1: ['hesam', 'hossein', 'mersad'],
        name2: [{ name: 'mehrad', age: '32', grade: 'c-' }, { title: 'computer', methods: 'php', grade: 'a+' } ]

    }
    ,
    nums,
     
    
}

// user.walk();
console.log(user.nums[2])

 console.log(user.objectsOfarray.name2[0].age)

// console.log(user.walk());



// ////// array functions 
const numbers = [1, 4, 3];
// for( key in numbers)
// {
//     console.log(numbers[key]);
// }
    
// const newNums = numbers.map(function (number) {
    
//     return numbers;

// }) bottom way is better 
const newNums = numbers.map( (number) => numbers)

console.log(numbers);


// function addThree(number) {
    
//     return number + 1;

// } 

var addThree = (number) => {
    
    return number + 1;

}
  

// console.log(addThree(5))

// const [numOne, numTwo, numThree] = [1, 2, 3]
// const [man, woman] = [{ name: 'ali', family: 'aghakhani', age: '26' }, { name: 'sara', family: 'saraee', age: '23' }]
// console.log(woman.name)


// const { user } = user 


// primitive refrence types 

let ali = '20'

let reza = ali;

ali = '30'

console.log(reza);


let sara = [2, 4, 5];

let mahtab = sara.slice()

sara[1] = 6

sara = [5,5,5]
// console.log(sara)
console.log(mahtab)


let hossein = {
    name: 'ali',
    age : '22'
}

const newUser = hossein 

 hossein = {
    ...hossein,
    name:'hes'
}


console.log(hossein)
