import axios from 'axios';
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(response => {
    const info = Array.from(response.data.topics)
    const container = document.querySelector('.topics')

    info.map(item => {
        const tabItem = tabMaker(item);
        container.append(tabItem);
        return tabItem;
    });
})
.catch(error => {
    alert('There was an error loading the webpage. If this issue persists please contact your system administrator')
    console.log(error)
})

const tabMaker = (info) => {
const tab = document.createElement('div')
tab.classList.add('tab')
tab.textContent = info

return tab
}

const container = document.querySelector('.topics')
container.append(tabMaker('All'))