import React from "react";
import styles from './TodoList.module.css'
import { BsFillTrashFill } from 'react-icons/bs';
import { MdEditSquare } from 'react-icons/md'

export default function TodoList({task, handleDelete, onComplete, handleEdit}){

    return(
        <ul>
            <li key={task.id}>
                <span>
                    <input onClick={() => onComplete(task)} type="checkbox" className={styles.checkbox}/>
                    <p className={task.completed ? styles.comTask: styles.task}>{task.title}</p>
                </span>
                <span>
                    <button onClick={()=>{handleEdit(task.id)}} className={styles.cross}><MdEditSquare/></button>
                    <button onClick={()=>{handleDelete(task.id)}} className={styles.cross}><BsFillTrashFill/></button>
                </span>
            </li>
        </ul>
    )
}