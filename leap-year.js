function leapyear (year){
    if((year % 4 ==0) && (year %100 !=0) || (year % 400 ==0)){
        return true;
    }
    return false;
}

var myYear = 2024;
var isLeapYear = leapyear(myYear);
console.log('Is This Leap Year:',isLeapYear);