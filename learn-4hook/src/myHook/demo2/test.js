import React, {Component} from 'react';
import useAllStudents from './useAllStudents'

function Test (){
    const res=useAllStudents();
    if(res){
        const stus=res.map(item=>(<Student key={item.id} {...item} />))
        return (
            <div>
                {stus}
            </div>
        );
    }

    return null


}

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


export default Test;
