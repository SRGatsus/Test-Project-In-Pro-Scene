import {Badge, VStack} from "@chakra-ui/react";
import {TaskElement} from "./TaskElement.jsx";
import {useSelector} from "react-redux";
import {EditTask} from "../../views/modal/editTask/EditTask.jsx";
import {useMemo, useState} from "react";
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Fade from 'react-reveal/Fade';
import {TaskFilter} from "./TaskFilter.jsx";


export function TaskList() {

    const tasks = useSelector(state => state.tasks)
    const [isOpen, setIsOpen] = useState(false)
    const [filterStatus, setFilterStatus] = useState(false)
    const [selectTask, setSelectTask] = useState(false)
    const visibleTodos = useMemo(() => tasks.filter(task => {
        return !filterStatus || task.status === filterStatus
    }), [tasks, filterStatus]);


    function handleEditClick(task) {
        setIsOpen(true)
        setSelectTask(task)
    }

    return (
        <section style={{marginTop: "10px"}}>
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
                            <TaskFilter setFilterStatus={setFilterStatus} filterStatus={filterStatus}/>
                            {!visibleTodos.length ?
                                <Badge
                                    color="#0879d3"
                                    borderColor="#0879d3"
                                    variant="outline"
                                    borderRadius="4"
                                    p='4' m='5'
                                >Задач в данной категории нет</Badge> :
                                <TransitionGroup appear={true} enter={true} exit={true}>
                                    {
                                        visibleTodos.map((task) => (
                                            (
                                                <Fade key={task.id} collapse left>
                                                    <TaskElement
                                                        task={task}
                                                        handleEditClick={handleEditClick}
                                                    />
                                                </Fade>
                                            )
                                        ))
                                    }
                                </TransitionGroup>
                            }
                        </VStack>

                    )
                }
            </div>
            <EditTask isOpen={isOpen} setIsOpen={setIsOpen} task={selectTask} setSelectTask={setSelectTask}/>
        </section>
    )
}