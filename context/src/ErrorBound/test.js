import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ErrorBound from './index'


function getData() {
 return
}
function Comp1() {
    const ad=getData.map(i=>(<span>{i}</span>))
    return <div>comp1</div>

}
function Comp2() {
    return <div>comp2</div>

}


class Test extends PureComponent {
    render() {
        return (
            <div>
                <ErrorBound>
                    <Comp1></Comp1>
                    <Comp2></Comp2>
                </ErrorBound>

            </div>
        );
    }
}


export default Test;
