import React, {Component} from 'react';
import './btn.css'
import PropTypes from "prop-types";

class BtnBox extends Component {

    static propTypes={
        onChange:PropTypes.func
    }
    render() {
        return (
            <div className='arrowBtn'>
                <span className='left' onClick={()=>{
                    this.props.onChange&&this.props.onChange('left')

                }}>&lt;</span>
                <span className='right' onClick={()=>{
                    this.props.onChange&&this.props.onChange('right')

                }}>&gt;</span>
            </div>
        );
    }
}

export default BtnBox;
