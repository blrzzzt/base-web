// syntax parser 
// a program that reads code and determines
// what is does and if its grammer is valid

// lexical environment
// where something sits physically in the code you write

// execution context
// a wrapper to help manage the code that is running

// name value pair
// a name which maps to a unique value

// single threaded
// one command at a time (from our perspective)

// synchronous
// one at a time (and in order)

// invocation
// running a function()

// variable environment
// where the variable lives in memory

// scope
// where a variable is available in your code (same variable or new copy)

// namespace
// a container for variables and functions (javascript doesn't have or need them)

// first class functions
// everything you can do with other types, you can do with functions


// expression
// a unit of code that results in a value



//setting array.length directly 
// s = []
// s.length = 40
// s // [undefined x 40]
{

let s = []
s.length = 40
console.log(s) // [undefined x 40]

}

/////////////////////////////////////////////////////////////

(function() {
    let person = {
        fn: "tony",
        ln: "balogny",
        address: {
            street: "you bastard",
            city: "ny",
            state: "you know the state you moron"
        }
    }

    let english = {
        greetings: {
            greet: `hello ${person.fn}!`,


        }
    }


    let anonymousGreet = function() {
        console.log (english.greetings.greet)
    }

    let a = 1
    let b = 2
    let c = false
    if (a < b) {
        c = true
    }

    return anonymousGreet()
})()