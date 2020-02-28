import React, {useState, useEffect} from 'react';
import StudentList from './StudentList'
import {getStudents} from '../../services/students'
import Pager from '../page/Pager'



export default function StudentContainer(props) {
    const [students, setStudents] = useState([]);
    const [current, setCurrent] = useState(1);
    const [limit, setLimit] = useState(1);
    const [total, setTotal] = useState(0);
    const [pagesShow, setPagesShow] = useState(5);


    useEffect(() => {
        (async function () {
            const res = await getStudents(current, limit)
            // console.log(res)
            setStudents(res.findByPage)
            setTotal(res.cont)

        })()


    }, [current, limit])

    return (
        <div>
            <StudentList stus={students}/>
            <Pager
                current={current}
                total={total}
                limit={limit}
                pagesShow={pagesShow}
                onPageChange={(newPage)=>{
                    setCurrent(newPage)
                }}/>


            改变limit:<input type='number' value={limit} onChange={e => {
            setLimit(parseInt(e.target.value))
        }}/>
            改变pagesShow:<input type='number' value={pagesShow} onChange={e => {
            setPagesShow(parseInt(e.target.value))
        }}/>

        </div>
    )

}
