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
        url: '',
        icon: <AiFillDashboard />,
        subMenu: [],
        classNme: "active-menu"
    },
    {
        title: 'Elements',
        url: '',
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
        url: '',
        icon: <MdWidgets />,
        subMenu: [],
        classNme: ""
    },
    {
        title: 'Forms',
        url: '',
        icon: <FaKeyboard />,
        subMenu: [],
        classNme: ""
    },
    {
        title: 'Tables',
        url: '',
        icon: <BiTable />,
        subMenu: [],
        classNme: ""
    },
    {
        title: 'Chart',
        url: '',
        icon: <FaRegChartBar />,
        subMenu: [],
        classNme: ""
    },
    {
        title: 'Log Out',
        url: '/',
        icon: <BiLogOutCircle />,
        subMenu: [],
        classNme: ""
    },
]
