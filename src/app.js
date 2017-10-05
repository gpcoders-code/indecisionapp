class GpCodersApp extends React.Component {
    render() {
        const title = "GpCoders App";
        const subtitle = "Put your life in the hands of a computer";
        const options = ["Thing One", "Thing Two", "Thing Three"]
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <OptionComponent options={options} />
                <AddOptions />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <h1>{ this.props.title }</h1>
                <h2>{ this.props.subtitle }</h2>
            </div>
        )
    }
}

class Action extends React.Component {

    handlePick() {
        alert('okay');
    }

    render() {
        return(
            <div>
                <button onClick={this.handlePick}>What should i do ?</button>
            </div>
        )
    }
}


class OptionComponent extends React.Component {

    removeAll() {
        alert('removed');
    }


    render() {
        return(
            <div>
                <button onClick={this.removeAll}>Remove All</button>
                {
                    this.props.options.map((option, index) => <Option key={index} optionText={option}/>)
                }
            </div>

        )
    }
}

class Option extends React.Component {
    render() {
        return(
            <div>
                { <p>{ this.props.optionText } </p> }
            </div>
        )
    }
}

class AddOptions extends React.Component {
    render() {
        return(
            <div>
                <input type="text"/>
                <button>Add New</button>
            </div>
        )
    }
}


ReactDOM.render(<GpCodersApp />, document.getElementById('root'));