import { useState, useContext } from "react"
//import PropTypes from "prop-types"; // Importa PropTypes para definir las validaciones de las props.
import { TaskContext } from '../context/TaskContext'

export default function TaskForm() {

    const [title, setTitle] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const { createTask } = useContext(TaskContext); //De este objeto SOLO quiero la función createTask, ya que se va a utilizar más abajo

    //Para obtener los datos cuando se presione GUARDAR
    //Pero como los formularios actualizan la web, hay q bloquear ese comportabmiento con e.preventDefault()
    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            descripcion
        })
        //Limpiamos los valores despues del guardar
        setTitle('')
        setDescripcion('')
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
                <input placeholder="Escribe tu tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="bg-slate-300 p-3 w-full mb-2"
                    autoFocus
                />
                <textarea placeholder="Escribe la descripción"
                    onChange={(e) => setDescripcion(e.target.value)}
                    value={descripcion}
                    className="bg-slate-300 p-3 w-full mb-2"
                ></textarea>
                <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-700">Guardar</button>
            </form>
        </div>
    )
}

// Definir las validaciones de las props utilizando PropTypes.
/* TaskForm.propTypes = {
    createTask: PropTypes.func.isRequired,
}; */