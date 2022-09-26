// Callback

function fakeAjax(url, cb) {
    var fakeResponses = {
        "file1": "The first text",
        "file2": "The middle text",
        "file3": "The last text",
    }
    var randomDelay = (Math.round(Math.random() * 1E4) % 8000 + 1)
    console.log("Requesting: " + url);
    setTimeout(function () {
        cb(fakeResponses[url]);
    }, randomDelay);
}

var F = {};
function getFile(file) {
    fakeAjax(file, function (text) {
        if (!F[file]) {
            F[file] = text;
        }
        var arr = ['file1', 'file2', 'file3'];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] in F) {
                if (F[arr[i]] !== true) {
                    print(F[arr[i]]);
                    F[arr[i]] = true;
                }
            }
            else {
                return false;
            }
        }
        console.log('Completed');
    });
}

function print(text) {
    console.log(text);
}

getFile('file1');
getFile('file2');
getFile('file3');


// Promises

function fakeAjax(url, cb) {
    var fakeResponses = {
        "file1": "The first text",
        "file2": "The middle text",
        "file3": "The last text",
    }
    var randomDelay = (Math.round(Math.random() * 1E4) % 8000 + 1)
    console.log("Requesting: " + url);
    setTimeout(function () {
        cb(fakeResponses[url]);
    }, randomDelay);
}

function getFile(file) {
    return new Promise(function (resolve) {
        fakeAjax(file, resolve);
    })
};

function print(text) {
    console.log(text);
}

file1 = getFile('file1');
file2 = getFile('file2');
file3 = getFile('file3');

file1
    .then(print)
    .then(function () {
        return file2;
    })

    .then(print)
    .then(function () {
        return file3;
    })

    .then(print)
    .then(function () {

        print('Completed')
    });


