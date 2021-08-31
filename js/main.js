// ECMASCIPT 2915
/* ***********************************
Functions and object
*********************************** */

const flexSearch = (val) => {
    for (const key in data) {
        if (key.includes(val)) {
            data_result = data[key];
            render();
        }
    }

}
const searchFilter = () => {
    if (search_term == "") {
        clear()
    } else {
        flexSearch(search_term)
    }
}

const clear = () => {
    kori_result.innerHTML = '';
}

const render = () =>{ // Creating element maker variables
    clear()
    var li = document.createElement('li')
    li.classList.add('you');
    var div = document.createElement('div')
    div.classList.add('message')
    div.textContent = data_result;
    // Appending element creators
    li.appendChild(div)
    // Appending to document
    kori_result.appendChild(li)
}
const renderType = () => { // Creating element maker variables
    clear()
    var li = document.createElement('li')
    li.classList.add('you');
    var div = document.createElement('div')
    div.classList.add('message')
    div.textContent = "Please type a query !";
    // Appending element creators
    li.appendChild(div)
    // Appending to document
    kori_result.appendChild(li)
}

/* ***********************************
variables and document variables
*********************************** */
var kori_result = document.getElementById('chat');
var kori_search = document.getElementById('search');
var search_term = "";
var data_result;

kori_search.addEventListener('input', e => { // saving the input value
    search_term = e.target.value;
    searchFilter();
})

window.addEventListener('load', renderType() , )

  
