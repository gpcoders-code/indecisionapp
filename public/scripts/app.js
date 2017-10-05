"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GpCodersApp = function (_React$Component) {
    _inherits(GpCodersApp, _React$Component);

    function GpCodersApp() {
        _classCallCheck(this, GpCodersApp);

        return _possibleConstructorReturn(this, (GpCodersApp.__proto__ || Object.getPrototypeOf(GpCodersApp)).apply(this, arguments));
    }

    _createClass(GpCodersApp, [{
        key: "render",
        value: function render() {
            var title = "GpCoders App";
            var subtitle = "Put your life in the hands of a computer";
            var options = ["Thing One", "Thing Two", "Thing Three"];
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, null),
                React.createElement(OptionComponent, { options: options }),
                React.createElement(AddOptions, null)
            );
        }
    }]);

    return GpCodersApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            console.log(this.props);
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "handlePick",
        value: function handlePick() {
            alert('okay');
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.handlePick },
                    "What should i do ?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var OptionComponent = function (_React$Component4) {
    _inherits(OptionComponent, _React$Component4);

    function OptionComponent() {
        _classCallCheck(this, OptionComponent);

        return _possibleConstructorReturn(this, (OptionComponent.__proto__ || Object.getPrototypeOf(OptionComponent)).apply(this, arguments));
    }

    _createClass(OptionComponent, [{
        key: "removeAll",
        value: function removeAll() {
            alert('removed');
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.removeAll },
                    "Remove All"
                ),
                this.props.options.map(function (option, index) {
                    return React.createElement(Option, { key: index, optionText: option });
                })
            );
        }
    }]);

    return OptionComponent;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    this.props.optionText,
                    " "
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOptions = function (_React$Component6) {
    _inherits(AddOptions, _React$Component6);

    function AddOptions() {
        _classCallCheck(this, AddOptions);

        return _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).apply(this, arguments));
    }

    _createClass(AddOptions, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement("input", { type: "text" }),
                React.createElement(
                    "button",
                    null,
                    "Add New"
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(GpCodersApp, null), document.getElementById('root'));
