import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
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
  ];

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
];



class Social extends React.Component {
  
  render() {
    return (
      <div className="social-icons" style={{height: this.props.heightSocials, opacity: "1"}}> 
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
    //console.log(this.props.isMobile());
    this.state = {
      navBarStyle: "none", 
      height: "35px", 
      heightSocials: "0px",
      heightNavBar: "0px",
      bgIcon: "../images/menu.svg"
    };
  }

  showMenu() {

      let style = this.state.navBarStyle === "none" ? "block" : "none";
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
      }
      else {
        this.setState({
          height: "500px",
          heightSocials: "50px",
          heightNavBar: "380px",
          bgIcon: "../images/arrow.svg"
        });
      }  
  }

  render() {
    return (
    <section className="menu" style={{ height: this.state.height}}>
    <div className="wrapper">
    <div className="menu_btn" onClick={this.showMenu} style={{backgroundImage: `url(${this.state.bgIcon})`}}></div>
         <ul className="nav-bar" style = { {height: this.state.heightNavBar, opacity: "1"}}>
           {
             this.props.itemsMenu.map(function(items) {
                 return  <li><a href={items.link}>{items.item}</a></li>
             })
           }
         </ul>  
          <Social socials={propsSocials} navBarStyle={this.state.heightSocials}/>
     </div>
   </section>
    );
  }
}

class MenuDesktop extends React.Component {
  render() {
    return (
      <div>
        <section className="menu" id="menu">
 <div className="wrapper">
      <ul className="nav-bar">
        <li className="active"><a href="#header">Главная</a></li>
        <li><a href="#consultation">Консультации</a></li>
        <li><a href="#about">Обо мне</a></li>
        <li><a href="#workshops">Мастер-классы</a></li>
        <li><a href="#feedbacks">Отзывы</a></li>
        <li><a href="#contacts">Контакты</a></li>
      </ul>  
      <Social socials={propsSocials} navBarStyle={"40px"}/>

  </div>
</section>
      </div>
    )
  }
}

class Consultation extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {classActive1: "active", 
                  classActive2: "", 
                  classActive3:""
  };

  this.state = {
    displayPopup: "none",
    bottomPopup: "-700px"
  }
    
    /*
    this.state = {
      content1: "«Я не знаю, как нормально общаться с родителями, они меня достали.» \n «Я себе не нравлюсь, все просто ужасно!» \n «Меня никто не понимает в классе, у меня никогда не было нормальных друзей.» \n «Я не знаю, чем хочу заниматься в будущем, кем стать.» \n и другие многочисленные вопросы.",
      content2: "«Я уже не знаю, как справляться с этим характером, одна грубость в ответ» \n «Что делать с этой учебой? Очередные тройки и полная безответственность» \n «Я не понимаю, как могу помочь сыну/дочери выбрать профессию.  У него/нее нет особенно выраженных интересов» \n и другие многочисленные вопросы",
      content3: "«Я совершенно запутался/лась в своей жизни. Очередной одинаковый день. Не знаю, что мне делать» \n «Я давно хочу попробовать себя в самостоятельном бизнесе, но боюсь уходить с работы» \n «Кажется мне грозит увольнение, я постоянно живу на грани стресса» \n «Я не могу найти свое призвание, то дело, которое будет приносить и удовольствие и деньги» \n «Я себе не нравлюсь. У меня все не как у людей» \n и другие многочисленные вопросы по теме личностной и профессиональной самореализации"
  };
  */
 
  
    this.state = {fieldContent: "«Я не знаю, как нормально общаться с родителями, они меня достали.» <br/> «Я себе не нравлюсь, все просто ужасно!» <br/> «Меня никто не понимает в классе, у меня никогда не было нормальных друзей.» <br/> «Я не знаю, чем хочу заниматься в будущем, кем стать.» <br/> и другие многочисленные вопросы." };
    this.press = this.press.bind(this);
    this.openPopup = this.openPopup.bind(this);
    this.myRef = React.createRef().current;
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

  openPopup(e) {
    //ReactDOM.render(<Popup  display="flex" bottom="0"/>, document.getElementById("popup"));
  
      this.setState({
        displayPopup: "flex",
        bottomPopup: "0"
      });
        
    ReactDOM.render(<Popup  display="flex" bottom="0" typePop="consultation" second_popup={false}/>, document.getElementById("popup"));
    document.querySelector('body').style.overflow = "hidden";


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

      <div className="wrapper">
       <div className="body">
        <h6>Ко мне обращаются, если думают:</h6>
          <p>        
      
              {window.HTMLReactParser(this.state.fieldContent)}
              
          </p>
      </div>
    </div>
    <div className="wrapper">
        <button onClick={this.openPopup}>Записаться на прием</button>
    </div>
  </div>    

      );

  }

}

var images = 
  [
    {
      src: '../images/feedback/78320317_2687143148018400_7610244365574733824_n.jpg',
      title: 'image title',
      description: 'image description'
    },
    {
      src: '../images/feedback/69174188_2501528919913158_5178687620657446912_o.jpg',
      title: 'image title',
      description: 'image description'
    },
    {
      src: '../images/feedback/73245051_111877630240012_7098482635546034176_o.jpg',
      title: 'image title',
      description: 'image description'
    }
  ]
 
class Workshops extends React.Component {


  constructor(props) {
    super(props);
    this.openPopup = this.openPopup.bind(this);
  }


  openPopup() {
    ReactDOM.render(<Popup  display="flex" bottom="0" typePop="workshops" second_popup={false}/>, document.getElementById("popup"));
    document.querySelector('body').style.overflow = "hidden";


  }

  render() {
    return (
      <div>
        <div className="wrapper">
            <h2>
              Мастер-классы, тренинги, семинары
            </h2>
            <AliceCarousel className="aliceCarousel-custome"
            showSlideInfo={true}
            preventEventOnTouchMove={true}
            mouseTrackingEnabled={true}
            onSlideChanged={console.debug}
            responsive={ {
              0: { items: 1 },
              1150: { items: 2 }
            }}
            infinite={false}
            stagePadding={{ 
              paddingLeft: 0,
              paddingRight: 0,
            }}
        >
          <div className="item first-item" onClick={this.openPopup} style={{backgroundImage: "url(../images/workshops/mama.jpeg)"}}>   
            <h2>Профессия — современная мама</h2>     
          </div>

          <div className="item" style={{backgroundImage: "url(../images/workshops/grow.jpeg)"}}>
            <h2>Развитие нестандартного мышления</h2>        
          </div>

          <div className="item" style={{backgroundImage: "url(../images/workshops/doit.jpeg)"}}>
          </div>

          <div className="item" style={{backgroundImage: "url(../images/workshops/rooms.jpeg)"}}>
          </div>
        </AliceCarousel>
          </div>
      </div>
    );
  }
}


class Feedback extends React.Component {

  constructor(props) {
    super(props);
    
    this.openPhoto = this.openPhoto.bind(this);

  }


  openPhoto(photo, e) {
    //alert(param);
  }

  render() {
   // const { mouseTrackingEnabled, preventEventOnTouchMove } = this.state;

    return (
    <div>   
      <div className="wrapper">  
        <h2>Отзывы клиентов</h2>
          <AwesomeSlider>
                <div>
                  <div className="body-comment">
                      Я себя знаю! И вас всех знаю
                  </div>
                  <div className="about-comment">Марина, 31 год</div>
                </div>
                <div>
                  <div className="body-comment">
                      Я себя знаю! И вас всех знаю
                  </div>
                  <div className="about-comment">Марина, 31 год</div>
                </div>
                <div>
                  <div className="body-comment">
                        Я себя знаю! И вас всех знаю
                  </div>
                  <div className="about-comment">Марина, 31 год</div>
                </div>
                <div>
                  <div className="body-comment">
                        Я себя знаю! И вас всех знаю
                    </div>
                    <div className="about-comment">Марина, 31 год</div>
                </div>
          </AwesomeSlider>
        </div>
          <AliceCarousel className="aliceCarousel-custome"
            showSlideInfo={true}
            preventEventOnTouchMove={true}
            mouseTrackingEnabled={true}
            onSlideChanged={console.debug}
            responsive={ {
              0: { items: 1 },
              600: { items: 2 },
              960: { items: 3 },
            }}
            infinite={false}
            stagePadding={{ 
              paddingLeft: 30,
              paddingRight: 30,
            }}
        >
          <div onClick={this.openPhoto.bind(this,"")} className="item" style={{backgroundImage: "url(../images/feedback/78320317_2687143148018400_7610244365574733824_n.jpg)"}}>        
          </div>

          <div className="item" style={{backgroundImage: "url(../images/feedback/69174188_2501528919913158_5178687620657446912_o.jpg)"}}>   
          </div>

          <div className="item" style={{backgroundImage: "url(../images/feedback/73245051_111877630240012_7098482635546034176_o.jpg)"}}>
          </div>

          <div className="item" style={{backgroundImage: "url(../images/feedback/65300497_2394441267288591_7513395477274951680_n.jpg)"}}>
          </div>
          <div className="item" style={{backgroundImage: "url(../images/feedback/65391085_2405317969534254_7259659679989497856_n.jpg)"}}>
          </div>
        </AliceCarousel>
    </div> 
    );
  }
}

class Popup extends React.Component {

  constructor(props) {
    super(props);
    this.ClosePopup = this.ClosePopup.bind(this);
    this.state = {display: "none", bottom: "0"};
    this.state = {
      classActive1: "active",
      classActive2: "",
      positionForm1: "150%",
      positionForm2: "0"
    };
    this.press = this.press.bind(this);
    this.openOrder = this.openOrder.bind(this);   
  }

  componentWillMount() {
    this.setState({
      display: this.props.display,
      bottom: this.props.bottom
    });
  }

  ClosePopup(e) {
    this.setState({
      display: "none",
      bottom: "-700px"
    });

    if (this.props.second_popup) {
      ReactDOM.unmountComponentAtNode(document.getElementById("second_popup"));
    }
    else {
      ReactDOM.unmountComponentAtNode(document.getElementById("popup"));
      document.querySelector('body').style.overflow = "scroll";
    }

  }  

  openOrder() {
    ReactDOM.render(<Popup display="flex" bottom="0" typePop="consultation" second_popup={true}/>, document.getElementById("second_popup"));
  }

  press(e) {
    if(e.target.id === "backcall") {
      this.setState({
        classActive1: "active",
        classActive2: "",
        positionForm1: "180%",
        positionForm2: "0"
      });
      
    }
    else if (e.target.id === "emailsend") {
      this.setState({
        classActive1: "",
        classActive2: "active",
        positionForm1: "0",
        positionForm2: "-180%"
      });
    }
  }

  render() { 
    if (this.props.typePop == "consultation") {
        return (
            <div>
                <div className="overlay-popup" style={{display: this.state.display}}>
                      <div className="btnBackClose" onClick={this.ClosePopup}></div>
                  <section className="popup" style={{bottom: this.state.bottom}}> 
                      <div className="btn_close" onClick={this.ClosePopup.bind(this)}></div>
                      <div className="top-bar">
                        <div className="wrapper">
                          <ul>
                            <li className={this.state.classActive1} onClick={this.press.bind(this)} id="backcall">Обратный звонок</li>
                            <li className={this.state.classActive2} onClick={this.press.bind(this)} id="emailsend">Написать на почту</li>
                          </ul>
                        </div>
                      </div>
                      <div className="form-contain">
                        <div className="wrapper">
                          <p>
                            Оставьте контакты и я перезвоню Вам как можно скорее. 
                            Или Вы можете <a href="tel:+79670978656">позвонить мне</a> самостоятельно.
                          </p>
                          <form method="POST" action="">
                            <div className="callback" style={{left:  this.state.positionForm2}}>
                              <input type="text" placeholder="Имя"/>
                              <input type="tel" placeholder="Номер телефона"/>
                            </div>
                            <div className="emailsend" style={{left: this.state.positionForm1}}>
                              <input type="text" placeholder="Имя"/>
                              <input type="email" placeholder="Email"/>
                            </div>
                            <input type="submit" value="Отправить заявку"/> 
                          </form>            
                        </div>
                      </div>      
                  </section>
                </div>
            </div>
        );
    } else {
     return ( 
      <div className="workshopsPop">
      <div className="overlay-popup" style={{display: this.state.display}}>
            <div className="btnBackClose" onClick={this.ClosePopup}></div>
        <section className="popup" style={{bottom: this.state.bottom}}> 
            <div className="btn_close" onClick={this.ClosePopup.bind(this)}></div>
            <div className="form-contain">
              <div className="wrapper">
               <div className="top"> 
                  <div className="groupP">
                    <p>
                      Взрослая аудитория
                    </p>
                  </div>
                  <div className="time">
                      <p>
                          16 часов
                      </p>
                  </div>
               </div> 
               <div className="frame">
                  <p>
                    И подросток, стоящий на распутье – кем стать, какое направление выбрать для своего будущего, и взрослый, находящийся в ситуации поиска себя на этапе профессионального выгорания или просто поиска другого места работы, - вне зависимости от возраста, человеку свойственно перекладывать серьезные выборы на кого-то другого или затягивать сам процесс. Перед тем, как делать какие-то серьезные шаги, определяющие дальнейшее течение событий жизни, просто необходимо осознанное знание и понимание себя, своих особенностей, своего потенциала в целом. Как можно отправляться в путь, не понимая, какой у вас есть багаж знаний, умений, навыков? Какие именно ваши желания? Какие ваши ложные представления и зависимости целей, а где именно ваше направление, ваш путь развития, ваша уникальность? «По мысли Аристотеля, для того, чтобы жить полной жизнью, необходимо реализовать свое предназначение. Иными словами, чтобы достичь счастья, нужно следовать своей природе»
                    И подросток, стоящий на распутье – кем стать, какое направление выбрать для своего будущего, и взрослый, находящийся в ситуации поиска себя на этапе профессионального выгорания или просто поиска другого места работы, - вне зависимости от возраста, человеку свойственно перекладывать серьезные выборы на кого-то другого или затягивать сам процесс. Перед тем, как делать какие-то серьезные шаги, определяющие дальнейшее течение событий жизни, просто необходимо осознанное знание и понимание себя, своих особенностей, своего потенциала в целом. Как можно отправляться в путь, не понимая, какой у вас есть багаж знаний, умений, навыков? Какие именно ваши желания? Какие ваши ложные представления и зависимости целей, а где именно ваше направление, ваш путь развития, ваша уникальность? «По мысли Аристотеля, для того, чтобы жить полной жизнью, необходимо реализовать свое предназначение. Иными словами, чтобы достичь счастья, нужно следовать своей природе»
                  </p>
               </div>
               <div className="dosh"></div>
               <div className="bottom">
                  <div className="bottom-title">
                      <p>Интерактивный мастер-класс</p>
                      <h2>Профессия современная мама</h2>
                  </div>
                  <button onClick={this.openOrder}>Заказать</button>
               </div>
              </div>
            </div>      
        </section>
      </div>
  </div> );
    }
  }
}



if (window.innerWidth <= 920) {
  
    ReactDOM.render(<Menu itemsMenu={menuItems}/>, document.getElementById("menu"));
  }
  else {
    ReactDOM.render(<MenuDesktop />, document.getElementById("menu"));
  }



//menu
window.addEventListener('resize', function(){
  if (window.innerWidth <= 920) {    
    ReactDOM.render(<Menu itemsMenu={menuItems}/>, document.getElementById("menu"));
  }
  else {
    ReactDOM.render(<MenuDesktop />, document.getElementById("menu"));
  }
});
ReactDOM.render(<Consultation/>, document.getElementById("consultationnav"));
//ReactDOM.render(<Popup  display="none" bottom="-700px"/>, document.getElementById("popup"));
ReactDOM.render(<Feedback/>, document.getElementById("feedback"));
ReactDOM.render(<Workshops />, document.getElementById("workshops"));
/*
  ReactDOM.render(<Hello data={propsValues}/>,
    document.getElementById("app")
  ); 
*/




