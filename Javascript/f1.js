// 1 

function identity(x) {
    return x;
}
console.log(identity(3));
console.log('\t');

// 2

function add(a, b) {
    return a + b;
}

console.log(add(3, 4));

function mul(a, b) {
    return a * b;
}

console.log(mul(3, 4));
console.log('\t');

// 3

function identityf(a) {
    return function idf() {
        return a;
    }
}

let idf = identityf(3);
console.log(idf());
console.log('\t');

// 4

function add1(a) {
    return function (b) {
        return a + b;
    }
}

console.log(add1(3)(4));
console.log('\t');

// 5

function applyf(value) {
    return function (a) {
        return function (b) {
            return value(a, b);
        }
    }
}

addf = applyf(add);
console.log(addf(3)(4));
console.log(applyf(mul)(5)(6));

console.log('\t');

// 6

function curry(value, a) {
    return function (b) {
        return value(a, b);
    }
}

add3 = curry(add, 3);
console.log(add3(4));
console.log(curry(mul, 3)(4));
console.log('\t');

// 7

function inc(a){
    return a+1;
}
var inc1 = applyf(add, 1);
var inc2 = addf(1);
var inc3 = curry(add, 1);

console.log(inc(5));
console.log(inc(inc(5)));
console.log('\t');

// 8

function methodize(binary){
    return function(y){
        return binary(this,y)
    }
}

Number.prototype.add = methodize(add);
console.log((3).add(4));
console.log('\t');

//9 

function twice(binary) {
    return function (x) {
        return binary(x, x)
    }
}

var double = twice(add);
console.log(double(11));

var square = twice(mul);
console.log(square(11));
console.log('\t');

//10 

function composeu(fun1, fun2) {
    return function (x) {
        return fun2(fun1(x));
    }
}


console.log(composeu(double,square)(3));