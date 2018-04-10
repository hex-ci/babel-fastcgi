var salary = [10000, 20000, 30000];
var with1000Increment = salary.map(x => x + 1000);
console.log(with1000Increment);


var marks = [89, 10, 70];
marks = marks.sort((a, b) =>  b - a);
console.log(marks);


var name = "Arunoda";
var user = {
    name,
    getAddress() {
        return "Colombo. Sri Lanka";
    }
};


var name = "Arunoda";
var address = "Colombo, Sri Lanka";

var greeting = `My Name is ${name} and I live in ${address}`;
console.log(greeting);


var blogPost = `
    ## My First Blog Post 

    I like to write in Markdown!   
`
console.log(blogPost);


var user = {name: "arunoda", address: "Colombo. Sri Lanka"};
var {name} = user;
console.log(name);


function GreetUser({name, address="N/A"}) {
  console.log(`${name}'s address is: ${address}`);
}
GreetUser({name: "Arunoda"});


function MySubscribe(name, ...params) {
    var paramsString = params.join(", ");
    console.log(`Subscribing to ${name} with "${paramsString}"`);
}

var params = ["meteor-category", "postId"];
MySubscribe("getPost", ...params);