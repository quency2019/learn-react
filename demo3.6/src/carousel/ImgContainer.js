import React, {Component} from 'react';
import PropTypes from "prop-types";

class ImgContainer extends Component {
   /* static defaultProps={
        imgWidth:520,
        imgHeight:280,
        imgSrcs:[],

    }*/
    static propTypes={
        imgWidth:PropTypes.number.isRequired,
        imgHeight:PropTypes.number.isRequired,
        imgSrcs:PropTypes.arrayOf(PropTypes.string).isRequired,
        duration:PropTypes.number.isRequired,

    }

    containerRef=(e)=>{
        this.div=e
    }

    tick=16;
    timer=null;
    switchTo(index){
        console.log(index)
        if (index<0){
            index=0
        } else if(index>this.props.imgSrcs.length-1){
            index=this.props.imgSrcs.length-1
        }
        const targetLeft=-index*this.props.imgWidth

        //当前的
        let curLeft=parseFloat(getComputedStyle(this.div).marginLeft)

        // console.log(curLeft,targetLeft)

        // 计算运动的次数
        const num=Math.ceil(this.props.duration/this.tick);
        // 每次运动多少
       const v=(targetLeft-curLeft)/num


        let curNum=0;
        clearInterval(this.timer)
        this.timer=setInterval(()=>{
            curNum++;
            // console.log(curNum);
            curLeft+=v
            this.div.style.marginLeft=curLeft+'px'
            if (curNum===num){
                this.div.style.marginLeft=targetLeft+'px'

                clearInterval(this.timer)

            }
        },this.tick)

    }
    render() {
        const imgs=this.props.imgSrcs.map((item,i)=>(<img key={i} src={item}
        style={{
            width:this.props.imgWidth,
            height:this.props.imgHeight,
            float:"left"
        }
        } alt='' />))
        return (
            <div className='imgContainer'
                 ref={this.containerRef}
            style={{
                width:this.props.imgWidth*this.props.imgSrcs.length,
                height:this.props.imgHeight,
            }}>
                {imgs}
            </div>
        );
    }
}

export default ImgContainer;
