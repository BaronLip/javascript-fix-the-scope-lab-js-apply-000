var animal = 'dog'

function myAnimal() {
  return animal
}

// How can we make sure that this function
// and the above function both pass?
// P.S.: You can't just hard-code 'cat' below

function yourAnimal() {
  var animal = "cat"
  return animal
}




// Feel free to move things around!

n = Math.floor(Math.random() * 1000)

function add2(n) {
  const two = 2
  return n + two
}




var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.


function funkyFunction() {
  var funky = "FUNKY!"
  return function theFunk() {
    return funky;
  }
}

var funky = theFunk()



// var theFunk = funkyFunction();
// theFunk()
  
  
// describe('funkyFunction()', function() {
//     it('returns a function', function() {
//       expect(typeof window.funkyFunction()).toEqual('function')
//     })
//   })

//   describe('theFunk', function() {
//     it('is "FUNKY!"', function() {
//       expect(window.theFunk).toEqual('FUNKY!')
//     })
//   })

