import React, { useState } from 'react'
import styles from './NewTodo.module.css';

function EditTodo({editTask, task}) {

    const [value, setValue] = useState(task.title);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(value, task.id);
        setValue("");
    }

  return (
    <form onSubmit={handleSubmit}>
    <input  type="text" 
            placeholder="Add a task"
            className={styles.inp}
            name="title"
            value={value}
            onChange={(e) => setValue(e.target.value)}/>
    <button type="submit" className={styles.add}>Edit</button>
</form>
    )
}

export default EditTodo