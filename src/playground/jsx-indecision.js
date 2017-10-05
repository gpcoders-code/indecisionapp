console.log('app.js is ruuning');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const submitForm = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderArray();
    }
}

const removeAll = () => {
    app.options = [];
    renderArray()
}

const makeDesicion = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
};

const renderArray = () => {
    const template = (
        <div>
            <h1>{ app.title ? app.title : 'No Title Found' }</h1>
            { app.subtitle && <p>{app.subtitle}</p> }
            <p>{app.options.length > 0 ? 'Here are your options' : 'No option found'}</p>
            <button disabled={app.options.length == 0} onClick={makeDesicion}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.options.map((item, index) => <li key={index}>{item}</li> )}
            </ol>
            <form onSubmit={submitForm}>
                <input type="text" name="option"/>
                <button type="submit">Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, document.querySelector("#root"));
}
renderArray()





