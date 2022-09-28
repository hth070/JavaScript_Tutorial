const btoa = str => new Buffer(str, 'binary').toString('base64');
console.log(btoa('foobar'));