//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
//Plotly.newPlot("plotArea", [{x: [5, 10, 15 ], y:[10, 20, 30]}]);

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);
 // using map function  
//var numbers = [0,2,4,6,8];
//var plusFive = numbers.map(function(num){
  //  return num + 5;
//});
//console.log(plusFive)
// using filter function
//var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

//var sName = words.filter(function(s words){
  //  return s == s 
//}) 

//console.log(sName)

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var slice1 = integers.slice ('seal','dog')