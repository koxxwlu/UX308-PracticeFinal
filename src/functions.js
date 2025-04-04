function hello(name){
    return(`hello ${name}`);
}

function fahToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32)*5/9;
    return celsius;
}

function oneNameToString(yourName){
    return(`Hello ${yourName}`);
}

function twoSqftToAcre(sqft){
    var acre = sqft/43560;
    return acre;
}

function threeMowSpd(width, length, mpm){
    var min = (width*length)/mpm;
    return min;
}

function fourAQI(index){
    var desc = "";
    if (index < 0) {
        desc = "INVALID";
    } else if (index <=50) {
        desc = "Good";
    } else if (index <= 100) {
        desc = "Moderate";
    } else if (index <= 150) {
        desc = "Unhealthy for Sensitive Group";
    } else if (index <= 200) {
        desc = "Unhealthy";
    } else if (index <= 300) {
        desc = "Very Unhealthy";
    } else if (index > 300) {
        desc = "Hazardous";
    }

    return desc;
}

function fiveIntToString(number){
    var string = "Nada";
    var divisibleByThree = number%3==0;
    var divisibleBySeven = number%7==0;

    if (divisibleByThree && divisibleBySeven) {
        string = "Yee Ha";
    } else if (divisibleByThree) {
        string = "Yee";
    } else if (divisibleBySeven) {
        string = "Ha";
    }

    return string;
}

function sixSlopeOfLine(rise, run){
    var slope = rise/run;

    return slope;
}

export {hello, fahToCelsius, oneNameToString, twoSqftToAcre, threeMowSpd, fourAQI, fiveIntToString, sixSlopeOfLine}