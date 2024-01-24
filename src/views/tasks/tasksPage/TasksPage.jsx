import {TasksForm} from "../tasksForm/TasksForm.jsx";
import {VStack, Text} from "@chakra-ui/react";
import {TaskList} from "../../../components/task/TaskList.jsx";


export function TasksPage() {
    return (
        <main>
            <VStack p={5}>
                <Text bgGradient="linear(to-l, #4ecbcc,#009dff,#8120f3)"
                      bgClip="text"
                      fontSize="6xl"
                      fontWeight="extrabold">
                    Задачник
                </Text>
                <TasksForm/>
                <TaskList/>
            </VStack>
        </main>
    )
}