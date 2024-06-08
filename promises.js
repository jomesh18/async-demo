// const p = new Promise((resolve, reject) => {
//     // resolve(1);
//     reject(new Error('some error'));
// });

// p
//     .then(res => console.log(res))
//     .catch(err => console.log(err.message));

// settled promises
// const p = Promise.resolve({id: 1});
// p.then(res => console.log(res));

// const p1 = Promise.reject(new Error('some reason'));
// p1.catch(err => console.log(err));

// parallel promises
const p1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log('async 1');
        resolve(1);
    }, 2000);
})

const p2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log('async 2');
        resolve(2);
    }, 2000);
})

Promise.all([p1, p2]).then(res => console.log('all res is ', res));

Promise.race([p1, p2]).then(res => console.log('rase res is ', res));
