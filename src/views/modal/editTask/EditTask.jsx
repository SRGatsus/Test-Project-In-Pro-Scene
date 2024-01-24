import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {useActions} from "../../../hooks/useActions.js";


export function EditTask({isOpen, setIsOpen, task, setSelectTask}) {
    function handleEditInputChange(e) {
        setSelectTask({...task, title: e.target.value});
    }

    const {editTask} = useActions()

    function handleEditSubmit(e) {
        e.preventDefault();
        editTask({id: task.id, title: task.title})
        setIsOpen(false)
        setSelectTask(false)
    }

    function onClose(){
        setIsOpen(false)
        setSelectTask(false)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Редактирование задачи</ModalHeader>
                <ModalCloseButton/>
                <form onSubmit={handleEditSubmit}>
                    <ModalBody>
                        <Input
                            value={task.title}
                            key={task.id}
                            variant="outline"
                            type="text"
                            placeholder="Update your todo..."
                            onChange={handleEditInputChange}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="teal" mr={3}
                                borderColor="#000"
                                bgColor="#0879d3"
                                border='1px'
                                color="#fff"
                                type="button"
                                _hover={{ bg: "#06549a" }}
                                onClick={onClose}>
                            Назад
                        </Button>
                        <Button type="button" colorScheme="teal"
                                borderColor="#000"
                                bgColor="#0879d3"
                                border='1px'
                                color="#fff"
                                _hover={{ bg: "#06549a" }}
                                mr={3}>
                            Сохранить
                        </Button>
                    </ModalFooter>
                </form>

            </ModalContent>
        </Modal>
    )
}