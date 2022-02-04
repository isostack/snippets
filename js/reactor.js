
/* ***********************************
 M O D U L E 1 S T A R T 
*********************************** */

class Input extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      input : ''
    }
    this.handleType = this.handleType.bind(this)
  }
  handleType(event){  
     search_term = event.target.value
     searchFilter();
  }
  render(){
    return (
      <input  onChange={this.handleType} id="search" placeholder="search" />
    )
  }
}
class Alpha extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return 
  }
}
ReactDOM.render(<Input /> , document.getElementById("shore"))

//ReactDOM.render(<Inform /> , document.getElementById("chat"))

/* ***********************************
 M O D U L E 2 
*********************************** */
var kori_search = document.getElementById('search');
var search_term = "";
var data_result;

const searchFilter = () => {
  if (search_term == "") {
      clear(Input)
  } else {
      flexSearch(search_term)
  }
}

const flexSearch = (val) => {
  for (const key in data) {
      if (key.includes(val)) {
          data_result = data[key];
          render();
      }
  }

}
/* ***********************************
M O D U L E 3 RENDERERS
*********************************** */
const Render = function (props) {
  return (
 <li className="you">
  <div className="message">{props.result}</div> 
  </li>  
   );
 }
 
const clear = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('chat'))
}

const render = () =>{ // Creating element maker variables
  clear(Input)
  ReactDOM.render(<Render result = {data_result} /> , document.getElementById('chat'))   
}


