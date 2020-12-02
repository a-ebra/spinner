const elements = "|/-\|";

let x = 0 

for (let char of elements) {
  setTimeout (() => {
    process.stdout.write(`\r${char}`);
  }, x);
  x += 100;
}

x += elements.length - 1 * 100

setTimeout (() => {
  process.stdout.write(`\n`)
}, x)
