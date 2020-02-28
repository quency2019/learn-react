import React, {useState} from 'react';
import PropTypes from 'prop-types'





function Student(props) {

    return(
        <div>
            姓名：{props.name}
            性别：{props.sex===0?'男':'女'}
            出生年份：{props.birth}
            邮箱：{props.email}
        </div>
    )

}

export default function StudentList(props) {

    console.log(props)
    const students=props.stus.map(it=>(<Student key={it.id} {...it}/>))
    return (
        <div>
            {students}
        </div>
    )

}
StudentList.defaultProps={
    stus:[]
}



StudentList.propTypes={
    stus:PropTypes.array,

}



