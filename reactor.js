const Info = function (props) {
  return (
 <header>
 <img src="./images/ai.jpg" alt="" />
 <div>
     <h2>The Kori Search</h2>
     <h3>With over 192 keywords</h3>
 </div>
 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt="" />
</header>         
   );
}
const Inform = function (props) {
 return (
<li className="you">
 <div className="message">Please type Search Query!</div> 
 </li>  
  );
}
const Render = function (props) {
 return (
<li className="you">
 <div className="message">{props.result}</div> 
 </li>  
  );
}
class Alpha extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
     <Info />
    )
  }
}

ReactDOM.render(<Alpha /> , document.getElementById("info"))
ReactDOM.render(<Inform /> , document.getElementById("chat"))