// without named functions
// console.log('before');
// getUserData(1, (user)=>{
//     console.log(`user is ${user}`);
//     getRepositories(user.name, (repos)=>{
//         console.log(`repos of username ${user.name} is ${repos}`);
//         getCommits(repos[0], (commits)=>{
//             console.log(`Commits of ${repos[0]} are ${commits}`);
//         });
//     });
// });
// console.log('after');
// function getUserData(id, cb){
//     setTimeout(()=>{
//         console.log('reading user data');
//         cb({id: id, name: "X"});
//     }, 2000);
// }

// function getRepositories(username, cb){
//     setTimeout(()=>{
//         console.log('reading repo of username '+username);
//         cb(['repo1', 'repo2', 'repo3']);
//     }, 2000);   
// }

// function getCommits(repo, cb){
//     setTimeout(()=>{
//         console.log(`reading commits of ${repo}`);
//         cb(['commit1', 'commit2', 'commit3']);
//     }, 2000);
// }


// with named function

// console.log('before');
// getUserData(1, getRepositoriesHelper);
// console.log('after');

// function displayCommits(commits){
//     console.log(commits);
// }

// function getCommitsHelper(repos){
//     getCommits(repos[0], displayCommits);
// }

// function getUserData(id, cb){
//     setTimeout(()=>{
//         console.log('reading user data');
//         cb({id: id, name: "X"});
//     }, 2000);
// }

// function getRepositoriesHelper(user){
//     console.log('user is '+user);
//     getRepositories(user.name, getCommitsHelper);
// }

// function getRepositories(username, cb){
//     setTimeout(()=>{
//         console.log(username, cb);
//         console.log('reading repo of username '+username);
//         cb(['repo1', 'repo2', 'repo3']);
//     }, 2000);
// }

// function getCommits(repo, cb){
//     setTimeout(()=>{
//         console.log(`reading commits of ${repo}`);
//         cb(['commit1', 'commit2', 'commit3']);
//     }, 2000);
// }


// with promises

// console.log('before');
// getUserData(1)
//     .then(user => getRepositories(user.name))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log(commits))
//     .catch(err => console.log(err.message));

// console.log('after');

// function getUserData(id){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('reading user data');
//             resolve({id: id, name: "X"});
//         }, 200);
//     });
// }

// function getRepositories(username){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('reading repo of username '+username);
//             resolve(['repo1', 'repo2', 'repo3']);
//         }, 200);  
//     })
     
// }

// function getCommits(repo){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`reading commits of ${repo}`);
//             resolve(['commit1', 'commit2', 'commit3']);
//         }, 200);
//     })
// }


// with async, await

console.log('before');
async function  displayCommits(){
    try{
        const user = await getUserData(1);
        console.log(`user is ${user}`);
        const repos = await getRepositories(user.name);
        console.log(`repos of username ${user.name} is ${repos}`);
        const commits = await getCommits(repos[0]);
        console.log(`Commits of ${repos[0]} are ${commits}`);
    }
    catch(err){
        console.log('error is '+err.message);
    }
    
}
displayCommits();
console.log('after');

function getUserData(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('reading user data');
            resolve({id: id, name: "X"});
        }, 200);
    });
}

function getRepositories(username){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('reading repo of username '+username);
            resolve(['repo1', 'repo2', 'repo3']);
        }, 200);  
    })
     
}

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`reading commits of ${repo}`);
            resolve(['commit1', 'commit2', 'commit3']);
        }, 200);
    })
}