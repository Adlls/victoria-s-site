"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//var React = require('react');
//var ReactDOM = require('react-dom');
var propsSocials = [{ img: "../../images/zen.svg",
  href: "#"
}, {
  img: "../../images/inst.svg",
  href: "#"
}, {
  img: "../../images/fb.svg",
  href: "#"
}, {
  img: "../../images/whatsup.svg",
  href: "#"
}, {
  img: "../../images/yt.svg",
  href: "#"
}];

var menuItems = [{
  link: "#header",
  item: "Главная"
}, {
  link: "#consultation",
  item: "Консультации"
}, {
  link: "#about",
  item: "Обо мне"
}, {
  link: "#workshops",
  item: "Мастер-классы"
}, {
  link: "#feedbacks",
  item: "Отзывы"
}, {
  link: "#contacts",
  item: "Контакты"
}];

var Social = function (_React$Component) {
  _inherits(Social, _React$Component);

  function Social() {
    _classCallCheck(this, Social);

    return _possibleConstructorReturn(this, (Social.__proto__ || Object.getPrototypeOf(Social)).apply(this, arguments));
  }

  _createClass(Social, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "social-icons", style: { height: this.props.heightSocials, opacity: "1" } },
        this.props.socials.map(function (item) {
          return React.createElement(
            "a",
            { href: item.href },
            React.createElement("img", { src: item.img })
          );
        })
      );
    }
  }]);

  return Social;
}(React.Component);

var Menu = function (_React$Component2) {
  _inherits(Menu, _React$Component2);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this2 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this2.showMenu = _this2.showMenu.bind(_this2);
    //this.state = {navBarBlock: false };
    _this2.state = {
      navBarStyle: "none",
      height: "35px",
      heightSocials: "0px",
      heightNavBar: "0px"
    };
    return _this2;
  }

  _createClass(Menu, [{
    key: "showMenu",
    value: function showMenu() {

      var style = this.state.navBarStyle === "none" ? "block" : "none";
      this.setState({
        navBarStyle: style
      });
      if (this.state.navBarStyle === "block") {
        this.setState({
          height: "35px",
          heightSocials: "0px",
          heightNavBar: "0"
        });
      } else {
        this.setState({
          height: "500px",
          heightSocials: "50px",
          heightNavBar: "380px"
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { className: "menu", style: { height: this.state.height } },
        React.createElement(
          "div",
          { className: "wrapper" },
          React.createElement("div", { className: "menu_btn", onClick: this.showMenu }),
          React.createElement(
            "ul",
            { className: "nav-bar", style: { height: this.state.heightNavBar, opacity: "1" } },
            this.props.itemsMenu.map(function (items) {
              return React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: items.link },
                  items.item
                )
              );
            })
          ),
          React.createElement(Social, { socials: propsSocials, navBarStyle: this.state.heightSocials })
        )
      );
    }
  }]);

  return Menu;
}(React.Component);

var Consultation = function (_React$Component3) {
  _inherits(Consultation, _React$Component3);

  function Consultation(props) {
    _classCallCheck(this, Consultation);

    var _this3 = _possibleConstructorReturn(this, (Consultation.__proto__ || Object.getPrototypeOf(Consultation)).call(this, props));

    _this3.state = { classActive1: "active", classActive2: "", classActive3: "" };

    /*
    this.state = {
      content1: "«Я не знаю, как нормально общаться с родителями, они меня достали.» \n «Я себе не нравлюсь, все просто ужасно!» \n «Меня никто не понимает в классе, у меня никогда не было нормальных друзей.» \n «Я не знаю, чем хочу заниматься в будущем, кем стать.» \n и другие многочисленные вопросы.",
      content2: "«Я уже не знаю, как справляться с этим характером, одна грубость в ответ» \n «Что делать с этой учебой? Очередные тройки и полная безответственность» \n «Я не понимаю, как могу помочь сыну/дочери выбрать профессию.  У него/нее нет особенно выраженных интересов» \n и другие многочисленные вопросы",
      content3: "«Я совершенно запутался/лась в своей жизни. Очередной одинаковый день. Не знаю, что мне делать» \n «Я давно хочу попробовать себя в самостоятельном бизнесе, но боюсь уходить с работы» \n «Кажется мне грозит увольнение, я постоянно живу на грани стресса» \n «Я не могу найти свое призвание, то дело, которое будет приносить и удовольствие и деньги» \n «Я себе не нравлюсь. У меня все не как у людей» \n и другие многочисленные вопросы по теме личностной и профессиональной самореализации"
    };
    */
    _this3.state = {
      content1: "1",
      content2: "2",
      content3: "3"
    };

    _this3.state = { fieldContent: "«Я не знаю, как нормально общаться с родителями, они меня достали.» <br/> «Я себе не нравлюсь, все просто ужасно!» <br/> «Меня никто не понимает в классе, у меня никогда не было нормальных друзей.» <br/> «Я не знаю, чем хочу заниматься в будущем, кем стать.» <br/> и другие многочисленные вопросы." };
    _this3.press = _this3.press.bind(_this3);

    return _this3;
  }

  _createClass(Consultation, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        classActive1: "active"
      });
    }
  }, {
    key: "press",
    value: function press(e) {

      if (e.target.id == "consul-1") {
        this.setState({
          classActive1: "active",
          classActive2: "",
          classActive3: "",
          fieldContent: "«Я не знаю, как нормально общаться с родителями, они меня достали.» <br/> «Я себе не нравлюсь, все просто ужасно!» <br/> «Меня никто не понимает в классе, у меня никогда не было нормальных друзей.» <br/> «Я не знаю, чем хочу заниматься в будущем, кем стать.» <br/> и другие многочисленные вопросы."

        });
      } else if (e.target.id == "consul-2") {
        this.setState({
          classActive1: "",
          classActive2: "active",
          classActive3: "",
          fieldContent: "«Я уже не знаю, как справляться с этим характером, одна грубость в ответ» <br/> «Что делать с этой учебой? Очередные тройки и полная безответственность» <br/> «Я не понимаю, как могу помочь сыну/дочери выбрать профессию.  У него/нее нет особенно выраженных интересов» <br/> и другие многочисленные вопросы"
        });
      } else if (e.target.id == "consul-3") {
        this.setState({
          classActive1: "",
          classActive2: "",
          classActive3: "active",
          fieldContent: "«Я совершенно запутался/лась в своей жизни. Очередной одинаковый день. Не знаю, что мне делать» <br/> «Я давно хочу попробовать себя в самостоятельном бизнесе, но боюсь уходить с работы» <br/> «Кажется мне грозит увольнение, я постоянно живу на грани стресса» <br/> «Я не могу найти свое призвание, то дело, которое будет приносить и удовольствие и деньги» <br/> «Я себе не нравлюсь. У меня все не как у людей» <br/> и другие многочисленные вопросы по теме личностной и профессиональной самореализации"
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "header" },
          React.createElement(
            "div",
            { className: "wrapper" },
            React.createElement(
              "h2",
              null,
              "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438"
            )
          ),
          React.createElement(
            "nav",
            null,
            React.createElement(
              "ul",
              null,
              React.createElement(
                "div",
                { className: "wrapper" },
                React.createElement(
                  "li",
                  { className: this.state.classActive1, onClick: this.press.bind(this), id: "consul-1" },
                  "\u041F\u043E\u0434\u0440\u043E\u0441\u0442\u043A\u0430\u043C"
                ),
                React.createElement(
                  "li",
                  { className: this.state.classActive2, onClick: this.press.bind(this), id: "consul-2" },
                  "\u0420\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u043C"
                ),
                React.createElement(
                  "li",
                  { className: this.state.classActive3, onClick: this.press.bind(this), id: "consul-3" },
                  "\u0412\u0437\u0440\u043E\u0441\u043B\u044B\u043C"
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "wrapper" },
          React.createElement(
            "div",
            { "class": "body" },
            React.createElement(
              "h6",
              null,
              "\u041A\u043E \u043C\u043D\u0435 \u043E\u0431\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F, \u0435\u0441\u043B\u0438 \u0434\u0443\u043C\u0430\u044E\u0442:"
            ),
            React.createElement(
              "p",
              null,
              window.HTMLReactParser(this.state.fieldContent)
            )
          )
        )
      );
    }
  }]);

  return Consultation;
}(React.Component);

var ContentConsultations = function (_React$Component4) {
  _inherits(ContentConsultations, _React$Component4);

  function ContentConsultations() {
    _classCallCheck(this, ContentConsultations);

    return _possibleConstructorReturn(this, (ContentConsultations.__proto__ || Object.getPrototypeOf(ContentConsultations)).apply(this, arguments));
  }

  _createClass(ContentConsultations, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "kek"
      );
    }
  }]);

  return ContentConsultations;
}(React.Component);

//menu


ReactDOM.render(React.createElement(Menu, { itemsMenu: menuItems }), document.getElementById("menu"));
ReactDOM.render(React.createElement(Consultation, null), document.getElementById("consultationnav"));

/*
  ReactDOM.render(<Hello data={propsValues}/>,
    document.getElementById("app")
  ); 
*/
