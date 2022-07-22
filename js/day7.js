// DAY 7 IN-CLASS


// function fizzbuzz(){
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//         console.log("Fizz");
//         } else if (i % 5 === 0) {
//         console.log("Buzz");
//         } else {
//         console.log(i);
//         }
//     }
// }


// DAY 7 TAKE-HOME

document.getElementById("catbtn").addEventListener("click", getRandomCatFact);

async function getRandomCatFact() {
    let x = await fetch('https://cat-fact.herokuapp.com'); 
    let y = await x.Fact()
    document.getElementById("myText").innerHTML = y;
}
