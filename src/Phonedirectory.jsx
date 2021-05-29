import React , {Component} from 'react';
import AddSubcriber from './Components/AddSubcriber';
import Showsubcribers from './Showsubcribers';
import {BrowserRouter as Router ,Route} from 'react-router-dom'

class Phonedirectory extends Component{

    constructor(){
        super()
        this.state = {
            subscribersList : [{
                id:1,
                name :"chinmay",
                phone : "987654321"
            },
        {
            id:2,
            name : "Chethana",
            phone : "12345678"
        }]
        }
    }

    deletsubcriberhndler  = (subscriberId)=>{
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0 ;
        subscribersList.forEach(function (subscriber , index){
            if(subscriber.id == subscriberId)
            {
                subscriberIndex = index;
            }
        }, this)
        let newscubscribers = subscribersList;
        newscubscribers.splice(subscriberIndex,1)
        this.setState({subscribers : newscubscribers})
    }
    addSubscriberhandler = (newscubscriber) =>{
        let subscribersList = this.state.subscribersList;
        let x = subscribersList.length //5
        if(x > 0){                                      //5  - 1 = 4 
            newscubscriber.id = subscribersList[x - 1].id + 1; //6
        }else{
            newscubscriber.id = 1;
        }

        subscribersList.push(newscubscriber)
        this.setState({subscribersList : subscribersList})
        console.log('phone directory')
        console.log(this.state.subscribersList)
    }
    render(){
        return (
         
                <Router>
                       <div className="main-container">
                    <Route exact path='/' render= {(props) => <Showsubcribers {...props} subscribersList={this.state.subscribersList} deletsubcriberhndler={this.deletsubcriberhndler} />}/>
                    <Route exact path='/add' render= {(props) => <AddSubcriber {...props}  addSubscriberhandler={this.addSubscriberhandler}/>}/>
                    </div>
                </Router>
            
        )   
    }
};


export default Phonedirectory;