// DAY 7 IN-CLASS


function fizzbuzz(){
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        } else if (i % 3 === 0) {
        console.log("Fizz");
        } else if (i % 5 === 0) {
        console.log("Buzz");
        } else {
        console.log(i);
        }
    }
}


// DAY 7 TAKE-HOME

const catFactsButton = document.createElement('button')
catFactsButton.innerHTML = "🐈‍⬛ Get a random cat fact!!! 🐈‍⬛"
catFactsButton.addEventListener('click', getRandomCatFact)

const BODY = document.querySelector('body')


BODY.appendChild(catFactsButton)

function getRandomCatFact() {
    console.dir(document)
    fetch('https://cat-fact.herokuapp.com/facts/random')
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        console.log(data)
        const catFact = document.createElement('p')
        catFact.innerHTML = `Here is your cat fact :)... ${data.text}`
        BODY.append(catFact)
    })
}