class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
            name: 'Kirs'
        }
    }

    handleAddOne() {
        //this.state.count++;
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            }
        });
        console.log("+1")
    }

    handleMinusOne() {
        //this.state.count--;
        this.setState((prevState) => {
            return {
                count: prevState.count-1
            }
        });
        console.log("-1")
    }

    handleReset() {
        //this.state.count = 0;

        this.setState(() => {
            return {
                count: 0
            }
        });

        // this.setState({
        //     count: 0
        // });

        // this.setState({
        //     count: this.state.count + 1
        // });
        // console.log("0")

    }

    render() {
        return (
            <div>
                {this.state.name}
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));

// var info = {
//     name : "Genshin Impact",
//     desc : "I want a C6 Ningguang. Gacha Lords please be kind.",
//     longdesc : "Currently at C3 Ningguang. About to get C4.",
//     num: 19,
// }

// function getLongDesc(buffer) {
//     if (buffer) 
//         return <p>{buffer}</p>;
//     else
//         return "Unknown"
// }

// var templatetwo = (
//     <div>
//         <p>{info.name ? info.name.toUpperCase() : "Anonymous"}</p>
//         {(info.num && info.num >= 18) && <p>{info.num}</p>}
//         {getLongDesc(info.longdesc)}

//     </div>
// );

// let count = 0;
// const addOne = () => {
//     console.log('addOne');
//     count++;
//     renderCounterApp();
// };

// const decreaseOne = () => {
//     console.log('decOne');
//     count--;
//     renderCounterApp();
// };

// const resetToZero = () => {
//     count = 0;
//     console.log('reset');
//     renderCounterApp();
// };

// var appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     var templatethree = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="my-id" className="button" onClick={addOne}>Add One</button>
//             <button className="button" onClick={decreaseOne}>Minus One</button>
//             <button className="button" onClick={resetToZero}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templatethree, appRoot);
// }

// renderCounterApp();