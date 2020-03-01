import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css'

class Index extends Component {
    render() {
        return (
            <div className='container'>
                <header className='header'>header</header>
                <div className='middle'>
                    <div className='aside'>
                        aside
                        {this.props.aside}
                    </div>
                    <div className='main'></div>
                </div>


            </div>
        );
    }
}

Index.propTypes = {
    header:PropTypes.element,
    aside:PropTypes.element,
    children:PropTypes.element,

};

export default Index;
