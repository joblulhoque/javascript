function adminControls(user){
       let response = user ?
       user.admin ?
       'showing admin controls....'
       :'you need to be admin'
       :'you need to be user';
       console.log(response);
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
adminControls(userOne);
adminControls(userTwo);
adminControls(userThree);