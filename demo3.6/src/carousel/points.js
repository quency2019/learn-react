import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './points.css'

class Points extends Component {
    static propTypes={
        total:PropTypes.number.isRequired,
        curIndex:PropTypes.number.isRequired,
        onChange:PropTypes.func
    }
    render() {
        const spans=[]
        for (let i = 0; i <=this.props.total-1; i++) {
            const span=<span
                key={i}
                className={i===this.props.curIndex?'active':''}
                onClick={()=>{
                    this.props.onChange&&this.props.onChange(i)
                }
                }
            ></span>
            spans.push(span)

        }

        return (
            <div className='points'>
                {spans}

            </div>
        );
    }
}

export default Points;
