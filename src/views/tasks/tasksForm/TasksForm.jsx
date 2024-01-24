import {Button, FormControl, HStack, Input,  useToast} from "@chakra-ui/react";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {useActions} from "../../../hooks/useActions.js";
import {ETaskStatus} from "../../../utils/ETaskStatus.js";

export function TasksForm() {
    const [title, setTitle] = useState("")
    const toast = useToast()
    const {addToTasks} = useActions()

    function handleSubmit(e) {
        e.preventDefault();

        if (title === '') {
            toast({
                title: "Введите название задачи", status: "warning", duration: 2000, isClosable: true,
            })
            return;
        }
        addToTasks({"id": uuidv4(), title: title, status: ETaskStatus.CREATE})
        toast({
            title: "Задача успешно создана", status: "success", duration: 2000, isClosable: true,
        })
        setTitle("")
    }

    return (
        <section>

            <h3 className="custom-hide">Создание задачи</h3>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <HStack spacing="24px" w="640">
                    <FormControl>
                        <Input placeholder='Изучить react' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </FormControl>
                    <Button bgColor="#0879d3"
                            w="150px"
                            borderColor="#000"
                            border='1px'
                            color="#fff"
                            type="submit"
                            _hover={{ bg: "#06549a" }}
                    >
                        Создать
                    </Button>
                </HStack>
            </form>

        </section>
    )
}