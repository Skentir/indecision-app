
var info = {
    name : "Genshin Impact",
    desc : "I want a C6 Ningguang. Gacha Lords please be kind.",
    longdesc : "Currently at C3 Ningguang. About to get C4.",
    num: 19,
}

function getLongDesc(buffer) {
    if (buffer) 
        return <p>{buffer}</p>;
    else
        return "Unknown"
}

var templatetwo = (
    <div>
        <p>{info.name ? info.name.toUpperCase() : "Anonymous"}</p>
        {(info.num && info.num >= 18) && <p>{info.num}</p>}
        {getLongDesc(info.longdesc)}

    </div>
);

let count = 0;
const addOne = () => {
    console.log('addOne');
    count++;
    renderCounterApp();
};

const decreaseOne = () => {
    console.log('decOne');
    count--;
    renderCounterApp();
};

const resetToZero = () => {
    count = 0;
    console.log('reset');
    renderCounterApp();
};

var appRoot = document.getElementById('app');

const renderCounterApp = () => {
    var templatethree = (
        <div>
            <h1>Count: {count}</h1>
            <button id="my-id" className="button" onClick={addOne}>Add One</button>
            <button className="button" onClick={decreaseOne}>Minus One</button>
            <button className="button" onClick={resetToZero}>Reset</button>
        </div>
    );
    ReactDOM.render(templatethree, appRoot);
}

renderCounterApp();