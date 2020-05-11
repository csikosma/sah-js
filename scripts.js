//4th part


$('div').text('hello');
$('div').css('background','purple')
$('p').text('hello');
$('p').html('<strong>hello</strong>');
$('p').append('<strong> another</strong>');
$('div').remove();
$('button').click(event => {
  $('.first').toggleClass('hidden');
});

//1-3 part
console.log("most jön a java");
let color = ["red","blue","green"];
let post = {
    title: "My Post",
    description: "first",
    likeCount: 12,
    comment: ["cool", "nice"]
}; 
console.log(color);
console.log(post);

let posts = [{
  title: "First",
  likeCount: 12,
}, {
  title: "second",
  likeCount: 222,
}]
let age = 33;

if (age >= 18) {
  console.log("ön felnőt");
} else {
  console.log("ön gyerek");  
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log (color);

let myFunction = x => {
  console.log(x);
}

let greeter = name => {
  console.log('Hello ' + name)
}

greeter("Mate");

color.forEach(col => {
  console.log(col);
});

console.log("ez a vége");