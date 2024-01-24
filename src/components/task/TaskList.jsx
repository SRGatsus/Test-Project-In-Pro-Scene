import {Badge, VStack} from "@chakra-ui/react";
import {TaskElement} from "./TaskElement.jsx";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions.js";
import {EditTask} from "../../views/modal/editTask/EditTask.jsx";
import {useState} from "react";


export function TaskList() {

    const tasks = useSelector(state => state.tasks)
    const {removeToTasks} = useActions()
    const [isOpen,setIsOpen] = useState(false)
    const [selectTask, setSelectTask] = useState(false)
    function handleEditClick(task){
        setIsOpen(true)
        setSelectTask(task)
    }
    return (
        <section>
            <h3 className="custom-hide">Список задач</h3>
            <div itemScope itemType="https://schema.org/ItemList">
                {!tasks.length ?
                    <Badge
                        color="#0879d3"
                        borderColor="#0879d3"
                        variant="outline"
                        borderRadius="4"
                        p='4' m='5'
                    >Список задач пуст</Badge> : (
                        <VStack>
                            {tasks.map(task => {
                                return <TaskElement
                                    task={task}
                                    removeToTasks={removeToTasks}
                                    key={task.id}
                                    handleEditClick={handleEditClick}
                                />
                            })}
                        </VStack>
                    )
                }
            </div>
            <EditTask isOpen={isOpen} setIsOpen={setIsOpen} task={selectTask} setSelectTask={setSelectTask}/>
        </section>
    )
}