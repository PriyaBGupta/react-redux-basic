import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreator from '../../store/action/action';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr></hr>
                {/* {this.props.storedResults} */}
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>

                    {this.props.storedResults.map(strRes => (<li onClick={() => this.props.onDeleteResult(strRes.id)} key={strRes.id}>{strRes.value}</li>))}

                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}
// if you are using only reducer and not combination of it then use following code
// const mapStateToProps = state =>{
//     return{
//         ctr:state.counter,
//         storedResults:state.results
//     }
// }
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreator.increment()),
        onDecrementCounter: () => dispatch(actionCreator.decrement()),
        onAddCounter: () => dispatch(actionCreator.add(5)),
        onSubtractCounter: () => dispatch(actionCreator.substract(5)),
        onStoreResult: (result) => dispatch(actionCreator.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreator.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);