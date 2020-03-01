var names = ['Richard', 'Denise', 'Jekka', 'Carl'];

// names.forEach(function (name) {
//     console.log('foreach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name)
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Richard'));

// var person = {
//     name: 'Richard',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' say hi to ' + name);
//         });
//     }

// }

// person.greet();


//Challenge Area
// function add (a, b) {
//     return a+b;
// }


//addStatement
var addStatement = (a, b) => {
    console.log(a + b);
}

addStatement(4, 2);
//addExpression
var addExpression = (a, b) => (console.log(a+b));

addExpression(5,6);
