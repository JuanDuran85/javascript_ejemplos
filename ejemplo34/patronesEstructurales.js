/* Los patrones estructurales entregan interfaz sencilla o una forma de comunicar dos estructuras distintas de una manera más simple */

const https = require('https');

/* 

    Sin Patron  Facade

const https = require('https');
const options = {
    hostname: 'reqres.in',
    path: '/api/users?per_page=12',
    method: 'GET',
};

const req = https.request(options, res => {
    res.setEncoding('utf8');
    let body = '';
    res.on('data', data => {
        body += data;
    });
    res.on('end', data =>{
        const parsed = JSON.parse(body);
        console.log(parsed);
    });
});

req.on('error', error => {
    console.error(error);
});

req.end() 

*/

/* Aplicando Patron  Facade*/

const get = url => new Promise((resolve, reject) => {

    const urlCompose = url.split('/');
    const host = urlCompose.shift();
    
    const options = {
        hostname: host, //reqres.in
        path: `/${urlCompose.join('/')}`, ///api/users?per_page=12
        method: 'GET',
    };
    
    const req = https.request(options, res => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', data => {
            body += data;
        });
        res.on('end', data =>{
            const parsed = JSON.parse(body);
            resolve(parsed);
        });
    });
    
    req.on('error', error => {
        console.error(error);
        reject(error);
    });
    
    req.end() 
});

const main = async () => {
    const result = await get('reqres.in/api/users?per_page=12');
    console.info(result);
    console.table(result.data);
};

main();