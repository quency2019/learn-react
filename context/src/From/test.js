import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Form from './index'




class Test extends PureComponent {



    render() {
        return (
            <div>
                <Form onSubmit={datas=>{
                    console.log(datas)
                }}>
                    <div>
                        帐号：<Form.Input type='text' name='login'></Form.Input>
                        密码：<Form.Input type='password' name='loginPwd'></Form.Input>

                        <Form.Submit>按钮</Form.Submit>
                    </div>


                </Form>
            </div>
        );
    }
}

export default Test;
