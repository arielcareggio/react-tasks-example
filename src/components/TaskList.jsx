// import PropTypes from "prop-types"; // Importa PropTypes para definir las validaciones de las props.
import TaskCard from "./TaskCard";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskList() {

    const {tasks} = useContext(TaskContext)

    if(tasks.length === 0){
        return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>
    } 

    return (
        <div className="grid grid-cols-4 gap-2">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    );
}

// Definir las validaciones de las props utilizando PropTypes.
/* TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
}; */

export default TaskList;
