function hello(name){
    return(`hello ${name}`);
}

function fahToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32)*5/9;
    return celsius;
}

export {hello, fahToCelsius}