import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './index.css'
import ImgContainer from './ImgContainer'
import BtnBox from './btnBox'
import Points from './points'
class Index extends Component {
    static defaultProps={
        imgWidth:520,
        imgHeight:280,
        imgSrcs:[],
        autoDuration:2000,//自动切换时候的时间
        duration:500,//手动切换时间
    }
    static propTypes={
        imgWidth:PropTypes.number,
        imgHeight:PropTypes.number,
        imgSrcs:PropTypes.arrayOf(PropTypes.string),
        autoDuration:PropTypes.number,
        duration:PropTypes.number,
    }
    state={
        curIndex:0
    }
    timer=null;

    autoSwitch=()=>{
        clearInterval(this.timer)
        this.timer=setInterval(()=>{
            let cur=this.state.curIndex
            cur=(cur+1) % this.props.imgSrcs.length
            this.handleSwitch(cur)

        },this.props.autoDuration)
    }


    componentDidMount() {
        this.autoSwitch()

    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    imgContainerRef=(e)=>{
        this.imgC=e

    }

    handleSwitch=(index)=>{
        this.setState({
            curIndex:index
        })
        this.imgC.switchTo(index)


    }
    handleChange=(type)=>{

        let cur=this.state.curIndex
        if (type==='left'){
            cur--;
            if (cur<0) {
                cur=this.props.imgSrcs.length-1
            }
        }else {
            cur++
            if (cur>this.props.imgSrcs.length-1){
                cur=0
            }
        }
        console.log(cur)
        this.setState({
            curIndex:cur
        })

        this.handleSwitch(cur)


    }

    render() {

        return (
            <div className='container' style={{
                width:this.props.imgWidth,
                height:this.props.imgHeight,}}
            onMouseEnter={()=>{
                clearInterval(this.timer)

            }}
                 onMouseLeave={()=>{
                     this.autoSwitch()
                 }}

            >
                <ImgContainer
                    ref={this.imgContainerRef}
                    {...this.props}
                />
               {/* <button onClick={()=>{
                    this.handleSwitch(3)
                }}>切换到第三张图片</button>*/}
                <BtnBox onChange={this.handleChange} />
                <Points
                total={this.props.imgSrcs.length}
                curIndex={this.state.curIndex}
                onChange={this.handleSwitch}
                />


            </div>
        );
    }
}

export default Index;
