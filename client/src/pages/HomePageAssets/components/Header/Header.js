import React,{Component} from 'react'
import s from './Header.scss'

class Header extends Component{
    constructor(props) {
        super(props)    

        this.header_links = ["Medical Care", "Mental Health", "Maternity", "Drugs", "Emergency", "Other"]

    }
    
    render(){
        return <div className={s.Header}>
            <div className={s.home_space}>
                Health/Civic
            </div>
            <div className={s.HeaderLinks}> 
                {this.header_links.map(
                    (link_title)=>{
                        return <a onClick={this.props.clickHandler.bind(this, link_title)} className={s.link}> {link_title} </a> 
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