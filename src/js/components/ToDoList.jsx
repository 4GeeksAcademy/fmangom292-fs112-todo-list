import React, { useState } from 'react';




const ToDoList = () => {

    const [list, useList] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const input = e.target[0];
        console.log(input.value);
        useList([...list, input.value]);

        //Limpiar input
        input.value = '';
    }


    function handleDelete(index) {
        return () => {
            const newList = [...list];
            newList.splice(index, 1);
            useList(newList);
        };
    }




    return (
        <div className="text-center">
            <ul className="list-group">
                <li className="list-group-item ">
                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="formGroupExampleInput" className="form-label"></label>
                        <input type="text" className="form-control border-0 text-center" id="formGroupExampleInput" placeholder="What needs to be done?" />
                    </form>
                </li>
                {
                    list.map((item, index) => (
                        <li key={index} className="d-flex list-group-item justify-content-between tarea">
                            {item}
                            <span className="d-none delete-btn" onClick={handleDelete(index)}>❌</span>
                        </li>
                    ))
                }
                <li className="list-group-item text-secondary text-start small italic">
                    <em>
                        {
                            list.length > 0 ?
                                `${list.length} tarea${list.length > 1 ? 's' : ''} añadida${list.length > 1 ? 's' : ''}` :
                                `No se han añadido tareas`
                        }
                    </em>
                </li>

            </ul>
        </div>
    );
};

export default ToDoList;