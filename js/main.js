//Конструктор самой викторины
function quiz() {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

//Конструктор вопроса - элемента массива
function question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
  
//Функция сравнения выбранного ответа с правильным
question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}


//Функция возвращает текущий элемент массива
quiz.prototype.getQuestionByIndex = function() {
    return this.questions[this.questionIndex];
}

//Функция проверяет, прошли ли последний вопрос
quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

//Функция проверяет, совпадает ли нажатый ответ с правильным
//Если да - увеличивает счетчик правильных ответов
//И инкрементирует индекс текущего вопроса в массиве
quiz.prototype.guess = function(answer) {
    if(this.getQuestionByIndex().correctAnswer(answer)) { //вызов функции correctAnswer
        this.score++;
    }
    this.questionIndex++;
}
