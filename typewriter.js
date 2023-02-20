// const sentence = 'hello there from lighthouse labs';
// for (let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(sentence[i]);
//   }, 50 * i);
// }


const sentence = 'hello there from lighthouse labs';
let index = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, index);
  index += 50;
}

setTimeout(() => {
  console.log();
}, index);


// const sentence = 'hello there from lighthouse labs';
// let index = 0;
// function print() {
//   process.stdout.write(sentence[index]);
//   index++;
//   if (index < sentence.length) {
//     setTimeout(print, 500);
//   }
// }
// print();