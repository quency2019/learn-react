import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {getAllStudents} from '../services/students'

export default function useAllStudents (){
    const [students,setStudents] = useState([])

    useEffect(()=>{
        (async function () {
            const stus= await getAllStudents()
            console.log(stus)
            setStudents(stus)
        })()
    },[])


    return students
}



