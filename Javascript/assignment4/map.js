const arr = [4, 5, 10, 3, 8, 6];
        const result = [];
        i=[];
        const square = function(n){  
            return n+n;
        }
        for(i=0; i< arr.length; i++){
            result.push(square(arr[i]));
        }
        console.log(result);