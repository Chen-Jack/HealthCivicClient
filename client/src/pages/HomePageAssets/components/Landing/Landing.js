import React from 'react'
import s from './Landing.scss'
import ArticleList from '../ArticleList/ArticleList'

export default (props)=>{
    return <div className={s.Landing}>
        <ArticleList subject={props.subject}/>


    </div>
}