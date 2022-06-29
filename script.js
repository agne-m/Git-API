let chuckJokeElement = document.querySelector('#chuck-joke')
let randomButton = document.querySelector('#button')
let jokeByCategoryElement = document.querySelector('#joke-by-category-txt')
let jokeFromCategoryBtn = document.querySelector('#joke-by-category')
// console.log(jokeFromCategoryBtn)


randomButton.addEventListener('click', () => 
fetch('https://api.chucknorris.io/jokes/random')
.then(res => {
    chuckJokeElement.textContent = 'Loading...'
    return res.json()
})
.then(joke => {
    chuckJokeElement.textContent = joke.value 
})
)

let selectForm = document.querySelector('#chuck-select')

console.log(selectForm)

fetch('https://api.chucknorris.io/jokes/categories')
    .then(res => {
        return res.json()
    })
    .then(categories => {
        console.log(categories)
        categories.map(category => {
            let option = document.createElement('option')
            option.textContent = `${category}`
            selectForm.append(option)
        })
    })

    selectForm.addEventListener('click', (event) => {
        let categoryInput = event.target.value
        console.log(categoryInput)
        fetch(`https://api.chucknorris.io/jokes/random?category=${categoryInput}`).then(res => {
            return res.json()
        })
        .then(data => {
            jokeFromCategoryBtn.addEventListener('click', () => {
                jokeByCategoryElement.textContent = data.value
                console.log(data.value)
            })
        })
    })


