import s from './FeaturedItem.scss';
import ButtonLayout from '../ButtonLayout/ButtonLayout'
import React from 'react';
import {Link} from 'react-router-dom';

export default (props)=>{
    return <div className={s.featuredItem}>
        <img className={s.img} src={`https://source.unsplash.com/random/400x400/?${props.article.title.split(" ")[0]}`} />

        <div className={s.content}>
            <Link className={s.link} to={`/article/${props.article.id}`} > <h1 className={s.title}>{props.article.title}</h1> </Link>
            <p className={s.body}> {props.article.body.substring(0,400) + "..."} </p>
            {/* <ButtonLayout article={props.article}/> */}
        </div>
    

    </div>
}