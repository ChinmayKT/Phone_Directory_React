import React , {Component} from 'react';
import Header from './Header'
import './AddSubcriber.css';
import {Link} from 'react-router-dom'

class AddSubcriber extends Component {
    constructor(){
        super()
        this.state = {
            id:0,
            name: '',
            phone: '',
            
        }
    }

    inputChangeHadler =(e) =>{
        const input = this.state ;
        input[e.target.name] = e.target.value;
        this.setState(input)
        console.log(input)  
    }

    onFormSubmitted = (e) =>{
        e.preventDefault();
        this.props.addSubscriberhandler(this.state);
        this.setState({id: 0 , name:'' , phone: ''})
        this.props.history.push('/') 
    }
    
    render(){
        const {name, phone} = this.state
        return (
            <div>
                <Header heading= "Add Subcriber"  />
                
                <div className="component-body-container">
                    <Link to="/"><button className="custom-btn ">Back</button></Link>
                    <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)} >
                    <label htmlForm = "name" className ="label-control" >Name :</label><br></br>
                        <input id="name" type="text" className ="input-control" name ="name"  onChange={this.inputChangeHadler} ></input> <br></br>
                        <label htmlForm = "phone" className ="label-control" >Phone :</label><br></br>
                        <input id="phone" type="number" className ="input-control" name ="phone"  onChange={this.inputChangeHadler} ></input><br></br>
                      
                        <div className="subscribar-info-container">
                            <span className="subscribar-to-add-heading" >Subscriber to be added: </span> <br></br>
                            <span  className="subscriber-info" >Name : {name}</span> <br></br>
                            <span  className="subscriber-info" >Phone : {phone}</span> <br></br>
                        </div>
                        <button type="submit" className="custom-btn add-btn" >ADD</button>
                    </form>
                       
                </div>

            </div>
    
             
        )
    }
}

export  default AddSubcriber;