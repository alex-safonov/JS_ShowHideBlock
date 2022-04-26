<h4 class="task_comment_h4 switchVolQuestions"><?=$arParams['HEADER'] ?: 'Вопросы от волонтёров'?></h4>

<div class="vol_questions">
....
</div>

<style>
.vol_questions {
	display: none;
}

.vol_questions_show {
	display: block;
}

.switchVolQuestions:hover {
	cursor: pointer;
}

.switchVolQuestions:after
 {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 2px solid #303540;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
    margin-bottom: 5px;
    margin-left: 15px;
}

.switchVolQuestions.open:after {
    transform: rotate(-135deg);
    margin-bottom: -5px;
}
</style>

<script>
let vol_questions = document.querySelector ('.vol_questions');
let switchVolQuestions = document.querySelector('.switchVolQuestions');

switchVolQuestions.onclick = function() { 
     vol_questions.classList.toggle("vol_questions_show");
     switchVolQuestions.classList.toggle("open");
};
</script>
