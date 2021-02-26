var app = {
    title: "Indecision App",
    subtitle: "My first react site hahah",
    options: [],
}
const onFormSubmit = (e) => {
    e.preventDefault(); //stops full page refresh
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
    }
    renderIndecisionApp();
};

const reset = () => {
    app.options = [];
    renderIndecisionApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    
    alert(option);
    console.log(randomNum);

};

var appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
    var template = (
        <div>
            <p>{app.title}</p>
            {app.subtitle && <p>{app.subtitle}</p> }
            <p>Jojo</p>
            <p>{(app.options && app.options.length > 0) ? `Here are your options ${app.options}`: "No options"}</p>
            <p>{app.options.length}</p>
            <button onClick={onMakeDecision}>What should I do?</button>
            <ol>
                {app.options && app.options.map((x, i) => {return <li key={i}>{x}</li>})}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();