import React, {Component} from 'react';
import Canousel from './carousel/index'
import src1 from './carousel/img/01.jpg'
import src2 from './carousel/img/02.jpg'
import src3 from './carousel/img/03.jpg'
import src4 from './carousel/img/04.jpg'
class App extends Component {
    render() {
        return (
            <div>
            <Canousel imgSrcs={[src1,src2,src3,src4]}/>
            </div>
    )
        ;
    }
}

export default App;

