import React from 'react'
import * as FaIcon from 'react-icons/fa';
import * as AilIcon from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as FiIcons from 'react-icons/fi';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';







export const SidebarData=[
    {
        title:"Items",
        path:'/',
        icon:<AilIcon.AiFillHome/>,
        iconClose:<RiIcons.RiArrowDownFill/>,
        iconOpen:<RiIcons.RiArrowUpFill/>,
        // subnav:[
        //     {
        //         title:'Users',
        //         path:'/overflow/users',
        //         icon:<IoIcons.IoIosPaper/>
        //     },
        //     {
        //         title:'Revenue',
        //         path:'/overflow/revenue',
        //         icon:<IoIcons.IoIosPaper/>
        //     }
        // ]

    },
    {
        title:"Orders",
        path:'/orders/Delivery',
        icon:<AilIcon.AiFillAlert />,
        iconClose:<MdIcons.MdKeyboardArrowDown/>,
        iconOpen:<MdIcons.MdKeyboardArrowUp/>,
        subnav:[
            {
                title:'Delivery',
                path:'/orders/Delivery',
                icon:<IoIcons.IoIosPaper/>
            },
            {
                title:'Takeaway',
                path:'/orders/Takeaway',
                icon:<IoIcons.IoIosPaper/>
            }
        ]

    },
    {
        title:"ResturntOpenClose",
        path:'/orders/datetime',
        icon:<BiIcons.BiLockOpenAlt/>,
    },
    {
        title:"Help",
        path:'/help',
        icon:<FiIcons.FiHelpCircle/>,
    }
]