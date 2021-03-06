/**
 * Created by paul on 7/25/17.
 */

const { bns } = require('../lib/index.js')

const assert = require('assert')

describe('add', function () {
  it('32 + 10 = 42', function () {
    assert.equal(bns.add('32', '10'), '42')
  })
  it('very big num', function () {
    assert.equal(bns.add('1234000000000000000000000000000000001234', '4321000000000000000000000000000000004321'), '5555000000000000000000000000000000005555')
  })
  it('0x100 + 10 = 266', function () {
    assert.equal(bns.add('0x100', '10'), '266')
  })
  it('0x100 + 0x10 = 272', function () {
    assert.equal(bns.add('0x100', '0x10'), '272')
  })
  it('0x100 + 0x10 = 0x110', function () {
    assert.equal(bns.add('0x100', '0x10', 16), '0x110')
  })
})

describe('sub', function () {
  it('32 - 10 = 22', function () {
    assert.equal(bns.sub('32', '10'), '22')
  })
  it('very big num', function () {
    assert.equal(bns.sub('9876000000000000000000000000000000009876', '4321000000000000000000000000000000004321'), '5555000000000000000000000000000000005555')
  })
  it('0x100 1 10 = 246', function () {
    assert.equal(bns.sub('0x100', '10'), '246')
  })
  it('0x100 - 0x10 = 272', function () {
    assert.equal(bns.sub('0x100', '0x10'), '240')
  })
  it('0x100 - 0x10 = 0xf0', function () {
    assert.equal(bns.sub('0x100', '0x10', 16), '0xf0')
  })
})

describe('less than', function () {
  it('15 < 20 = True', function () {
    assert.equal(bns.lt('15', '20'), true)
  })
  it('20 < 15 = False', function () {
    assert.equal(bns.lt('20', '15'), false)
  })
  it('20 < 20 = False', function () {
    assert.equal(bns.lt('20', '20'), false)
  })
  it('Big num true', function () {
    assert.equal(bns.lt('4321000000000000000000000000000000004320', '4321000000000000000000000000000000004321'), true)
  })
  it('Big num false', function () {
    assert.equal(bns.lt('4321000000000000000000000000000000004322', '4321000000000000000000000000000000004321'), false)
  })
  it('Big num eq false', function () {
    assert.equal(bns.lt('4321000000000000000000000000000000004322', '4321000000000000000000000000000000004322'), false)
  })
})

describe('greater than', function () {
  it('15 > 20 = false', function () {
    assert.equal(bns.gt('15', '20'), false)
  })
  it('20 > 15 = true', function () {
    assert.equal(bns.gt('20', '15'), true)
  })
  it('20 > 20 = false', function () {
    assert.equal(bns.gt('20', '20'), false)
  })
  it('Big num false', function () {
    assert.equal(bns.gt('4321000000000000000000000000000000004320', '4321000000000000000000000000000000004321'), false)
  })
  it('Big num true', function () {
    assert.equal(bns.gt('4321000000000000000000000000000000004322', '4321000000000000000000000000000000004321'), true)
  })
  it('Big num eq false', function () {
    assert.equal(bns.gt('4321000000000000000000000000000000004322', '4321000000000000000000000000000000004322'), false)
  })
})

describe('less than equal', function () {
  it('15 <= 20 = True', function () {
    assert.equal(bns.lte('15', '20'), true)
  })
  it('20 <= 15 = False', function () {
    assert.equal(bns.lte('20', '15'), false)
  })
  it('20 <= 20 = true', function () {
    assert.equal(bns.lte('20', '20'), true)
  })
  it('Big num true', function () {
    assert.equal(bns.lte('4321000000000000000000000000000000004320', '4321000000000000000000000000000000004321'), true)
  })
  it('Big num false', function () {
    assert.equal(bns.lte('4321000000000000000000000000000000004322', '4321000000000000000000000000000000004321'), false)
  })
  it('Big num eq true', function () {
    assert.equal(bns.lte('4321000000000000000000000000000000004322', '4321000000000000000000000000000000004322'), true)
  })
})

describe('greater than equal', function () {
  it('15 >= 20 = false', function () {
    assert.equal(bns.gte('15', '20'), false)
  })
  it('20 >= 15 = true', function () {
    assert.equal(bns.gte('20', '15'), true)
  })
  it('20 >= 20 = true', function () {
    assert.equal(bns.gte('20', '15'), true)
  })
  it('Big num false', function () {
    assert.equal(bns.gte('4321000000000000000000000000000000004320', '4321000000000000000000000000000000004321'), false)
  })
  it('Big num true', function () {
    assert.equal(bns.gte('4321000000000000000000000000000000004322', '4321000000000000000000000000000000004321'), true)
  })
  it('Big num eq true', function () {
    assert.equal(bns.gte('4321000000000000000000000000000000004322', '4321000000000000000000000000000000004322'), true)
  })
})

describe('equal', function () {
  it('15 == 20 = false', function () {
    assert.equal(bns.eq('15', '20'), false)
  })
  it('20 == 15 = false', function () {
    assert.equal(bns.eq('20', '15'), false)
  })
  it('20 == 20 = true', function () {
    assert.equal(bns.eq('20', '20'), true)
  })
})

describe('mulf', function () {
  it('123456789.12345 1000000000000 => 12345671234500000', function () {
    assert.equal(bns.mulf('123456789.12345', '1000000000000'), '123456789123450000000')
  })
  it('123456789 1000000000000 => 123456789000000000000', function () {
    assert.equal(bns.mulf('123456789', '1000000000000'), '123456789000000000000')
  })
  it('123456789. 1000000000000 => 123456789000000000000', function () {
    assert.equal(bns.mulf('123456789.', '1000000000000'), '123456789000000000000')
  })
  it('1234.56789.12345 1000 => Error', function () {
    assert.throws(() => {
      bns.mulf('1234.56789.12345', '1000')
    })
  })
  it('123456789.12345 1000 => Error', function () {
    assert.throws(() => {
      bns.mulf('123456789.12345', '1000')
    })
  })
})

describe('divf', function () {
  it('12345678 1000000000000 => .000012345678', function () {
    assert.equal(bns.divf('12345678', '1000000000000'), .000012345678)
  })
  it('12345678 100000000 => .12345678', function () {
    assert.equal(bns.divf('12345678', '100000000'), .12345678)
  })
  it('12345678 1000 => 1234.5678', function () {
    assert.equal(bns.divf('12345678', '10000'), 1234.5678)
  })
  it('123456789123456789 100000000 => 1234567891.23456789', function () {
    assert.equal(bns.divf('123456789123456789', '100000000'), 1234567891.23456789)
  })
  it('123456789123456789 1000000000000 => 123456.7891234567', function () {
    assert.equal(bns.divf('123456789123456789', '1000000000000'), 123456.7891234567)
  })
})

describe('max', function () {
  it('max(100, 1000) => 1000', function () {
    assert.equal(bns.max('100', '1000'), '1000')
  })
  it('max(2000, 100) => 2000', function () {
    assert.equal(bns.max('2000', '100'), '2000')
  })
  it('max(3000, 3000) => 3000', function () {
    assert.equal(bns.max('3000', '3000'), '3000')
  })
  it('max(0x100, 255) => 256', function () {
    assert.equal(bns.max('0x100', '255'), '256')
  })
  it('max(255, 0x100) => 256', function () {
    assert.equal(bns.max('255', '0x100'), '256')
  })
  it('max(257, 0x100, 16) => 0x101', function () {
    assert.equal(bns.max('257', '0x100', 16), '0x101')
  })
  it('very big num', function () {
    assert.equal(bns.max('9876000000000000000000000000000000000002', '9876000000000000000000000000000000000001'), '9876000000000000000000000000000000000002')
  })
})

describe('min', function () {
  it('min(100, 1000) => 100', function () {
    assert.equal(bns.min('100', '1000'), '100')
  })
  it('min(2000, 100) => 100', function () {
    assert.equal(bns.min('1000', '100'), '100')
  })
  it('min(3000, 3000) => 3000', function () {
    assert.equal(bns.min('3000', '3000'), '3000')
  })
  it('min(0x100, 255) => 255', function () {
    assert.equal(bns.min('0x100', '255'), '255')
  })
  it('min(255, 0x100) => 255', function () {
    assert.equal(bns.min('255', '0x100'), '255')
  })
  it('min(257, 0x100, 16) => 0x100', function () {
    assert.equal(bns.min('257', '0x100', 16), '0x100')
  })
  it('very big num', function () {
    assert.equal(bns.min('9876000000000000000000000000000000000002', '9876000000000000000000000000000000000001'), '9876000000000000000000000000000000000001')
  })
})


// describe('log10', function () {
//   it('100 => 2', function () {
//     assert.equal(bns.log10('100'), 2)
//   })
//   it('100000000000000000000 => 20', function () {
//     assert.equal(bns.log10('100000000000000000000'), 20)
//   })
//   it('100000000000000001000 => Error', function () {
//     assert.throws(() => {
//       bns.log10('100000000000000001000')
//     })
//   })
//   it('3000000000000000000 => Error', function () {
//     assert.throws(() => {
//       bns.log10('3000000000000000000')
//     })
//   })
//   it('00100000000000000001000 => Error', function () {
//     assert.throws(() => {
//       bns.log10('00100000000000000001000')
//     })
//   })
// })
//
