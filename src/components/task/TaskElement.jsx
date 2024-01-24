import {Flex, Spacer,  VStack, Button, useToast} from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from '@chakra-ui/icons'

import {ETaskStatus} from "../../utils/ETaskStatus.js";
import {Text} from '@chakra-ui/react'
import {useActions} from "../../hooks/useActions.js";

export function TaskElement({task, removeToTasks, handleEditClick}) {

    let status
    const toast = useToast()
    switch (task.status) {
        case (ETaskStatus.CREATE):
            status = "создана"
            break
        case (ETaskStatus.WORK):
            status = "в работе"
            break
        case (ETaskStatus.CANCEL):
            status = "Отменена"
            break
        case (ETaskStatus.END):
            status = "завершена"
            break
        default:
            status = "создана"
    }
    const {changeTask} = useActions()

    function changeStatus(id, status) {
        changeTask({id, status})
        toast({
            title: "Статус успешно изменен", status: "success", duration: 2000, isClosable: true,
        })
    }

    return (
        <article itemProp="itemListElement" itemScope
                 itemType="https://schema.org/ListItem">
            <VStack spacing="24px" m={6} minH="50px" w="450px" key={task.id}>
                <Flex w="450px" justifyContent="space-between">
                    <Text
                        fontSize='xl'
                        maxWidth="300px"
                    >
                        {task.title}
                    </Text>
                    <Flex w="50px" h="100%" alignItems="center">
                        <DeleteIcon
                            h="18px"
                            w="18px"
                            cursor="pointer"
                            color="red.500"
                            mr="2"
                            onClick={() => removeToTasks(task.id)}/>
                        <Spacer/>
                        <EditIcon
                            h="18px"
                            w="18px"
                            cursor="pointer"
                            onClick={() => handleEditClick(task)}
                        />
                    </Flex>
                </Flex>
                <Flex w="450px" justifyContent="space-between">
                    <Text>
                        Статус: {status}
                    </Text>
                </Flex>
                <Flex w="450px"
                      justifyContent={[ETaskStatus.CANCEL, ETaskStatus.END].findIndex(value => value === task.status) > -1 ? "center" : "space-between"}>

                    {
                        [ETaskStatus.WORK, ETaskStatus.CREATE].findIndex(value => value === task.status) > -1 ?
                            <Button bgColor="red"
                                    w="150px"
                                    borderColor="red"
                                    border='1px'
                                    color="#fff"
                                    type="button"
                                    _hover={{bg: "#6e0c0c"}}
                                    onClick={() => changeStatus(task.id, ETaskStatus.CANCEL)}
                            >
                                Отменить
                            </Button>
                            : ''}
                    {
                        [ETaskStatus.CANCEL, ETaskStatus.CREATE].findIndex(value => value === task.status) > -1 ?
                            <Button bgColor="#0879d3"
                                    w="150px"
                                    borderColor="#000"
                                    border='1px'
                                    color="#fff"
                                    type="button"
                                    _hover={{bg: "#06549a"}}
                                    onClick={() => changeStatus(task.id, ETaskStatus.WORK)}
                            >
                                Делаю
                            </Button>
                            : ''}

                    {
                        [ETaskStatus.WORK].findIndex(value => value === task.status) > -1 ?
                            <Button bgColor="#0a7e07"
                                    w="150px"
                                    borderColor="#0a7e07"
                                    border='1px'
                                    color="#fff"
                                    type="button"
                                    _hover={{bg: "#167205"}}
                                    onClick={() => changeStatus(task.id, ETaskStatus.END)}
                            >
                                Завершить
                            </Button>
                            : ''}

                </Flex>
            </VStack>

        </article>
    )
}