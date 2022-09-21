// Implementation of Stack using Function

// let stack=[]
//     function push(ele) {
//         if(stack.length >= 20)
//            return 'Stack Overflow';
//         else
//         return stack.push(ele);

//     }
//     function pop() {
//         if (stack.length <= 0) 
//         return 'Underflow';
//         else
//             return stack.pop();
//     }

// push('item 0')
// push('item 1')


// console.log(stack);
// console.log(stack.pop());


// Implementation of Stack using Constructor

class stack {
    constructor() {
        this.item = []
    }

    push(ele) {
        if(this.item.length >= 20)
            console.log('Stack Overflow');
        else 
        return this.item.push(ele);
    }

    pop() {
        if(this.item.length <= 0)
        return 'Stack Underflow';
        else
        return this.item.pop();
    }
}

let stack1 = new stack(20);
stack1.push('item 0')
stack1.push('item 1')


// stack1.push('item 2')
// stack1.push('item 3')
// stack1.push('item 4')
// stack1.push('item 5')
// stack1.push('item 6')
// stack1.push('item 7')
// stack1.push('item 8')
// stack1.push('item 9')
// stack1.push('item 10')
// stack1.push('item 11')
// stack1.push('item 12')
// stack1.push('item 13')
// stack1.push('item 14')
// stack1.push('item 15')
// stack1.push('item 16')
// stack1.push('item 17')
// stack1.push('item 18')
// stack1.push('item 19')
// stack1.push('item 20')

console.log(stack1.item);
console.log(stack1.pop());


// Implementation of Queue using Constructor

class Queue {
    constructor () {
        this.item=[]
    }

    enqueue(element) {
        if(this.item.length >= 20)
        console.log('Overflow');
        else
        return this.item.push(element);
    }

    dequeue(){
        if(this.item.length <+ 0)
        return 'Underflow'
        return this.item.shift();
    }
}

let que1 = new Queue(20);
que1.enqueue('item 0')
que1.enqueue('item 1')


console.log(que1.item);
console.log(que1.dequeue());

// Implementation of Queue using Function

let queue = []

function add(element) {
    if(queue.length >= 20)
        throw('Overflow');
        else
        return queue.push(element);

}

function remove() {
    if (queue.length <= 0)
        return 'Underflow'
    return queue.shift();
}

add('item 0')
add('item 1')

console.log(queue);
console.log(remove());