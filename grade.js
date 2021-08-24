// function getGpa (num){
//     if(num >= 80){
//         console.log('got A+');
//     }
//     else if( num < 80){                                                                     
//         console.log('got A');
//     }
//     else if (num < 70){
//         console.log('got A-')                   
//     }
//     else if (num < 60){
//         console.log('got B')
//     }
//     else if (num < 50){
//         console.log('got B+')
//     }
//     else{
//         console.log('got C')
//     }
//     return;
// }
// var myNumber = 87;
// var myGrade = getGpa(myNumber);



function result(value) {
    let gpa = "";
    if (value <= 100 && value >= 80) {
        return gpa = " Got A+";
    } else if (value <= 79 && value >= 70) {
        return gpa = " Got A";
    } else if (value <= 69 && value >= 60) {
        return gpa = " Got A-";
    } else if (value <= 59 && value >= 50) {
        return gpa = " Got B";
    } else if (value <= 49 && value >= 40) {
        return gpa = " Got C";
    } else if (value <= 39 && value >= 33) {
        return gpa = " Got D";
    } else if (value <= 32 && value >= 0) {
        return gpa = " You are failed";
    } else {
        return gpa = " Invalid Number";
    }
}
var mainResult = result(78);
console.log(mainResult);