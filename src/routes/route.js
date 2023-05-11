import MainRoot from "../components/MainRoot"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"",
                element:<Home/>
            },
        ]

    }
]
export default ROUTES