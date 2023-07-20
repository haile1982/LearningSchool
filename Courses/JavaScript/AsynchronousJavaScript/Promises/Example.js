const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function (resolve, reject) {
    resolve("Jack");
  }, 300);
});

myPromise.then(function (e) {
  console.log(e); // expected output 'Jack'
});
