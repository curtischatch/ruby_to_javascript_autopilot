var apples = 14
console.log(apples);
console.log("I have" + apples + "apples.")

var materials = ['wood', 'metal', 'stone']
var words = {
  'elephant': "The world's largest land mammal.",
  'school': "A place of learning.",
  'ice cream': "A delicious milk-based dessert"
}
console.log(materials);
console.log(words);

var num = 16;
if(num > 10) {
  console.log(num + " is greater than 10");
} else if(num === 10) {
  console.log(num + " is exactly 10.");
} else {
  console.log(num + " must be less than 10.");
}

for(var i = 0; i < 10; i++) {
  console.log("Doing the same thing over and over")
}

var base = 5;
for(var i = 1; i < 20; i++) {
  var num = i + base;
  console.log(num);
}
