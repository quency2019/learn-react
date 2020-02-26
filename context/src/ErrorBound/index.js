import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Index extends PureComponent {
    state={
        hasErr:false
    }

    static getDerivedStateFromError(error) {
        //更新state后再下次渲染时会显示备用UI
        console.log('发生了错误')
        return { hasError: true };
    }

    componentDidCatch(err,info) {
        console.log(err)
        console.log(info)
    }

    render() {
        if(this.state.hasErr){
            return (
                <h1>something went error</h1>
            );
        }
        return (
            this.props.children
        )



    }
}


export default Index;
