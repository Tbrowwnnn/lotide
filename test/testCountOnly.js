const result1 = require('../countOnly');
const assert = require('chai').assert;

describe('#countOnly', () => {

  it("returns 1 for ['Jason']", () => {
    assert.strictEqual(result1["Jason"], 1);
  })
  it("returns undefined for ['Karima']", () => {
    assert.strictEqual(result1["Karima"], undefined);
  })
  it("returns 2 for ['Fang']", () => {
    assert.strictEqual(result1["Fang"], 2);
  })
  it("returns undefined for ['Agouhanna']", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  })
})
