import React from 'react'
import s from './Footer.scss'


export default (props)=>{
    return <div className={s.Footer}>
    <div>
        <h3> 
            Hackathon Team:
        </h3>
    </div>
    <div>
        <ul>
            <li> Jean </li>
            <li> Alvin </li>
            <li> Cynthia </li>
            <li> Jack Chen </li>
        </ul>
    </div>
    </div>
}