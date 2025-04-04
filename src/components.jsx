import {hello, fahToCelsius, oneNameToString, twoSqftToAcre, threeMowSpd, fourAQI, fiveIntToString, sixSlopeOfLine} from './functions.js';

function Question1(){
    return <section>
<h1>Examples:</h1>

Example 1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
Example 2. Write a function converting fahrenheit to celsius.
<h2>results</h2>
<p>fahToCelsius(32) == "{fahToCelsius(32)}"</p>
<p>fahToCelsius(212) == "{fahToCelsius(212)}"</p>
<p>fahToCelsius(70) == "{fahToCelsius(70).toFixed(2)}"</p>
    </section>
}

function QuestionOne(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names.
    <h2>Results</h2>
    <p>oneNameToString("Rich") == "{oneNameToString('Rich')}"</p>
    <p>oneNameToString("Bill") == "{oneNameToString('Bill')}"</p>
    <p>oneNameToString("Chris") == "{oneNameToString('Chris')}"</p>
    </section>
}

function QuestionTwo(){
    return <section>
2. There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions.
    <h2>Results</h2>
    <p>twoSqftToAcre(43560) == "{twoSqftToAcre(43560)}"</p>
    <p>twoSqftToAcre(130680) == "{twoSqftToAcre(130680)}"</p>
    <p>twoSqftToAcre(21780) == "{twoSqftToAcre(21780)}"</p>
    </section>
}

function QuestionThree(){
    return <section>
3. Given the&nbsp; width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes
    <h2>Results</h2>
    <p>threeMowSpd(10, 10, 10) == "{threeMowSpd(10, 10, 10)}"</p>
    <p>threeMowSpd(1, 1, 2) == "{threeMowSpd(1, 1, 2)}"</p>
    <p>threeMowSpd(30, 12, 7) == "{threeMowSpd(30, 12, 7).toFixed(2)}"</p>
    </section>
}

function QuestionFour(){
    return <section>
4. Compute the air quality given an air quality index.
    <h2>Results</h2>
    <p>fourAQI(1) == "{fourAQI(1)}"</p>
    <p>fourAQI(67) == "{fourAQI(67)}"</p>
    <p>fourAQI(113) == "{fourAQI(113)}"</p>
    <p>fourAQI(158) == "{fourAQI(158)}"</p>
    <p>fourAQI(263) == "{fourAQI(263)}"</p>
    <p>fourAQI(368) == "{fourAQI(368)}"</p>
    <p>fourAQI(-6) == "{fourAQI(-6)}"</p>
    </section>
}

function QuestionFive(){
    return <section>
5. yee_ha takes an integer parameter and returns one of the following strings.
    <h2>Results</h2>
    <p>fiveIntToString(6) == "{fiveIntToString(6)}"</p>
    <p>fiveIntToString(14) == "{fiveIntToString(14)}"</p>
    <p>fiveIntToString(21) == "{fiveIntToString(21)}"</p>
    <p>fiveIntToString(13) == "{fiveIntToString(13)}"</p>
    </section>
}

function QuestionSix(){
    return <section>
6. Calculate the slope of a line.
    <h2>Results</h2>
    <p>sixSlopeOfLine(1, 1) == "{sixSlopeOfLine(1, 1)}"</p>
    <p>sixSlopeOfLine(17, 2) == "{sixSlopeOfLine(17, 2)}"</p>
    <p>sixSlopeOfLine(8, 9) == "{sixSlopeOfLine(8, 9).toFixed(2)}"</p>
    </section>
}

export {Question1, Question2, QuestionOne, QuestionTwo, QuestionThree, QuestionFour, QuestionFive, QuestionSix}