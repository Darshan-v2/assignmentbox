let values = ['belle', 'candy', 'distributed', '113', 'Test', 'T!esT!', ' money ', 'test apples', '$$%^*&', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet metus et sodales dapibus. Fusce sodales in odio sit amet ornare. Proin suscipit elit at dui ornare molestie. Suspendisse congue finibus tellus, vel gravida lacus auctor non. Aliquam odio ex, venenatis vel pellentesque eu, cursus vel est. Etiam elementum ante odio, ac venenatis massa consequat ac. Pellentesque malesuada porta risus eget aliquam. Praesent suscipit ut justo tempus vehicula. Praesent hendrerit libero eu pharetra ornare. Sed nisi leo, laoreet vel dictum sed, finibus quis sem.'];
function removeDuplicates(str) {
    char = '',
        charcount = {},
        newstr = [];

    ch = str.toString().toLowerCase();

    rec(0, char, charcount, ch);

    for (let j in charcount) {
        if (charcount[j] == 1)
            newstr.push(j);
    }
    return newstr.join("");
}

function rec(i, char, charcount, ch) {
    len = ch.length

    if (i === len) {
        return charcount;
    }

    char = ch[i];
    i++;

    if (charcount[char]) {
        charcount[char]++;
    } else charcount[char] = 1;
    return rec(i, char, charcount, ch);
}

console.log(removeDuplicates(values));

let expected = ['b', 'candy', 'srbue', '3', 'es', 'es', 'money', ' al', '%^*&', 'xj'];

values.forEach((e, o) => { removeDuplicates(e) !== expected[o] ? (console.error("\n\n------- Failed -------"), console.error(`Test: ${e}`), console.error(`Result: ${removeDuplicates(e)}`), console.error(`Expected: ${expected[o]}`)) : (console.log("\n\n------- Success -------"), console.log(`Test: ${e}`), console.log(`Result: ${removeDuplicates(e)}`)) });