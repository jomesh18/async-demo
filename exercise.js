// getCustomer(1, (customer) => {
//     console.log('Customer', customer);
//     if (customer.isGold) {
//         getTopMovies((movies) => {
//             console.log('Top movies', movies);
//             sendEmail(customer.email, movies, () =>{
//                 console.log('Email sent...')
//             });
//         });
//     }
// });

// function getCustomer(id, cb) {
//     setTimeout(() =>{
//         cb({
//             id: 1,
//             name: 'X',
//             isGold: true,
//             email: 'email'
//         })
//     }, 2000);
// }

// function getTopMovies(cb) {
//     setTimeout(() => {
//         cb(['movie1', 'movie2'])
//     }, 2000);
// }

// function sendEmail(email, movies, cb){
//     setTimeout(()=>{
//         cb();
//     }, 2000);
// }




// // with named functions
// getCustomer(1, getCustomerHelper);

// function sendMoviesToCustomer(movies, customer){
//     console.log('Top movies', movies);
//     sendEmail(customer.email, movies, displaySendEmail);
// }

// function getCustomerHelper(customer) {
//     console.log('Customer', customer);
//     if (customer.isGold) {
//         getTopMovies(customer, sendMoviesToCustomer);
//     }
// }
// function getCustomer(id, cb) {
//     setTimeout(() =>{
//         cb({
//             id: 1,
//             name: 'X',
//             isGold: true,
//             email: 'email'
//         })
//     }, 2000);
// }

// function getTopMovies(customer=None, cb) {
//     setTimeout(() => {
//         cb(['movie1', 'movie2'], customer)
//     }, 2000);
// }

// function sendEmail(email, movies, cb){
//     setTimeout(()=>{
//         cb();
//     }, 2000);
// }

// function displaySendEmail(){
//     console.log('Email sent...');
// }





// with Promises

// getCustomer(1).then(customer => {
//     console.log('Customer', customer);
//     if (customer.isGold) {
//         getTopMovies().then(movies => {
//             console.log('Top movies', movies);
//             sendEmail(customer.email, movies).then(console.log('Email sent...'));
//         })
//     }})


// function getCustomer(id) {
//     return new Promise((resolve) =>{
//         setTimeout(() =>{
//             resolve({
//                 id: 1,
//                 name: 'X',
//                 isGold: true,
//                 email: 'email'
//             })
//         }, 2000);
//     })   
// }

// function getTopMovies() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(['movie1', 'movie2'])
//         }, 2000);
//     })    
// }

// function sendEmail(email, movies){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve();
//         }, 2000);
//     });
// }






// // using async await

async function sendGoldCustomerEmail(){
    const customer = await getCustomer(1)
    console.log('Customer', customer);
    if (customer.isGold) {
        const movies = await getTopMovies()
        console.log('Top movies', movies);
        await sendEmail(customer.email, movies);
        console.log('Email sent...');
    }
}

sendGoldCustomerEmail();

function getCustomer(id) {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve({
                id: 1,
                name: 'X',
                isGold: true,
                email: 'email'
            })
        }, 2000);
    })   
}

function getTopMovies() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(['movie1', 'movie2'])
        }, 2000);
    })    
}

function sendEmail(email, movies){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve();
        }, 2000);
    });
}
