/*jshint esversion: 6 */
/*jshint maxerr: 10000 */
/* eslint-disable no-console */
/* jshint esversion: 8 */


//create a server object:
// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req, res) {
//     fs.readFile('./html/index.html', function(err, data) {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);



function sum(x) {
    return new Promise((resolve, reject) => {
        if (Number(x) == NaN || Number(x) == undefined || typeof(x) != 'number') {
            reject('Tá de brincadeira?');
        }

        setTimeout(() => {
            resolve(x + 5000)
        }, 3000);
    })
}

async function main() {
    try {
        const resultado = await sum(5);
        console.log(`Resultado com async await: ${resultado}`);
    } catch (error) {
        console.log(`Temos prolemas: ${error}`);
        console.log(process.env.username);
    }

}

main();



var p1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        int = 10;
        resolve(int);
    }, 5000);
}).then((solved) => {
    console.log('Resolved p1');
    return solved;
}).catch((error) => {
    console.log('Error', error);
});

var p2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        int = 10;
        resolve(int);
    }, 10000);
}).then((solved) => {
    console.log('Resolved p2');
    return solved;
}).catch((error) => {
    console.log('Error', error);
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        int = 10;
        resolve(int);
    }, 10000);
}).then((solved) => {
    console.log('Resolved p3');
    return solved;
}).catch((error) => {
    console.log('Error', error);
});

Promise.all([p1, p2, p3]).then((values) => {
    console.log((values).reduce((memo, i) => {
        return memo + i;
    }));
});