// const swup = new Swup({
//     containers: ["#swup"]
//   });
const p = document.querySelectorAll(".fact");
const btn = document.querySelector('#go');
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

btn.addEventListener('click', () => {
  window.open("Selection.html");
})

console.log(p)

for(i = 0; i < 3; i++){
  const random = Math.floor(Math.random() * facts.length);
  p[i].innerHTML = facts[random];
  console.log(p[i])
  console.log(facts[random]);
  console.log(i);
}

