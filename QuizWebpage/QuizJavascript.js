var QuestionMode=[]
var count=0;
var score=0;
var easyquestions = [
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What does CPU stand for?',
      correct_answer: 'Central Processing Unit',
      incorrect_answers: ['Central Process Unit', 'Computer Personal Unit', 'Central Processor Unit'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: 'Final',
      incorrect_answers: ['Static', 'Private', 'Public'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'The logo for Snapchat is a Bell.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'Pointers were not used in the original C programming language; they were added later on in C++.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What is the most preferred image format used for logos in the Wikimedia database?',
      correct_answer: '.svg',
      incorrect_answers: ['.png', '.jpeg', '.gif'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'In web design, what does CSS stand for?',
      correct_answer: 'Cascading Style Sheet',
      incorrect_answers: ['Counter Strike: Source', 'Corrective Style Sheet', 'Computer Style Sheet'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What is the code name for the mobile operating system Android 7.0?',
      correct_answer: 'Nougat',
      incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'On Twitter, what is the character limit for a Tweet?',
      correct_answer: '140',
      incorrect_answers: ['120', '160', '100'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'Linux was first created as an alternative to Windows XP.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which programming language shares its name with an island in Indonesia?',
      correct_answer: 'Java',
      incorrect_answers: ['Python', 'C', 'Jakarta'],
    },
  ]
  question=document.querySelector('h1')
  button1=document.querySelector('#btn1')
  button2=document.querySelector('#btn2')
  button3=document.querySelector('#btn3')
  button4=document.querySelector('#btn4')
  
  
  window.onload = function () {
   
    displayQuestion(count)
}
function displayQuestion(count){
    let QuestionMode=getQuestions(count)
    if(count<QuestionMode.length){

        question.innerText= QuestionMode[count].question;
        randomizeAnswers(QuestionMode,count);
    }else if(count===QuestionMode.length){
    button1.style.display='none'
    button2.style.display='none'
    button3.style.display='none'
    button4.style.display='none'
    question.innerText='your score is ' + score
}
       
        
        

    

}



function checkAnswer(value,id){
    let questions=getQuestions()
   if(count<questions.length){
    
    // console.log(count)
    if(value===questions[count].correct_answer){
    score++
   
    
    // if(scoress){
    
    // }
    // let selectedbtn=document.getElementById(id).style.backgroundColor='red'
    
    
    }
    count++
    console.log(count)
    displayQuestion(count)  
}
    
    
    
}
function getQuestions(){
    return easyquestions
}








function randomizeAnswers(questions,count){
    
    switch(questions[count].type){
        case 'boolean':
            button2.style.display='none'
            button3.style.display='none'

            let rand=Math.floor(Math.random()*2)+1
            switch(rand){
                case 1:
                    button1.value=questions[count].correct_answer
                    button4.value=questions[count].incorrect_answers[0]
                break;
                case 2:
                    button1.value=questions[count].incorrect_answers[0]
                    button4.value=questions[count].correct_answer
                break;
        
            }
            break;
        case 'multiple':
            button2.style.display='inline'
            button3.style.display='inline'
            let ran=Math.floor(Math.random()*6)+1
            switch(ran){
                case 1:
                    button1.value=questions[count].correct_answer
                    button2.value=questions[count].incorrect_answers[0]
                    button3.value=questions[count].incorrect_answers[1]
                    button4.value=questions[count].incorrect_answers[2]           
                    break;
                    
                case 2:
                    button1.value=questions[count].incorrect_answers[1]
                    button2.value=questions[count].correct_answer
                    button4.value=questions[count].incorrect_answers[2] 
                    button3.value=questions[count].incorrect_answers[0]
                    break;
                case 3:
                    button1.value=questions[count].incorrect_answers[0]
                    button2.value=questions[count].incorrect_answers[1]
                    button4.value=questions[count].incorrect_answers[2]
                    button3.value=questions[count].correct_answer
                 
                    break;
                    
                case 4:
                    button1.value=questions[count].incorrect_answers[0]
                    button2.value=questions[count].incorrect_answers[1]
                    button3.value=questions[count].incorrect_answers[2]
                    button4.value=questions[count].correct_answer
                   
                    break;
                    
                case 5:
                    button4.value=questions[count].incorrect_answers[0]
                    button2.value=questions[count].incorrect_answers[2]
                    button1.value=questions[count].incorrect_answers[1]            
                    button3.value=questions[count].correct_answer
                    break;
                case 6:
                    button1.value=questions[count].incorrect_answers[0]
                    button3.value=questions[count].incorrect_answers[2]  
                    button2.value=questions[count].incorrect_answers[1]
                    button4.value=questions[count].correct_answer
                    break;
                    
                
                
                    
            }
            break;

    }
    

}