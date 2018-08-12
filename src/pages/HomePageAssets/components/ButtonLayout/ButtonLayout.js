import s from './ButtonLayout.scss';
import React from 'react'

export default (props)=>{
    return <div className={s.buttonLayout}>
        <span className={s.good}> {props.article.likes}  </span>
        <span className={s.neutral}> {props.article.neutral} </span>
        <span className={s.bad}> {props.article.dislikes} </span>
    </div>
}