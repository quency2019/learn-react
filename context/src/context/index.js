import React, {Component} from 'react';

const cText=React.createContext()



// 函数组件cText.Consumer 获取上下文  类组件也可以

function A(props) {


    return <div>
        <cText.Consumer>
            {(value)=><span>{value.a}</span>}
        </cText.Consumer>

       <ChildB />
    </div>

}


class ChildB extends Component {
    static contextType=cText

    render() {
        return (
            <div>
                {this.context.a}
                {this.context.b}
                <button onClick={()=>{
                    this.context.changeA(this.context.a+2)
                }}>子组件+2</button>

            </div>
        );
    }
}



class Index extends Component {
    state={
        a:1,
        b:'asd',
        changeA:(newa)=>{
            this.setState({
                a:this.state.a+2,
            })

        }
    }

    render() {
        return (
            <cText.Provider value={this.state}>
                <div>
                    <A></A>
                    <button onClick={()=>{
                        this.setState({
                            a:this.state.a+1,
                        })
                    }}>按钮a+1</button>
                </div>
            </cText.Provider>

        );
    }
}

export default Index;
