import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {getAllStudents} from './services/students'

function UseAllStudents (){
    const [students,setStudents] = useState([])

    useEffect(()=>{
        (async function () {
            const stus=getAllStudents()
            console.log(stus)
            setStudents(students)

        })()
    })
}

UseAllStudents.propTypes = {};

export default UseAllStudents;
