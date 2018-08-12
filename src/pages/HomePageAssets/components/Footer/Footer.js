import React from 'react'
import s from './Footer.scss'


export default (props)=>{
    return <div className={s.Footer}>
    <div>
        <h3> 
            Hackathon Team:
        </h3>
    </div>
    <div style={{"textAlign" : "left"}}>
        <ul>
            <li> Jean-Ezra Yeung </li>
            <li> Cynthia Clemons</li>
            <li> Alvin Lam </li>
            <li> Jack Chen </li>
        </ul>
    </div>
    </div>
}