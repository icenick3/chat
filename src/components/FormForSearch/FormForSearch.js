import React from 'react';
import {useForm} from "react-hook-form";

import styles from "./FormForSearch.module.css"

const FormForSearch = ({getNickname}) => {

    const {register} = useForm()


    const onchange = (e) => {
        getNickname(e.target.value)
    }
    return (
        <div>
                <input className={styles.searchInput} type="text" {...register('nickname')} placeholder={"Search"}
                       onChange={onchange}/>
        </div>

    );
};

export {FormForSearch};