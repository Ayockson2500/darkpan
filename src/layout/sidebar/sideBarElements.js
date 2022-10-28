import { AiFillDashboard } from "react-icons/ai"
import { MdComputer } from "react-icons/md"
import { MdWidgets } from "react-icons/md"
import { FaKeyboard } from "react-icons/fa"
import { BiTable } from "react-icons/bi"
import { FaRegChartBar } from "react-icons/fa"
import { BiLogOutCircle } from "react-icons/bi"

export const sideBarElements = [
    {
        title: 'Dashboard',
        url: '/',
        icon: <AiFillDashboard />,
        subMenu: [],
        classNme: "active-menu"
    },
    {
        title: 'Elements',
        url: '/elements',
        icon: <MdComputer />,
        subMenu: [ 
            {
            subTitle: 'Buttons',
            Url: ''
            },
            {
            subTitle: 'Typography',
            Url: ''
            },
            {
            subTitle: 'Other Elements',
            Url: ''
            }
        ],
        classNme: ""
    },
    {
        title: 'Widgets',
        url: '/widgets',
        icon: <MdWidgets />,
        subMenu: [],
        classNme: ""
    },
    {
        title: 'Forms',
        url: '/forms',
        icon: <FaKeyboard />,
        subMenu: [],
        classNme: ""
    },
    {
        title: 'Tables',
        url: '/tables',
        icon: <BiTable />,
        subMenu: [],
        classNme: ""
    },
    {
        title: 'Chart',
        url: '/charts',
        icon: <FaRegChartBar />,
        subMenu: [],
        classNme: ""
    },
    {
        title: 'Log Out',
        url: '/signin',
        icon: <BiLogOutCircle />,
        subMenu: [],
        classNme: ""
    },
]
