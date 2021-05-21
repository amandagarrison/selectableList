// console.log("it works!");

// const theLI = document.querySelector("#selectable li");
// const theLI2 = document.querySelector("#selectable .li")

// theLI.addEventListener("click", () => {
//     theLI.classList.toggle('selected');

// });

// document.body.addEventListener('click', () =>{
//     console.log('you clicked on the body');
// });

// const ul = document.querySelector('#selectable')

// function doAThing(){
//     console.log('do a thing');
// };


const ul = document.querySelector("#selectable");
ul.addEventListener('click', (evt) => {
    console.log('you clicked on the ul');

    if(evt.target.classList.contains('the-list') === false){
    // if(evt.target.tagName === 'LI');

        evt.target.classList.toggle('selected');
    }

    // evt.target.classList.toggle('selected');
});

