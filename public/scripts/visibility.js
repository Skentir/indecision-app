"use strict";

var app = {
    title: "Indecision App",
    subtitle: "My first react site hahah",
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); //stops full page refresh
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
    }
    renderIndecisionApp();
};

var reset = function reset() {
    app.options = [];
    renderIndecisionApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];

    alert(option);
    console.log(randomNum);
};

var appRoot = document.getElementById('app');

var renderIndecisionApp = function renderIndecisionApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            "Jojo"
        ),
        React.createElement(
            "p",
            null,
            app.options && app.options.length > 0 ? "Here are your options " + app.options : "No options"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "ol",
            null,
            app.options && app.options.map(function (x, i) {
                return React.createElement(
                    "li",
                    { key: i },
                    x
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset"
        )
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
