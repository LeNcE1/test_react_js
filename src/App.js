import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.pos = props.value;
        this.change = props.change;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        this.change(this.pos);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

function TextItem(props) {
    return (
        <div className="menu">
            <ul>
                {numbers.map((number) =>
                    <li key={number}>
                        <p>
                            {props.sost[number]}
                        </p>
                    </li>
                )}
            </ul>
        </div>);
}

function ListItem(props) {
    return <li>
        <Toggle value={props.value} change={props.change}/>
    </li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                          value={number}
                          change={props.change}
                />
            )}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sost: ["OFF", "OFF", "OFF", "OFF", "OFF", "OFF"]
        }
        this.OnOff = this.OnOff.bind(this);
    }

    OnOff(pos) {
        console.log(pos.toString());
        this.state.sost[pos] = (this.state.sost[pos]==="OFF"? "ON":"OFF");
        var newSost = this.state.sost;
        this.setState(
            {
                sost: newSost
            }
        );

    }

    render() {
        return (
            <div>
                <NumberList sost={this.state.sost} numbers={numbers} change={this.OnOff}/>
                <TextItem sost={this.state.sost} numbers={numbers}/>
            </div>
        );
    }
}

export default App;
