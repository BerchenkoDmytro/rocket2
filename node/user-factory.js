function createNewUser(name, age) {
    return {
        name,
        age,
        hello: () => {
            console.log(`Hello my name is ${name}`);
        }
    }
}

function createNewUser22(name, age) {
    return {
        name,
        age,
        hello: () => {
            console.log(`Hello my name is ${name}`);
        }
    }
}

let newUser22 = createNewUser22('Andre', 22);
console.log(newUser22);
newUser22.hello();

module.exports = {
    createNewUser
}

// module.exports.addNewName =() => {
//     console.log('TEST')
// }

// module.exports.string = 'STR';

// module.exports = {
//     addNewName: () =>{
//         console.log('TEST')
//     },
//     string: 'STR'
// }