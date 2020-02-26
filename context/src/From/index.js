import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Provider} from "./Context";
import Input from './Input'
import Submit from './Submit'


class Form extends PureComponent {

    state={
        fromData:{},
        changeFormData:(name,value)=>{
            this.setState({
                fromData:{
                    ...this.state.fromData,
                    [name]:value
                }
            })
        },
        submit:()=>{
            this.props.onSubmit&&this.props.onSubmit(this.state.fromData)

            return 1
        }
    }
    static propTypes={
        onSubmit:PropTypes.func

    }


    render() {
        return (
            <div>
                <Provider value={this.state}>
                    {this.props.children}
                </Provider>
            </div>

        );
    }
}
Form.Input=Input;
Form.Submit=Submit
export default Form;
