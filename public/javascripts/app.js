"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//var React = require('react');
//var ReactDOM = require('react-dom');
var propsValues = {
  title: "Lists",
  items: ["HTC", "iPhone", "Samsung"]
};

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        null,
        this.props.name
      );
    }
  }]);

  return Item;
}(React.Component);

var Hello = function (_React$Component2) {
  _inherits(Hello, _React$Component2);

  function Hello(props) {
    _classCallCheck(this, Hello);

    //this.state = {class: "off", label:"Нажми"};
    //this.setState({welcome: "okay"})
    //this.press1 = this.press1.bind(this);
    var _this2 = _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this, props));

    _this2.state = { items: _this2.props.data.items };
    _this2.filterList = _this2.filterList.bind(_this2);

    return _this2;
  }

  _createClass(Hello, [{
    key: "press1",
    value: function press1(e) {
      console.log(e);
      var className = this.state.class === "off" ? "on" : "off";
      this.setState({ class: className });
    }
  }, {
    key: "filterList",
    value: function filterList() {
      var filteredList = this.props.data.items.filter(function (item) {
        return item.tiLowerCase().search(e.target.value.toLowerCase()) != -1;
      });
      this.setState({ items: filteredList });
    }
  }, {
    key: "render",
    value: function render() {
      //return  <div> <h2>Current time: {new Date().toLocaleTimeString()} {this.props.kek} {this.state.welcome}</h2> </div>;
      //return <button onClick={this.press1} className={this.state.class}>{this.state.label}</button>
      return React.createElement(
        "ul",
        null,
        this.props.data.items.map(function (item) {
          return React.createElement(
            "li",
            null,
            item
          );
        })
      );
    }
  }]);

  return Hello;
}(React.Component);

/*
  ReactDOM.render(<Hello data={propsValues}/>,
    document.getElementById("app")
  );

*/
