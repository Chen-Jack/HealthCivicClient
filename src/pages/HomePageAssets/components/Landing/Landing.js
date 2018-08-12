import React,{Component} from 'react'
import s from './Landing.scss'
import ArticleList from '../ArticleList/ArticleList'
// import Loader from '../Loader/Loader'

class Landing extends Component{
    constructor(props) {
        super(props)
    
    }

    render(){
        return <div className={s.Landing}>
            <ArticleList subject={this.props.subject}/>

        </div>
    }
}

export default Landing