import React, {useState, useEffect} from 'react'


const ref = React.createRef()
let timer = null

function stop() {

    clearInterval(timer)
    timer = null
}

function MovableBlock(props) {


    useEffect(() => {
        console.log('运行副作用函数')

        const div = ref.current;
        let curTimes = 0;
        const disX = props.left / 100;
        const disY = props.top / 100;
        timer = setInterval(() => {
            curTimes++
            const newLeft = disX * curTimes;
            const newTop = disY * curTimes;
            div.style.left = newLeft + 'px';
            div.style.top = newTop + 'px';

            if (curTimes === 100) {
                stop();
            }

        }, 10)

        return ()=>{
           return stop()
            console.log('清理函数')
        }


    },[props.left,props.top])

    return (
        <div ref={ref}
             style={{
                 position: 'fixed',
                 background: '#f40',
                 width: 100,
                 height: 100,
                 marginTop: '100px'

             }}></div>
    )

}


function Test() {
    const [point, setPoint] = useState({x: 0, y: 0})
    const [visible, setVisible] = useState(true)


    return (
        <>{
            visible && (
                <div>
                    x:<input type='number'
                             onChange={e => {
                                 setPoint({...point, x: e.target.value})
                             }}/>
                    y:<input type='number'
                             onChange={e => {
                                 setPoint({...point, y: e.target.value})
                             }}/>
                    <MovableBlock left={point.x} top={point.y}/>
                </div>

            )
        }

            <button onClick={e => {
                setVisible(!visible)
            }}>显示/隐藏</button>
        </>
    )


}

export default Test
