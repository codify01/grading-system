let exellent = new Audio('music/exellent.mp3')
let good = new Audio('music/good.mp3')
let credit = new Audio('music/exellent.mp3')
let average = new Audio('music/exellent.mp3')
let pass = new Audio('music/exellent.mp3')
let fail = new Audio('music/fail.mp3')


function check(){
    let grade = Number(userScore.value)

    if (grade==""){
        display.innerHTML = "Input your grade or you don't have one?"
        display.style.display = "block"

    }
    else if(grade>=0 && grade<40) {
        display.innerHTML = "Your Score is "+ grade +"%. Which means you have Failed in this exam."
        display.style.color = "red"
        display.style.display = "block"
        fail.play()
    }
    else if(grade>=40 && grade<45){ 
        display.innerHTML = "Your Score is "+ grade +"%. You have sucessfully passed the exam."
        display.style.color = "crimson"
        display.style.display = "block"
        pass.play()

    }
    else if(grade>=45 && grade<50){
        display.innerHTML = "Your Score is "+ grade +"%. You have an average score in the exam."
        display.style.color = "orange"
        display.style.display = "block"
        average.play()
    }
    else if(grade>=50 && grade<60){
        display.innerHTML = "Your Score is "+ grade +"%. You have a credit score in the exam"
        display.style.color = "chartreuse"
        display.style.display = "block"
        credit.play()
    }
    else if(grade>=60 && grade<70){
        display.innerHTML = "Your Score is "+ grade +"%. You have a very good score. Keep it up."
        display.style.color = "green"
        display.style.display = "block"
        good.play()
    }

    else if(grade>=70 && grade<=100){
        display.innerHTML = "Your Score is "+ grade +"%. You have performed exellently well in this exam. You must be pround of your self."
        display.style.color = "green"
        display.style.display = "block"
        exellent.play()
    }
    else if(grade>=100){
        display.innerHTML = "You can't have up to that score, my dear."
        display.style.display = "block"
    }
    else if(grade<=0 ) {
        display.innerHTML = "What was you offence? Did you cheat??"
        display.style.display = "block"
    }
    }