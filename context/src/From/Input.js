import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ctx from "./Context";

class Input extends PureComponent {
    static defaultProps={
        type:'text'
    }
    static propTypes = {
        name:PropTypes.string.isRequired,
        type:PropTypes.string.isRequired

    };

    static contextType=ctx



    render() {
        console.log(this.context)
        return(<input
            type={this.props.type}
            name={this.props.name}
            value={this.context.fromData[this.props.name]||''}
            onChange={(e)=>{
               this.context.changeFormData(this.props.name,e.target.value)
            }}
            />
            )
    }
}



export default Input;
