// DAY 6 IN_CLASS

// DAY 6 TAKE_HOME
fetch('https://cat-fact.herokuapp.com')
  .then(result => result.json())
  .then(data => console.log(data))