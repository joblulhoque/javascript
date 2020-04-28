function adminControls(user){
        if(user){
        if(user.admin){
                console.log('you are welcome.');
        } else {
                console.log('sorry you are not admin');
        }

        } else {
                console.log('you need to be user');
        }
}
let userOne = {
        name:'joblul',
        admin:true

}
let userTwo = {
        name:'joblul',
        admin:false

}
let userThree = null;
adminControls(userThree);