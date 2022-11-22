const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it('returns number list for ""', () => {
    assert.deepEqual(letterPositions("My name is Tyler Brown."), {
      M: [0],
      y: [1, 12],
      n: [3, 21],
      a: [4],
      m: [5],
      e: [6, 14],
      i: [8],
      s: [9],
      T: [11],
      l: [13],
      r: [15, 18],
      B: [17],
      o: [19],
      w: [20],
      '.': [22]
    });
    it('returns number list for "LightHouse Labs"', () => {
      assert.deepEqual(letterPositions("LightHouse Labs"), {
        L: [0, 11],
        i: [1],
        g: [2],
        h: [3, 5],
        t: [4],
        o: [6],
        u: [7],
        s: [8, 14],
        e: [9],
        a: [12],
        b: [13],
        '.': [15]
      });
    });
    it('returns number list for "eeeeeeeeeeeeeeeeeee"', () => {
      assert.deepEqual(letterPositions("eeeeeeeeeeeeeeeeeee"), {
        e: [
          0, 1, 2, 3, 4, 5, 6,
          7, 8, 9, 10, 11, 12, 13,
          14, 15, 16, 17, 18
        ]
      });
    });
  });
});

