
import './Showsubcribers.css'
import Header from './Components/Header'
import './Components/header.css'
import React  from 'react';
import {Link} from 'react-router-dom'


class Showsubcribers  extends React.Component {

  onDeleteClick = (subscriberId)=>{
      this.props.deletsubcriberhndler(subscriberId)
  }

  render (){
   
  
      return (
        <div>
          <Header heading= "PHONE DIRECTORY"   />
          <div className="component-body-container">
              <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>
    
              <div className="grid-container heading-container">
                <span className="grid-item name-heading">Name</span>
                <span className="grid-item phone-heading">Phone</span>
              </div>
    
            
              {
                this.props.subscribersList.map((sub, key) => {
                  return (
                      <div key ={sub.id} className="grid-container">
                            <span className="grid-item" >{sub.name}</span>
                            <span className="grid-item" >{sub.phone}</span>
                            <button className="del-btn" onClick={this.onDeleteClick.bind(this,sub.id)}  >Delete</button>
                      </div>
                  )
                })
              }
            </div>
        </div>
      );
  }

}

export default Showsubcribers;
