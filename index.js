// Q.--- Write a fn. that will allow you to do this

var addSix = createBase(6);
addSix(10)      // 16
addSix(21)      // 27

// SOLUTION
function createBase(num) {
    return function (secondNum) {
        console.log(num + secondNum);
    }
}





// Q.--- Time Optimization

function find() {
    let a = [];
    for (let i = 0; i < 100000; i++) {
        a[i] = i * i;
    }

    return function (index) {
        console.log(a[index]);
    }

}

// Closures helps in excecution of code in very less time

const findReturnFn = find();

console.time("10")
findReturnFn(10)
console.timeEnd("10")

console.time("6")
findReturnFn(6);
console.timeEnd("6")






// Q.--- Block scope and setTimeout output 


// function blockScope() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
//     }
// }

function blockScope() {
    for (var i = 0; i < 3; i++) {

        function innerFn(index) {
            setTimeout(() => {
                console.log(index);
            }, index * 1000);
        }

        innerFn(i);
    }
}

blockScope();









// Q.--- Creating a private counter using closure.

function counter() {
    var counter = 0;

    function add(inc) {
        counter += inc;
    }

    function retrieve() {
        return "Counter is: " + counter;
    }

    return {
        add, retrieve
    }
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrieve());







// Q.--- Module Pattern

var Module = (function () {
    function privateMethod() {
        console.log("private method");
    }

    return {
        publicMethod: function () {
            console.log("public method");
            // this public method will only be returned and this public method can be used to access private method 
        }
    }
})()
// Why to add the parenthesis in last line ? To immedietely invoke function exp (IIFE), if not we can write `Module().publicMethod()` in below line.

Module.publicMethod();











// Q.--- Make the function run only once.

let view;

function likeVideo() {
    let called = 0;

    return function () {
        if (called === 0) {
            console.log('Pls subscribe');
            called++;
        } else {
            view = 'Channel'
            console.log('Already subscribed to the ', view);

            // return
        }
    }
}

let isSubs = likeVideo();
isSubs();
isSubs();
isSubs();









// CURRYING QUESTIONS



// Q.--- Implement fn. sum(2)(3)(4)

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log("Sum is:", sum(2)(3)(4));



// Q.--- Implement this fn. :-
// evaluate("sum")(2)(3) => 5
// evaluate("multiply")(2)(3) => 5
// evaluate("substract")(2)(3) => -1
// evaluate("divide")(2)(3) => 0.66...

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation === "sum") return a + b;
            else if (operation === "substract") return a - b;
            else if (operation === 'multiply') return a * b;
            else if (operation === 'divide') return a / b;
        }
    }
}


console.log(evaluate("sum")(2)(3));
console.log(evaluate("multiply")(2)(3));
console.log(evaluate("substract")(2)(3));

const divideRes = evaluate("divide")
console.log(divideRes(2)(3));




// Q.(IMP**)--- Infinite currying -> sum(1)(2)(3)...(n)()

function infiniteSum(a) {
    return function (b) {
        if (!b) return a;
        return infiniteSum(a + b);
    }
}

console.log(infiniteSum(2)(3)(4)(5)());






// Q.--- Manipulating DOM 

function manipulateHeading(id) {
    return function (content) {
        document.querySelector("#" + id).textContent = content;
    }
}

const updateHeader = manipulateHeading("heading");
updateHeader("Hello This .....")

// BASICALLY, WE CAN USE IT TO MANIPULATE DOM MULTIPLE NO. OF TIME JUST BY DECLARING ONES.




// Q.--- curry() implementation
// Converts f(a,b,c) into f(a)(b)(c)

