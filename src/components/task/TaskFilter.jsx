import {useMemo} from "react";
import {ETaskStatus} from "../../utils/ETaskStatus.js";
import {Button, Flex} from "@chakra-ui/react";


export function TaskFilter({setFilterStatus, filterStatus}) {

    function handleChangeFilter(status) {
        setFilterStatus(status)
    }

    const filterList = useMemo(() => [
        {
            status: false,
            text: "Все"
        },
        {
            status: ETaskStatus.CREATE,
            text: "Новые"
        },
        {
            status: ETaskStatus.WORK,
            text: "В работе"
        }, {
            status: ETaskStatus.END,
            text: "Завершеные"
        },
        {
            status: ETaskStatus.CANCEL,
            text: "Отмененые"
        }
    ], [])
    return (
        <Flex  gap={4} alignItems="center" justifyContent="center" flexWrap="wrap">
            {filterList.map((filter, index) => {
                if (filter.status === filterStatus) {
                    return (

                        <Button
                            key={index + "_" + filter.status}
                            color="#fff"
                            bgColor="#06549a"

                            _hover={{bg: "#06549a", color: "#fff"}}
                            onClick={() => handleChangeFilter(filter.status)}
                        >
                            {filter.text}
                        </Button>
                    )
                } else {
                    return (

                        <Button
                            key={index + "_" + filter.status}
                            color="#0879d3"

                            variant='ghost'
                            _hover={{bg: "#06549a", color: "#fff"}}
                            onClick={() => handleChangeFilter(filter.status)}
                        >
                            {filter.text}
                        </Button>
                    )
                }

            })}

        </Flex>)
}