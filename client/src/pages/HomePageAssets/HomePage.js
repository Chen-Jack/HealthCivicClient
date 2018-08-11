import React, {Component} from 'react'
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'


class HomePage extends Component{
    constructor(props) {
        super(props)

        this.state={
            selectedSubject : "All"
        }
    }

    changeSubject = (subject)=>{
        this.setState({
            selectedSubject: subject
        })
    }
    
    render(){
        return <div>
            <Header clickHandler={this.changeSubject}/>
            <Landing subject={this.state.selectedSubject}/>

            <button onClick={()=>console.log(this.state.selectedSubject)}> Check State </button>
            
        </div>
    }
}

export default HomePage