const task1 =
    new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Hello');
        }, 1000)
    });

const task2 =
    new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Hello World');
        }, 1000)
    });

const task3 =
    new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Hello World Hello World');
        }, 1000)
    });

    let promise = async () => {
        for (let promise of [task1, task2,task3]) {
            try {
                const print = await promise;
                console.log(print);
            } catch (error) {
                console.log(error.message);
            }
        }
    }; 
promise();


