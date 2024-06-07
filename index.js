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

console.log('before');
getUserData(1, getRepositoriesHelper);
console.log('after');

function displayCommits(commits){
    console.log(commits);
}

function getCommitsHelper(repos){
    getCommits(repos[0], displayCommits);
}

function getUserData(id, cb){
    setTimeout(()=>{
        console.log('reading user data');
        cb({id: id, name: "X"});
    }, 2000);
}

function getRepositoriesHelper(user){
    console.log('user is '+user);
    getRepositories(user.name, getCommitsHelper);
}

function getRepositories(username, cb){
    setTimeout(()=>{
        console.log(username, cb);
        console.log('reading repo of username '+username);
        cb(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(repo, cb){
    setTimeout(()=>{
        console.log(`reading commits of ${repo}`);
        cb(['commit1', 'commit2', 'commit3']);
    }, 2000);
}
