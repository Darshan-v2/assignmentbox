const task1 =
    new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(console.log('Result 1'));
        }, 1000)
    });

const task2 =
    new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(console.log('Result 2'));
        }, 1000)
    });

const task3 =
    new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(console.log('Result 3'));
        }, 1000)
    });

const tasks = [task1, task2, task3]


    // function seq(tasks) {
    //    if (tasks && tasks.length > 0) {
    //      var task = tasks.shift();
    //     // console.log(task);

    //      return task().then(function() {
    //        return seq(tasks);
    //      });
    //    }
    //    return Promise.resolve();
    //  };

    //  console.log(seq(tasks));


    const square = async (x) => Math.pow(x, 2);
    const output = async () => {
        const nums = [1, 2, 3, 4,];
        const promiseArray = nums.map(x => square(x));
    
        const resolvedPromises = await Promise.all(promiseArray);
        console.log(resolvedPromises);
    };
    
    output();

