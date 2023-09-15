import React from "react";
import styles from './NewTodo.module.css';

function NewTodo({newTask, submit, changeHandler}){
    return(
        <form onSubmit={submit}>
            <input  type="text" 
                    placeholder="Add a task"
                    className={styles.inp}
                    name="title"
                    onChange={changeHandler}
                    value={newTask.title || ''}/>
            <button type="submit" className={styles.add}>Add</button>
        </form>
    )
}
export default NewTodo;