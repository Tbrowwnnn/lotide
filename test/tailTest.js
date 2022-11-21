const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail(["hello"]).length, 2);
assertEqual(tail(["hello", "My name is", "Slim Shady"]).length, 2);
