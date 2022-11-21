const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it("return '2' for [Hello].length", () => { assert.deepEqual(tail(["Hello"]).length, 0); 
});

  it("return '2' for [Hello].length", () => { assert.strictEqual(tail(["hello", "My name is", "Slim Shady"]).length, 2); 
});

});

