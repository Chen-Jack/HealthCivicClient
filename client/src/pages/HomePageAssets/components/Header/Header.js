import React,{Component} from 'react'
import s from './Header.scss'




class Header extends Component{
    constructor(props) {
        super(props)    

        this.header_links = ["Medical Care", "Mental Health", "Maternity", "Drugs", "Emergency", "Other"]

    }
    
    render(){
        return <div className={s.Header}>
            {this.header_links.map(
                (link_title)=>{
                    return <a onClick={this.props.clickHandler.bind(this, link_title)} className={s.link}> {link_title} </a> 
                }
            )}
        </div>   
    }
}

export default Header