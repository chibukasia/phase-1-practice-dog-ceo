document.addEventListener('DOMContentLoaded', fetchAllDogsBreeds)
function fetchDog(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res=>res.json())
    .then(data=>{
        let cumilativeDogs = '';
        let arrayDogs = data['message']
        arrayDogs.forEach(element => {
            //console.log(element)
            const divImage = document.getElementById('dog-image-container');
            let elementHtml = `<img src=${element}>`
            cumilativeDogs += elementHtml;
            divImage.innerHTML=cumilativeDogs
        });
    })
}

function fetchAllDogsBreeds (){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(res=>res.json())
    .then(dogBreeds=>{
        let htmlList = '';
        let dogList = dogBreeds['message'];
        const dogBreedList = document.getElementById('dog-breeds');
        for (let dogs in dogList){
            
            let htmlElement = `<li>${dogs}</li>`
            htmlList += htmlElement
            dogBreedList.innerHTML= htmlList;
        }
        dogBreedList.addEventListener('click', e=>{
            e.target.style.color='red'
        })
        const letter = document.getElementById('breed-dropdown');
        letter.addEventListener('click', ()=>{
            for (let bree of dogBreedList){
                if (bree.startsWith(letter)){
                    console.log(bree)
                }
            }
        })
        //console.log(letter)
    })
}
