const {createNewUser} = require('./user-factory');
let x = require('./fs.js');

let newUser = createNewUser('Nastya', 20);
newUser.hello();




