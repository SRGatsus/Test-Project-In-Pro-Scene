import {Route, Routes} from "react-router-dom";
import {TasksPage} from "./views/tasks/tasksPage/TasksPage.jsx";
import {Layout} from "./layout/Layout.jsx";


function App() {
    const listNav = [{
        "path": "/",
        "title": "Тестовое задание в компанию \"ООО Про-Сцена\"",
        "name_menu": "Задачи"
    },
        {
            "path": "/info",
            "title": "Техническое задание",
            "name_menu": "О проекте"
        }
    ]
    return (
        <Routes>
            <Route element={<Layout listNav={listNav} />}>
                <Route path="/" element={<TasksPage/>}/>
            </Route>
        </Routes>
    )
}

export default App
