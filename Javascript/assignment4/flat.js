const array = [0, 1, 2, [[3, 4]], 5, [6, 7], [[[8, 9]]]];

function* flatten (arr , depth) {
   if(depth < 0){
    return arr;
   }
        for (const curr of arr) {
            if (Array.isArray(curr) && depth > 0) {
                yield* flatten(curr, depth-1);
            }
            else {
                yield curr;
            }
        }
    }
    const flat = [...flatten(array,4)]
    console.log(flat);



