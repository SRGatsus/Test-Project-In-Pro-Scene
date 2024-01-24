import {Route, Routes} from "react-router-dom";
import {TasksPage} from "./views/tasks/tasksPage/TasksPage.jsx";
import {Layout} from "./layout/Layout.jsx";


function App() {

    return (
        <Routes>
            <Route element={<Layout  />}>
                <Route path="/" element={<TasksPage/>}/>
            </Route>
        </Routes>
    )
}

export default App
