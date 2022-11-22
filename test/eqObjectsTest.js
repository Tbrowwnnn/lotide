const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };

  it("returns true for (cd, dc)", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it("returns false for (cd, cd2)", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });
});

// eqObjects((ab, ba), true);
// eqObjects((ab, ba), true);  
// eqObjects((ab, abc),false);