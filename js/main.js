
/* ***********************************
Updated with React component rendering
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
    ReactDOM.unmountComponentAtNode(document.getElementById('chat'))
}

const render = () =>{ // Creating element maker variables
    clear()
    ReactDOM.render(<Render result = {data_result} /> , document.getElementById('chat'))   
}

/* ***********************************
variables and document variables
*********************************** */
var kori_search = document.getElementById('search');
var search_term = "";
var data_result;

kori_search.addEventListener('input', e => { // saving the input value
    search_term = e.target.value;
    searchFilter();
})
 

 


  
