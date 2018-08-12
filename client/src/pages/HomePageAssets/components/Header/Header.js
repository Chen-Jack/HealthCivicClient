import React,{Component} from 'react'
import s from './Header.scss'
import {Link} from 'react-router-dom';

class Header extends Component{
    constructor(props) {
        super(props)    

        this.header_links = ["Medical Care", "Mental Health", "Maternity", "Drugs", "Emergency", "Other"]
        
        if(this.props.clickHandler){
            this.clickHandler = this.props.clickHandler;
        }
        else{
            this.clickHandler = ()=>{console.log("Default Click")}
        }
    }
    
    render(){
        return <div className={s.Header}>
            <div className={s.home_space}>
                <Link to= "/"> Health/Civic </Link>
            </div>
            <div className={s.HeaderLinks}> 
                {this.header_links.map(
                    (link_title)=>{
                        return <a onClick={this.clickHandler.bind(this, link_title)} className={s.link}> {link_title} </a> 
                    }
                )}
            </div>

            <div className={s.search_space}>
                <input type="text" placeholder="search"/> 
            </div>
        </div>   
    }
}

export default Header