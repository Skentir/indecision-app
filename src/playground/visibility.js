let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility &&  (
                <div> can i have one order of milo boy 🥺👉👈</div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();