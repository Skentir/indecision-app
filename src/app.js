var app = {
    title: "Indecision App",
    subtitle: "My first react site hahah",
    options: ["one", "two", "three"],
}
var template = (
    <div>
        <p>{app.title}</p>
        <p>{app.subtitle}</p> 
        <p>Jojo</p>
        <p>{(app.options && app.options.length > 0) ? `Here are your options ${app.options}`: "No options"}</p>
    </div>
);

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

var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot);