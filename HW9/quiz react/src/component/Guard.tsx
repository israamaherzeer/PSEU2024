

import React from 'react'
import {readData} from './../utils';
import {useNavigate} from 'react-router'
import { Iuser } from '../types';
interface Iprops{
    children :React.ReactNode;
    role:string[]
}

function Guard(props:Iprops) {
    const Navigate =useNavigate()
    const user:Iuser = readData('user');
    if (!user)
    {
    Navigate('/')

    }
    else if (props.role.includes(user.roll) ||props.role[0]==='*')
    return props.children
    else return ( <div>No access </div> )
}

export default Guard