const cards = document.querySelectorAll(".muscleOption");
const cardsContent = document.querySelectorAll(".muscleContent");
const URL = 'https://api.api-ninjas.com/v1/exercises?muscle=';
const btn1 = document.querySelector('#go1');
const btn2 = document.querySelector('#default');
const btn3 = document.querySelector('#abt');
const content = document.querySelectorAll(".lowerExplain");
const exerciseCards = document.querySelectorAll(".excerciseCard");
const excerciseName = document.querySelectorAll(".upperName");
const excerciseTime = document.querySelectorAll(".midTimer");
const excerciseContent = document.querySelectorAll(".lowerExplain");
const icon = document.querySelectorAll(".iconic");
const holder = document.querySelector(".holder");
const holder2 = document.querySelector(".holder2");
const holder3 = document.querySelector(".holder3");
const mainCard = document.querySelector(".excerciseCard1");
const explaination = document.querySelector(".explaination");
const btn = document.querySelector("#back");
// content.innerHTML = "type:haha <br> instruction: haha <br> equipment:woo shang bang";
let globalResult;


const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': 'inMmOonGLIs7ji/p1PK4OA==rmhgjWLopsa5mgtn'
	}
};

const getData = async (data) =>{
    const response = await fetch(`${URL}${data}`, options);
    const result = await response.json();
    for(i = 0; i <= 9; i++){
        excerciseContent[i].innerHTML = `Type: ${result[i].type} <br> <br> Instruction: ${result[i].instructions} <br> <br> Equipment: ${result[i].equipment}`;
        excerciseName[i].innerHTML = `${result[i].name}`;
        if(result[i].difficulty == "beginner"){
            excerciseTime[i].innerHTML = "5:00";
        }else if(result[i].difficulty == "intermediate"){
            excerciseTime[i].innerHTML = "10:00";
        }else{
            excerciseTime[i].innerHTML = "15:00";
        }
    }
    return result;
}

btn1.addEventListener('click', () => {
  window.open("Selection.html", "_self");
})

btn3.addEventListener('click', () => {
  window.scrollTo(0, document.body.scrollHeight);
})

btn2.addEventListener('click', () => {
    window.open("index.html", "_self");
    window.scrollTo(0, 0);
})


cards.forEach((card) => {
    card.addEventListener('click', async () => {
        window.scrollTo(0, 0);
        let muscle = card.id;
        holder.style.visibility = "hidden";
        holder.style.position = "absolute";
        let explain = await getData(muscle);
        console.log(explain);
        holder2.style.visibility = "visible";
        holder2.style.position = "static";
    } )   
}
)

exerciseCards.forEach((exerciseCard) => {
    exerciseCard.addEventListener("mouseover", ()=>{
        let classes = exerciseCard.classList;
        classes.add("inExcer");
        let classesUnder = excerciseName[exerciseCard.id].classList;
        classesUnder.add("classColor");
        let iconClass = icon[exerciseCard.id].classList;
        iconClass.add("inIconic");
        let lableClass = excerciseContent[exerciseCard.id].classList;
        lableClass.add("newLable");
        let timeClass = excerciseTime[exerciseCard.id].classList;
        timeClass.add("newTime");

    })
    exerciseCard.addEventListener("mouseleave",() =>{
        let classes = exerciseCard.classList;
        classes.remove("inExcer");
        let classesUnder = excerciseName[exerciseCard.id].classList;
        classesUnder.remove("classColor");
        let iconClass = icon[exerciseCard.id].classList;
        iconClass.remove("inIconic");
        let lableClass = excerciseContent[exerciseCard.id].classList;
        lableClass.remove("newLable");
        let timeClass = excerciseTime[exerciseCard.id].classList;
        timeClass.remove("newTime");
    })
    exerciseCard.addEventListener("click", ()=>{
        window.scrollTo(0, 0);
        holder2.style.visibility = "hidden";
        holder2.style.position = "absolute";
        holder3.style.visibility = "visible";
        holder3.style.position = "static";
        excerciseName[mainCard.id].innerHTML = excerciseName[exerciseCard.id].innerHTML;
        excerciseTime[mainCard.id].innerHTML = excerciseTime[exerciseCard.id].innerHTML;
        explaination.innerHTML = excerciseContent[exerciseCard.id].innerHTML;
        let classes = excerciseContent[mainCard.id].classList;
        let classes2 = excerciseTime[mainCard.id].classList;
        classes.add("lowerExplain1");
        classes.remove("lowerExplain");
        classes2.add("midTimer1");
        classes2.remove("midTimer");
    })
})

btn.addEventListener("click", ()=>{
    holder2.style.visibility = "visible";
    holder2.style.position = "static";
    holder3.style.visibility = "hidden";
    holder3.style.position = "absolute";
})