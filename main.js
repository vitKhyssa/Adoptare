'use strict'
const animalForm = document.querySelector('#aimal-form');

animalForm.addEventListener('submit',(el)=>{
    el.preventDefault()
    const animalaPrima ={
        id: el.target.id.value,
        name: el.target.name.value ,
        imgUrl:el.target.Url.value,
        desription: el.target.Description.value,
        donation: 0
    }
    console.log(animalaPrima)
    createAnimal(animalaPrima).then(newAnimal =>{
        console.log('succes',newAnimal)
    })
})
