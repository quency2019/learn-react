import React, {Component} from 'react';
import Pager from './Pager'
import StudentList from './StudentList'
import Modal from './Modal'
class PagerControl extends Component {
    constructor(props){
        super(props)
        this.state={
            current:1,
            total:1,
            limit:2,
            pagesShow:2,
            students:[],
            isShow:false//蒙层属性是否显示
        }

        this.getStudents();

    }
    async getStudents(){
        this.setState({
            isShow:true
        })

        const stus=await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=quency_1559029619103&page=${this.state.current}&size=${this.state.limit}`)
            .then(res=>{
                return res.json()})
            .then(res=>{
                return res.data})

        this.setState({
            total:stus.cont,
            students:stus.findByPage,
            isShow:false
        })

    }


    getCurrentPage=(newPage)=>{
        console.log(newPage)

        this.setState({
            current:newPage,
        },()=>{
            this.getStudents();
        })


    }

    onShow=()=>{
        this.setState({
            isShow:true
        })
    }

    onClose=()=>{
        this.setState({
            isShow:false
        })
    }
        render() {
        return (
            <div className='container'>
                <StudentList students={this.state.students}/>
                <Pager {...this.state} onPageChange={this.getCurrentPage}/>
                {this.state.isShow?
                    (<Modal bg='rgba(0,0,0,.5)' onClose={this.onClose}><div>加载中。。。。</div>
                        <button onClick={()=>{this.onClose()}}>关闭蒙层</button>
                    </Modal>)
                    :null
                }
                <button onClick={()=>{this.onShow()}}>显示蒙层</button>
            </div>
        );
    }
}

export default PagerControl;
