import React from 'react';
import s from './Loader.scss';

export default (props)=>{
    return <div className={s.test}>
        {props.isLoading ? <div className={s.loader_container}>
            <div className={s.loader}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div> : ""}
    </div>
}