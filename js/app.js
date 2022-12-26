var Quiz = new quiz();

function start() {
  //Находим кнопку с id "start-btn" и при нажатии на нее вызываем функцию start
  var StartButton= document.getElementById( 'start-btn' );
  var Quiz_html = document.getElementById( 'quiz' );

  //затем скрываем кнопку и открываем тест
  StartButton.style.display = "none";
  Quiz_html.style.display = "block";
  createQuizPage();
}

function createQuizPage() {
  //если пройден последний вопрос
  if (Quiz.isEnded()) {
    //вызываем ф-цию показа результатов
    showScores();
  }
  else {
    //Показываем текст вопроса
    var element = document.getElementById("questions");
    element.innerHTML = Quiz.getQuestionByIndex().text;

    //Показываем варианты ответа
    var choices = Quiz.getQuestionByIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];

      //Вызов функции guess с id кнопки и выбранным вариантом ответа в виде параметров
      guess("btn" + i, choices[i]);
    }

    //Вызов функции показа прогресса прохождения теста
    showProgress();
  }
}

//Функция проверки нажатого ответа
//Принимает кнопку и соответсвующий вариант ответа
function guess(id, guess) {
  var button = document.getElementById(id);

  button.onclick = function() {
    Quiz.guess(guess); //Вызов базовой функции проверки ответа
    createQuizPage(); //Переход на новый вопрос
  }
}

//Функция показа прогресса прохождения теста
function showProgress() {
  var currentQuestionNumber = Quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  //Кладём внутрь блока с id "progress" вывод текущего состояния прогресса прохождения теста
  element.innerHTML = 'Вопрос №' + currentQuestionNumber + ' из ' + Quiz.questions.length;
}

//Функция показа итога прохождения теста
function showScores(){
  var gameOver = "<h3 id='result'>Итоги</h3>";
  //quiz.score - кол-во правильных ответов
  gameOver += '<h3>Ваш результат: ' + Quiz.score + ' из ' + Quiz.questions.length + ' вопросов.</h3>'

  //Прописываем возможные случаи
  if (Quiz.score < 4) {
    gameOver += '<h4>Кажется вы поспешили. <br> Ознакомьтесь со всей информацией на нашем сайте и пройдите тест еще раз!</h4>';
  }
  if (Quiz.score >= 4 && Quiz.score <= 6) {
    gameOver += '<h4>Неплохой результат, но могло быть и лучше.<br> Ознакомьтесь со всей информацией на сайте и пройдите тест еще раз! </h4>';
  }
  if (Quiz.score > 6) {
    gameOver += '<h4>Поздравляем!<br> Вы очень внимательно ознакомились с содержимым сайта!</h4>';
  }

  //вывод
  var element = document.getElementById("quiz");
  element.innerHTML = gameOver;
}
