import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Comsumer} from "./Context";



class Submit extends PureComponent {

    render() {
        return(
            <Comsumer>
            {(ctx)=>(<button onClick={()=>{
            ctx.submit()}}>
            {this.props.children}
        </button>)}
        </Comsumer>)
        /*return (

        );*/
    }
}


export default Submit;
