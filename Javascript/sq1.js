function stack(n) {
    items =[]
    
function push(ele) {
    if (items.length >= 20)
        console.log('Stack Overflow');
    else
        items.push(ele)
};

function pop() {
    if (items.length <= 0)
        console.log('Underflow');
    else
        console.log(items.pop());
}
    return {push:push,
            pop:pop};
}

let stack1 = stack(20);
stack1.push('item 0');
stack1.push('item 1');
stack1.pop();

function queue(n) {
    items =[]

function add(element) {
    if(items.length >= 20)
        console.log('Overflow');
        else
        items.push(element);

}

function remove() {
    if (items.length <= 0)
        console.log('Underflow');
        else
        console.log(items.shift());
}
    return {add:add,
            remove:remove};
}
let que1 = queue(20);
que1.add('item 0');
que1.add('item 1');
que1.remove() 


