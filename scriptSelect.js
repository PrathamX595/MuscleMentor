const cards = document.querySelectorAll(".muscleOption");
const cardsContent = document.querySelectorAll(".muscleContent");
const URL = 'https://api.api-ninjas.com/v1/exercises?muscle=';
const btn1 = document.querySelector('#go1');
const btn2 = document.querySelector('#default');
const btn3 = document.querySelector('#abt');

btn1.addEventListener('click', () => {
  window.open("Selection.html");
})

btn3.addEventListener('click', () => {
  window.scrollTo(0, document.body.scrollHeight);
})

btn2.addEventListener('click', () => {
  location.reload();
  window.scrollTo(0, 0);
})

const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': 'inMmOonGLIs7ji/p1PK4OA==rmhgjWLopsa5mgtn'
	}
};
function generatePage(excerArray){

}
const getData = async (data) =>{
    try {
        const response = await fetch(`${URL}${data}`, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

console.log(cards);
cards.forEach((card) => {
    card.addEventListener('click', () => {
        const holder = document.querySelector(".holder");
        holder.remove();
        const data = card.id;
        getData(data);
    } )   
}
)

