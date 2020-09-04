// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const divContainer = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')

    divContainer.appendChild(date)
    divContainer.appendChild(title)
    divContainer.appendChild(temp)

    divContainer.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    date.textContent = 'March 28th, 2020'
    title.textContent = 'Lambda Times'
    temp.textContent = '98°'

    return divContainer
}

const container = document.querySelector('.header-container')
container.appendChild(Header());
