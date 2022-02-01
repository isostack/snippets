 
 const Info = function () {
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
//ReactDOM.render( Side , document.getElementById("do2"))