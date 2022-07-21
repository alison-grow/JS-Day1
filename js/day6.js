// DAY 6 IN_CLASS










// DAY 6 TAKE_HOME
// function getRandomCatFact() {
//     fetch('https://cat-fact.herokuapp.com')
//         .then(res => {
//             return res.json()
//             console.log(res)
//         })
//         .then(data => alert('Here is your cat fact :P ...' ${data.Text}))
// }

// getRandomCatFact()

async function getRandomCatFact() {
    const response = await fetch('https://cat-fact.herokuapp.com')
    console.log(response)
}
