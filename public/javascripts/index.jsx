//var React = require('react');
//var ReactDOM = require('react-dom');
const propsSocials = [
  {   img: "../../images/zen.svg",
      href: "#"
  },

  {
      img: "../../images/inst.svg",
      href: "#"
  },

  {
      img: "../../images/fb.svg",
      href: "#"
  },
  {
    img: "../../images/whatsup.svg",
    href: "#"
  },
  {
    img: "../../images/yt.svg",
    href:"#"
  }
  ]

const menuItems = [
  {
    link: "#header",
    item: "Главная"
  },
  {
    link: "#consultation",
    item: "Консультации"
  },
  {
    link: "#about",
    item: "Обо мне"
  },
  {
    link: "#workshops",
    item: "Мастер-классы"
  },
  {
    link: "#feedbacks",
    item: "Отзывы"
  },

  {
    link: "#contacts",
    item: "Контакты"
  }
]



class Social extends React.Component {
  render() {
    return (
      <div className="social-icons" style={{display: this.props.navBarStyle, opacity: "1"}}> 
      {                    
                   this.props.socials.map(function(item) {
                      return <a href={item.href}><img src={item.img}/></a>
                })                  
      }
      </div>
    );
  }
}

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
    //this.state = {navBarBlock: false };
    this.state = {navBarStyle: "none", height: "35px"};
  }

  showMenu() {

      let style = this.state.navBarStyle === "none" ? "block" : "none";
      this.setState({
        navBarStyle: style
      });
      if (this.state.navBarStyle === "block") {
        this.setState({
          height: "35px"
        });
      }
      else {
        this.setState({
          height: "500px"
        });
      }
  }

  render() {
    return (
    <section className="menu" style={{ height: this.state.height}}>
    <div className="wrapper">
    <div className="menu_btn" onClick={this.showMenu}></div>
         <ul className="nav-bar" style = { {display: this.state.navBarStyle, opacity: "1"}}>
           {
             this.props.itemsMenu.map(function(items) {
                 return  <li><a href={items.link}>{items.item}</a></li>
             })
           }
         </ul>  
          <Social socials={propsSocials} navBarStyle={this.state.navBarStyle}/>
     </div>
   </section>
    );
  }
}

class Consultation extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {classActive1: "active", classActive2: "", classActive3:""};
    
    /*
    this.state = {
      content1: "«Я не знаю, как нормально общаться с родителями, они меня достали.» \n «Я себе не нравлюсь, все просто ужасно!» \n «Меня никто не понимает в классе, у меня никогда не было нормальных друзей.» \n «Я не знаю, чем хочу заниматься в будущем, кем стать.» \n и другие многочисленные вопросы.",
      content2: "«Я уже не знаю, как справляться с этим характером, одна грубость в ответ» \n «Что делать с этой учебой? Очередные тройки и полная безответственность» \n «Я не понимаю, как могу помочь сыну/дочери выбрать профессию.  У него/нее нет особенно выраженных интересов» \n и другие многочисленные вопросы",
      content3: "«Я совершенно запутался/лась в своей жизни. Очередной одинаковый день. Не знаю, что мне делать» \n «Я давно хочу попробовать себя в самостоятельном бизнесе, но боюсь уходить с работы» \n «Кажется мне грозит увольнение, я постоянно живу на грани стресса» \n «Я не могу найти свое призвание, то дело, которое будет приносить и удовольствие и деньги» \n «Я себе не нравлюсь. У меня все не как у людей» \n и другие многочисленные вопросы по теме личностной и профессиональной самореализации"
  };
  */
 this.state = {
   content1: "1",
   content2: "2",
   content3: "3"
 };
  
    this.state = {fieldContent: "«Я не знаю, как нормально общаться с родителями, они меня достали.» <br/> «Я себе не нравлюсь, все просто ужасно!» <br/> «Меня никто не понимает в классе, у меня никогда не было нормальных друзей.» <br/> «Я не знаю, чем хочу заниматься в будущем, кем стать.» <br/> и другие многочисленные вопросы." };
    this.press = this.press.bind(this);

  }

  componentWillMount() {
    this.setState({
      classActive1: "active"
    });
  }

  press(e) {

    if (e.target.id == "consul-1") {
      this.setState({
        classActive1: "active",
        classActive2: "",
        classActive3: "",
        fieldContent: "«Я не знаю, как нормально общаться с родителями, они меня достали.» <br/> «Я себе не нравлюсь, все просто ужасно!» <br/> «Меня никто не понимает в классе, у меня никогда не было нормальных друзей.» <br/> «Я не знаю, чем хочу заниматься в будущем, кем стать.» <br/> и другие многочисленные вопросы."

       });
    } 

    else if (e.target.id == "consul-2") {
      this.setState({
        classActive1: "",
        classActive2: "active",
        classActive3: "",
        fieldContent: "«Я уже не знаю, как справляться с этим характером, одна грубость в ответ» <br/> «Что делать с этой учебой? Очередные тройки и полная безответственность» <br/> «Я не понимаю, как могу помочь сыну/дочери выбрать профессию.  У него/нее нет особенно выраженных интересов» <br/> и другие многочисленные вопросы"
       });
    }

    else if (e.target.id == "consul-3") {
      this.setState({
        classActive1: "",
        classActive2: "",
        classActive3: "active",
        fieldContent: "«Я совершенно запутался/лась в своей жизни. Очередной одинаковый день. Не знаю, что мне делать» <br/> «Я давно хочу попробовать себя в самостоятельном бизнесе, но боюсь уходить с работы» <br/> «Кажется мне грозит увольнение, я постоянно живу на грани стресса» <br/> «Я не могу найти свое призвание, то дело, которое будет приносить и удовольствие и деньги» <br/> «Я себе не нравлюсь. У меня все не как у людей» <br/> и другие многочисленные вопросы по теме личностной и профессиональной самореализации"
       });
    }

  }  

  render() {
    return (
    <div>  
      <div className="header">
      <div className="wrapper">
          <h2>
              Консультации
          </h2>
      </div>

        <nav>
          <ul>
            <div className="wrapper">
              <li className={this.state.classActive1} onClick={this.press.bind(this)} id='consul-1'>Подросткам</li>
              <li className={this.state.classActive2} onClick={this.press.bind(this)} id='consul-2'>Родителям</li>
              <li className={this.state.classActive3} onClick={this.press.bind(this)} id='consul-3'>Взрослым</li>
            </div>
          </ul>   
        </nav>
      </div>

      <div class="wrapper">
       <div class="body">
        <h6>Ко мне обращаются, если думают:</h6>
          <p>        
      
              {window.HTMLReactParser(this.state.fieldContent)}
              
          </p>
      </div>
    </div>
  </div>    

      );

  }

}

class ContentConsultations extends React.Component {

  render() {
    return <div>kek</div>
  }
}


//menu
ReactDOM.render(<Menu itemsMenu={menuItems}/>, document.getElementById("menu"));
ReactDOM.render(<Consultation/>, document.getElementById("consultationnav"))

/*
  ReactDOM.render(<Hello data={propsValues}/>,
    document.getElementById("app")
  ); 
*/




