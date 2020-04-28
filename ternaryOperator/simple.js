
function ageVerification(age){
        if(age>25){
                console.log("you can rent a car.")
        } else {
                console.log('is not enough old.')
        }

}
ageVerification(55);

function ageVerification(age){
     let answer = age>25? 'you can rent a car' : 'is not enough old';
     console.log(answer);

}
ageVerification(55);
