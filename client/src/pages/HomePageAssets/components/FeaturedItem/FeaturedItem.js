import s from './FeaturedItem.scss';
import ButtonLayout from '../ButtonLayout/ButtonLayout'
import React from 'react';

export default (props)=>{
    return <div className={s.featuredItem}>
        <img className={s.img} src={'https://source.unsplash.com/random/400x400'} />

        <div className={s.content}>
            <h1> {props.article.title} </h1>
            <p> {props.article.body} </p>
            <ButtonLayout article={props.article}/>
        </div>
    

    </div>
}