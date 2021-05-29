// import React from 'react';
import './header.css'

// const Header =(props)=>{
//    const {heading } = props
//     return (
//       <div>   
//         <div className = 'header' >
//     <h1>{heading} </h1> 
//         </div>
       
//       </div>  
//     )
// }



// const head ={textAlign : 'center',
// padding : 20,
// background : '#000',
// color :'#fff',
// textTransform : 'uppercase' }

import React ,{Component} from 'react';

class Header extends Component {
  render(){
    return (
      <div className = "header" >
       <h1>{this.props.heading}</h1>
      </div>
    )
  }
}

export default Header;