class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'I love my milo boy';
        const options = [1,2,3];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
                <p>This is from Header</p>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handle pickk');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        alert("remove");
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {(this.props.options.length && <p>{this.props.options.length}</p>)}
                {this.props.options.map((x,y) => <Option option={x} key={y}/>)}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {(this.props.option && <p>{this.props.option}</p>)}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handAddOption(e) {
        e.preventDefault();
        const val = e.target.elements.inputArea.value.trim();
        alert(val);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handAddOption}>
                    <input type="text" name="inputArea"/>
                    <button>AddOption</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));