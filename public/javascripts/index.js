"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import React from '../../node_modules/umd/react.development.js';
//import ReactDOM from '../../node_modules/umd/react-dom.development.js';

//const { window } = window;
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
    //console.log(this.props.isMobile());
    _this2.state = {
      navBarStyle: "none",
      height: "35px",
      heightSocials: "0px",
      heightNavBar: "0px",
      bgIcon: "../images/menu.svg"
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
          heightNavBar: "0",
          bgIcon: "../images/menu.svg"
        });
      } else {
        this.setState({
          height: "500px",
          heightSocials: "50px",
          heightNavBar: "380px",
          bgIcon: "../images/arrow.svg"
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
          React.createElement("div", { className: "menu_btn", onClick: this.showMenu, style: { backgroundImage: "url(" + this.state.bgIcon + ")" } }),
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

var MenuDesktop = function (_React$Component3) {
  _inherits(MenuDesktop, _React$Component3);

  function MenuDesktop() {
    _classCallCheck(this, MenuDesktop);

    return _possibleConstructorReturn(this, (MenuDesktop.__proto__ || Object.getPrototypeOf(MenuDesktop)).apply(this, arguments));
  }

  _createClass(MenuDesktop, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "section",
          { "class": "menu", id: "menu" },
          React.createElement(
            "div",
            { "class": "wrapper" },
            React.createElement(
              "ul",
              { "class": "nav-bar" },
              React.createElement(
                "li",
                { "class": "active" },
                React.createElement(
                  "a",
                  { href: "#header" },
                  "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#consultation" },
                  "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#about" },
                  "\u041E\u0431\u043E \u043C\u043D\u0435"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#workshops" },
                  "\u041C\u0430\u0441\u0442\u0435\u0440-\u043A\u043B\u0430\u0441\u0441\u044B"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#feedbacks" },
                  "\u041E\u0442\u0437\u044B\u0432\u044B"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#contacts" },
                  "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
                )
              )
            ),
            React.createElement(Social, { socials: propsSocials, navBarStyle: "40px" })
          )
        )
      );
    }
  }]);

  return MenuDesktop;
}(React.Component);

var Consultation = function (_React$Component4) {
  _inherits(Consultation, _React$Component4);

  function Consultation(props) {
    _classCallCheck(this, Consultation);

    var _this4 = _possibleConstructorReturn(this, (Consultation.__proto__ || Object.getPrototypeOf(Consultation)).call(this, props));

    _this4.state = { classActive1: "active",
      classActive2: "",
      classActive3: ""
    };

    _this4.state = {
      displayPopup: "none",
      bottomPopup: "-700px"

      /*
      this.state = {
        content1: "«Я не знаю, как нормально общаться с родителями, они меня достали.» \n «Я себе не нравлюсь, все просто ужасно!» \n «Меня никто не понимает в классе, у меня никогда не было нормальных друзей.» \n «Я не знаю, чем хочу заниматься в будущем, кем стать.» \n и другие многочисленные вопросы.",
        content2: "«Я уже не знаю, как справляться с этим характером, одна грубость в ответ» \n «Что делать с этой учебой? Очередные тройки и полная безответственность» \n «Я не понимаю, как могу помочь сыну/дочери выбрать профессию.  У него/нее нет особенно выраженных интересов» \n и другие многочисленные вопросы",
        content3: "«Я совершенно запутался/лась в своей жизни. Очередной одинаковый день. Не знаю, что мне делать» \n «Я давно хочу попробовать себя в самостоятельном бизнесе, но боюсь уходить с работы» \n «Кажется мне грозит увольнение, я постоянно живу на грани стресса» \n «Я не могу найти свое призвание, то дело, которое будет приносить и удовольствие и деньги» \n «Я себе не нравлюсь. У меня все не как у людей» \n и другие многочисленные вопросы по теме личностной и профессиональной самореализации"
      };
      */

    };_this4.state = { fieldContent: "«Я не знаю, как нормально общаться с родителями, они меня достали.» <br/> «Я себе не нравлюсь, все просто ужасно!» <br/> «Меня никто не понимает в классе, у меня никогда не было нормальных друзей.» <br/> «Я не знаю, чем хочу заниматься в будущем, кем стать.» <br/> и другие многочисленные вопросы." };
    _this4.press = _this4.press.bind(_this4);
    _this4.openPopup = _this4.openPopup.bind(_this4);
    _this4.myRef = React.createRef().current;
    return _this4;
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
    key: "openPopup",
    value: function openPopup(e) {
      //ReactDOM.render(<Popup  display="flex" bottom="0"/>, document.getElementById("popup"));

      this.setState({
        displayPopup: "flex",
        bottomPopup: "0"
      });

      ReactDOM.render(React.createElement(Popup, { display: "flex", bottom: "0" }), document.getElementById("popup"));
      document.querySelector('body').style.overflow = "hidden";
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
        ),
        React.createElement(
          "div",
          { "class": "wrapper" },
          React.createElement(
            "button",
            { onClick: this.openPopup },
            "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u0438\u0435\u043C"
          )
        )
      );
    }
  }]);

  return Consultation;
}(React.Component);

var Feedback = function (_React$Component5) {
  _inherits(Feedback, _React$Component5);

  function Feedback() {
    _classCallCheck(this, Feedback);

    return _possibleConstructorReturn(this, (Feedback.__proto__ || Object.getPrototypeOf(Feedback)).apply(this, arguments));
  }

  _createClass(Feedback, [{
    key: "render",
    value: function render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          "\u041E\u0442\u0437\u044B\u0432\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432"
        ),
        React.createElement(
          Slider,
          settings,
          React.createElement(
            "div",
            null,
            React.createElement(
              "h3",
              null,
              "1"
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "h3",
              null,
              "2"
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "h3",
              null,
              "3"
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "h3",
              null,
              "4"
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "h3",
              null,
              "5"
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "h3",
              null,
              "6"
            )
          )
        )
      );
    }
  }]);

  return Feedback;
}(React.Component);

var Popup = function (_React$Component6) {
  _inherits(Popup, _React$Component6);

  function Popup(props) {
    _classCallCheck(this, Popup);

    var _this6 = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

    _this6.ClosePopup = _this6.ClosePopup.bind(_this6);
    _this6.state = { display: "none", bottom: "0" };
    _this6.state = {
      classActive1: "active",
      classActive2: "",
      positionForm1: "150%",
      positionForm2: "0"
    };

    _this6.press = _this6.press.bind(_this6);
    console.log("dfg");

    /*
    this.setState(function(prevState, props) {
      return {
      display: props.display,
      bottom: props.bottom
      };
    });
    */

    return _this6;
  }

  _createClass(Popup, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        display: this.props.display,
        bottom: this.props.bottom
      });
    }
  }, {
    key: "ClosePopup",
    value: function ClosePopup(e) {
      this.setState({
        display: "none",
        bottom: "-700px"
      });
      ReactDOM.unmountComponentAtNode(document.getElementById("popup"));
      document.querySelector('body').style.overflow = "scroll";
    }
  }, {
    key: "press",
    value: function press(e) {
      if (e.target.id === "backcall") {
        this.setState({
          classActive1: "active",
          classActive2: "",
          positionForm1: "180%",
          positionForm2: "0"
        });
      } else if (e.target.id === "emailsend") {
        this.setState({
          classActive1: "",
          classActive2: "active",
          positionForm1: "0",
          positionForm2: "-180%"
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
          { className: "overlay-popup", style: { display: this.state.display } },
          React.createElement("div", { "class": "btnBackClose", onClick: this.ClosePopup }),
          React.createElement(
            "section",
            { className: "popup", style: { bottom: this.state.bottom } },
            React.createElement("div", { className: "btn_close", onClick: this.ClosePopup.bind(this) }),
            React.createElement(
              "div",
              { className: "top-bar" },
              React.createElement(
                "div",
                { className: "wrapper" },
                React.createElement(
                  "ul",
                  null,
                  React.createElement(
                    "li",
                    { className: this.state.classActive1, onClick: this.press.bind(this), id: "backcall" },
                    "\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A"
                  ),
                  React.createElement(
                    "li",
                    { className: this.state.classActive2, onClick: this.press.bind(this), id: "emailsend" },
                    "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430 \u043F\u043E\u0447\u0442\u0443"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "form-contain" },
              React.createElement(
                "div",
                { className: "wrapper" },
                React.createElement(
                  "p",
                  null,
                  "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0438 \u044F \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u044E \u0412\u0430\u043C \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0441\u043A\u043E\u0440\u0435\u0435. \u0418\u043B\u0438 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 ",
                  React.createElement(
                    "a",
                    { href: "tel:+79670978656" },
                    "\u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u043C\u043D\u0435"
                  ),
                  " \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E."
                ),
                React.createElement(
                  "form",
                  { method: "POST", action: "" },
                  React.createElement(
                    "div",
                    { className: "callback", style: { left: this.state.positionForm2 } },
                    React.createElement("input", { type: "text", placeholder: "\u0418\u043C\u044F" }),
                    React.createElement("input", { type: "tel", placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430" })
                  ),
                  React.createElement(
                    "div",
                    { "class": "emailsend", style: { left: this.state.positionForm1 } },
                    React.createElement("input", { type: "text", placeholder: "\u0418\u043C\u044F" }),
                    React.createElement("input", { type: "email", placeholder: "Email" })
                  ),
                  React.createElement("input", { type: "submit", value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443" })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Popup;
}(React.Component);

if (window.innerWidth <= 920) {

  ReactDOM.render(React.createElement(Menu, { itemsMenu: menuItems }), document.getElementById("menu"));
} else {
  ReactDOM.render(React.createElement(MenuDesktop, null), document.getElementById("menu"));
}

//menu
window.addEventListener('resize', function () {
  if (window.innerWidth <= 920) {
    ReactDOM.render(React.createElement(Menu, { itemsMenu: menuItems }), document.getElementById("menu"));
  } else {
    ReactDOM.render(React.createElement(MenuDesktop, null), document.getElementById("menu"));
  }
});
ReactDOM.render(React.createElement(Consultation, null), document.getElementById("consultationnav"));
//ReactDOM.render(<Popup  display="none" bottom="-700px"/>, document.getElementById("popup"));
//ReactDOM.render(<Feedback/>, document.getElementById("feedback"));

/*
  ReactDOM.render(<Hello data={propsValues}/>,
    document.getElementById("app")
  ); 
*/
