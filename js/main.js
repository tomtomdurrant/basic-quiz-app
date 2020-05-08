const form = document.querySelector('form');

form.addEventListener('submit', getQuiz);

async function getQuiz(e) {
  e.preventDefault();
  // console.log("Quiz called!")
  // console.log(numberOfQuestions);

  // const difficulty = document.getElementById('difficulty').value
  // console.log(difficulty);

  // const category = document.getElementById('category').value
  // console.log(category);

  const numberOfQuestions = document.getElementById('numberOfQuestions').value;
  const apiAddress = `https://opentdb.com/api.php?amount=${numberOfQuestions}`;

  const response = await fetch(apiAddress);

  const myJson = await response.text();
  console.log(myJson);
}
