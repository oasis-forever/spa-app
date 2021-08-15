const fs = require('fs');

// Sync Reading
const data = fs.readFileSync('./text/text1.txt', 'utf-8');
console.log(data);

// Async Reading
fs.readFile('./text/text1.txt', 'utf-8', (err, data) => {
  console.log(data);
});

// Promise
const readFilePromise = (fileName) => {
  return new Promise(resolve => {
    fs.readFile(fileName, 'utf-8', (err, str) => {
      resolve(str);
    })
  })
}
readFilePromise('./text/text1.txt').then(text => {
  console.log('Text1 has successfully been read.');
  return readFilePromise('./text/text2.txt')
}).then(text => {
  console.log('Text2 has successfully been read.');
  return readFilePromise('./text/text3.txt')
}).then(text => {
  console.log('Text3 has successfully been read.');
  return readFilePromise('./text/text4.txt')
}).then(text => {
  console.log('Text4 has successfully been read.');
})

// Generator
const readWithGenerator = (g, fileName) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    g.next(data);
  })
};
const g = function * () {
  const text1 = yield readWithGenerator(g, './text/text1.txt');
  console.log(text1);
  const text2 = yield readWithGenerator(g, './text/text2.txt');
  console.log(text2);
  const text3 = yield readWithGenerator(g, './text/text3.txt');
  console.log(text3);
  const text4 = yield readWithGenerator(g, './text/text4.txt');
  console.log(text4);
}();
g.next();

// async/await
const readFileEx = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      resolve(data);
    })
  })
};
const readAll = async () => {
  const text1 = await readFileEx('./text/text1.txt');
  console.log(text1);
  const text2 = await readFileEx('./text/text2.txt');
  console.log(text2);
  const text3 = await readFileEx('./text/text3.txt');
  console.log(text3);
  const text4 = await readFileEx('./text/text4.txt');
  console.log(text4);
};
readAll();
