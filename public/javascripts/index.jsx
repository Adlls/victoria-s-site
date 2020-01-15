import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import { Link, animateScroll as scroll } from "react-scroll";
import {Circle} from 'react-preloaders';

const propsSocials = [ 
  {   img: "../../images/zen.svg",
      href: "https://zen.yandex.ru/id/5da83370bd639684a11c0aa2"
  },

  { 
      img: "../../images/inst.svg", 
      href: "https://www.instagram.com/victoria.vladimirova_/"
  },  

  { 
      img: "../../images/fb.svg",
      href: "https://www.facebook.com/VisionStudioKM"
  },
  {
    img: "../../images/whatsup.svg",     
    href: "https://wa.me/79778866788"
  },
  {
    img: "../../images/yt.svg",
    href:"https://www.youtube.com/channel/UCxRcAE7DsjJapTuUGUvmLug"
  }
  ];

const menuItems = [
  {
    link: "header",
    item: "Главная"
  },
  {
    link: "consultation",
    item: "Консультации"
  },
  {
    link: "about",
    item: "Обо мне"
  },
  {
    link: "workshops",
    item: "Мастер-классы"
  },
  {
    link: "feedbacks",
    item: "Отзывы"
  },

  {
    link: "contacts",
    item: "Контакты"
  }
];

class Social extends React.Component {
  
  render() {
    return (
      <div className="social-icons" style={{height: this.props.heightSocials}}> 
      {                    
                   this.props.socials.map(function(item) {
                      return <a target="_blank" href={item.href}><img src={item.img}/></a>
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
    <section className="menu" style={{ height: this.state.height, backgroundColor: `#F4F5F8`}}>

    <div className="wrapper">
    <div className="menu_btn" onClick={this.showMenu} style={{backgroundImage: `url(${this.state.bgIcon})`}}></div>
         <ul className="nav-bar" style = { {height: this.state.heightNavBar, opacity: "1"}}>
           {
             this.props.itemsMenu.map((items) => {
                 return <li><Link onClick={this.showMenu} activeClass="active" to={items.link} spy={true} smooth={true} offset={-70} duration= {500}>{items.item}</Link></li>

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
        <li><Link activeClass="active" to="header" spy={true} smooth={true} offset={-70} duration= {500}>Главная</Link></li>
        <li><Link activeClass="active" to="consultation" spy={true} smooth={true} offset={-70} duration= {500}>Консультации</Link></li>
        <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration= {500}>Обо мне</Link></li>
        <li><Link activeClass="active" to="workshops" spy={true} smooth={true} offset={-70} duration= {500}>Мастер-классы</Link></li>
        <li><Link activeClass="active" to="feedback" spy={true} smooth={true} offset={-70} duration= {500}>Отзывы</Link></li>
        <li><Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-70} duration= {500}>Контакты</Link></li>
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
 
  const workshops = [
    {
      img: "../../images/workshops/self.jpeg",
      title: "Я себя знаю!",
      audience: "10-13 лет, 14-17 лет и взрослой аудитории.",
      time: "16 часов",
      description: window.HTMLReactParser(`
        
        <div class="clearfix">
          <p class="quotemc">
              «По мысли Аристотеля, для того, 
              чтобы жить полной жизнью, необходимо реализовать свое предназначение. 
              Иными словами, чтобы достичь счастья, 
              нужно следовать своей природе»
         </p> 
        </div><br>
      И подросток, стоящий на распутье – кем стать, какое направление выбрать для своего будущего, 
      и взрослый, находящийся в ситуации поиска себя на этапе профессионального выгорания или просто поиска другого места работы,  
      -  вне зависимости от возраста, человеку свойственно перекладывать серьезные выборы на кого-то другого или затягивать сам процесс. <br/> <br/>
      Перед тем, как делать какие-то серьезные шаги, определяющие дальнейшее течение событий жизни, просто необходимо осознанное знание и понимание себя, своих особенностей, 
      своего потенциала в целом. Как можно отправляться в путь, не понимая, какой у вас есть багаж знаний, умений, навыков? Какие именно ваши желания? Какие ваши ложные представления и зависимости целей, а где именно ваше направление, ваш путь развития, ваша уникальность? <br/> <br/>

          <br/><br/>
      <b>На мастер-классе раскрываются темы:</b> <br/><br/>
      <span class="innderworkshop">
        ⁃ знание личностных особенностей (темперамента, характера, эмоционально-волевой сферы…) <br/>
        ⁃ выстраивается круг развитых способностей, реальных умений и навыков <br/>
        ⁃ складывается логика понимания личной картины мира, представлений о ближайщих и долгосрочных планах, ценностных ориентаций и конкретных задач на пути осуществления целей. <br/>
        ⁃ осознанное профессиональное самоопределение, ответственность за выбор <br/>
        ⁃ понимание баланса и комплекса развитых различных профессиональных интересов и склонностей как индивидуальной силы, уникальности представлений на рынке труда <br/>
        ⁃ soft skills & hard skills  - что это, как и зачем развивать, запросы современных и будущих работодателей <br/>
        ⁃ структурирование жизни как процесс индивидуального проектирования и последовательного исполнения целей <br/>
        ⁃ уникальным бонусом тренинга является индивидуальная конкретизация действий, курирование процесса выполнения после окончания занятий и корректировка этапов на пути реализации цели в качестве персонального тьютора для учеников 8-11 классов или персонального тренера для взрослых. <br/>
        «Знать себя + отвечать за себя + быть собой»
      </span>
      
      `),
      type: "Интерактивный мастер-класс"
    },
    {
      img: "../../images/workshops/doit.jpeg",
      title: window.HTMLReactParser("Не говори, а делай! <br> Индивидуальная траектория развития."),
      audience: "10-13 лет, 14-17 лет и взрослая аудитория",
      time: "16 часов",
      description: window.HTMLReactParser(`
        
      <div class="clearfix">
      <p class="quotemc">
      «Занимаясь делом, говорят только тогда, когда есть что сказать; 
      но в безделье является потребность говорить беспрерывно» <br>
      - Жан Жак Руссо 
      <br/> <br/>
      </p>
      </div>
      Является продолжением мастер-класса «Я себя знаю» или отдельным блоком. <br/> <br/>

      <b>На мастер-классе раскрываются темы:</b> <br/><br/>
      <span class="innderworkshop">
        ⁃ осознанное понимание своего профессионального и личностного потенциала <br/>
        ⁃ активизация всего комплекса своих способностей и склонностей <br/>
        ⁃ структурирование и долгосрочное планирование <br/>
        ⁃ разработка стратегии индивидуальной траектории развития ресурсной среды <br/>
        ⁃ «проба пера», переход к практическим темам, проектам и стартапам <br/>
        ⁃ возможность встраивания со своими темами в реальные масштабные проекты <br/>
        ⁃ система саморегуляции как основа контроля и оценки текущих результатов своего проекта или конкретной практической деятельности <br/>
      </span>

      
      `),
      type: "Интерактивный мастер-класс"
    },
    {
      img: "../../images/workshops/sh.jpeg",
      title: window.HTMLReactParser("Эволюция профессиональной среды: <br> soft skills и hard skills."),
      audience: "подростки 14-17 лет, родители, педагоги",
      time: "16 часов",
      description: window.HTMLReactParser(`
      <div class="clearfix">
      <p class="quotemc">
      «Со знаниями из прошлого на рынке будущего не выжить. 
      Но часто кандидаты не готовы принять новую реальность и что-то изменить 
      в своей жизни» <br>
      Forbes.ru <br>
      - Инна Суматохина 
      <br/> <br/>
      </p>
      </div>
      <b>На мастер-классе раскрываются темы:</b> <br/> <br>
      <span class="innderworkshop">
          ⁃ вызовы времени – какие профессии исчезнут и почему это следует знать <br/>
          ⁃ какие профессии будущего уже вошли в нашу жизнь и войдут в ближайшее десятилетие <br/>
          ⁃ автоматизация жизни и уникальность профессионала - существует ли компромисс в борьбе за профессиональное выживание и как можно встроиться в рынок труда со своей специализацией <br/>
          ⁃ soft skills & hard skills  - непонятные термины или ключ к будущему <br/>
          ⁃ моя уникальность, личный бренд, знание своего профессионального потенциала, умение маневрировать и адаптироваться в постоянно изменяющейся высококонкурентной среде <br/>
          ⁃ аутентичность. Осознанность. Свобода выбора. Результат. <br/>
          ⁃ основы профессионального самоопределения 
        </span>
      
      `),
      type: "Интерактивный мастер-класс"
    },
    {
      img: "../../images/workshops/social.jpeg",
      title: "Создание и развитие ресурсной среды человека.",
      audience: "подростки, родители, педагоги, начинающие предприниматели ",
      time: "16 часов",
      description: window.HTMLReactParser(`
        
      <div class="clearfix">
      <p class="quotemc">
      «Как много дел считались невозможными, 
      пока они не были осуществлены» <br>
      - Плиний Старший <br/> <br/>
      </p>
      </div>
      <b>На мастер-классе раскрываются темы:</b> <br/><br/>
      <span class="innderworkshop">
          ⁃	что такое «Человеческие ресурсы» – это определенная совокупность качеств и характеристик человека, которая характеризует его способность к деятельности определенного рода. Их виды. <br/>
          ⁃	ресурсная среда как возможность планомерного осуществления индивидуальной траектории развития человека.  <br/>
          ⁃	модель Ресурсной среды человека». <br/>
          ⁃	если работа над своей ресурсной средой как стратегическое планирование закладывается в жизни ребенка с детства, то и дальнейшее его социально-психологическая и профессиональная адаптация проходит гармоничнее.  Такие же вопросы актуальны и для взрослого человека, который задумывается о структурном подходе к решению задач в своей жизни в целом. <br/>
          ⁃	актуальность этого вопроса в наше время, когда невозможно спрогнозировать будущее даже на ближайшее 5-летие при все возрастающей глобальной автоматизации процессов экономики и изменения рынка труда в целом. Развитие своей ресурсной среды в течение жизни. <br/>
      </span>
      `),
      type: "Интерактивный мастер-класс"
    },
    {
      img: "../../images/workshops/grow.jpeg",
      title: "Развитие нестандартного мышления.",
      audience: "подростки, родители, педагоги, начинающие предприниматели ",
      time: "16 часов",
      description: window.HTMLReactParser(`

      <div class="clearfix">
        <p class="quotemc">
        «Вы видите разные вещи и говорите: «Почему?» 
        Я же выдумываю вещи, которых никогда не существовало и говорю: 
        «Почему бы и нет?» <br>
        - Бердард Шоу <br/> <br/>
        </p>
      </div>
      <b>На мастер-классе раскрываются темы:</b> <br/> <br/>
      <span class="innderworkshop">
        ⁃ поливариантное мышление, 3D – мышление, нестандартное мышление, креативное мышление, веер возможностей – что это? <br/>
        ⁃ как развивать способность находить новые подходы и необычные решения в любых ситуациях? <br/>
        ⁃ есть ли место нестандартного мышления в стандартизированной жизни? <br/>
        ⁃ предприимчивость – феномен или новые грани своего потенциала? <br/>
        ⁃ обязательно ли становиться бизнесменом для того, чтобы применять предпринимательский подход в жизни? <br/>
        ⁃ веяние времени или известный адаптационный прием? Развитие воображения. Работа со стандартизированным мышлением взрослого человека, установками и шаблонами. <br/>
        ⁃ как помогает самореализация в различных профессиональных и личностных сферах процессу развития нестандартного мышления? <br/>
        ⁃ где живет вдохновение? Как развивать свой уникальный творческий потенциал? <br/>
        ⁃ профессия будущего «режиссер индивидуальных туров» как вариант развития нестандартного мышления <br/>
      </span>
      `),
      type: "Интерактивный мастер-класс"
    },
    {
      img: "../../images/workshops/perform.jpeg",
      title: window.HTMLReactParser("Сила сцены. <br> Владение собой и аудиторией."),
      audience: "подростки",
      time: "16 часов",
      description: window.HTMLReactParser(`
      <div class="clearfix">
      <p class="quotemc">
      «Сам себе бренд. Искусство самопрезентации.» <br>
       - Гарри Беквит  <br/> <br/>
      </p>
      </div>
      <b>На мастер-классе раскрываются темы:</b> <br/><br/>
      <span class="innderworkshop">
        ⁃ как влияет самопрезентация на профессиональную успешность? <br/>
        ⁃ во всех ли профессиях важны коммуникативные навыки? И как их развивать? <br/>
        ⁃ что такое Soft Skills? Как это связано с процессом самопрезентации? <br/>
        ⁃ построение личного бренда – необходимость времени? <br/>
        ⁃ в чем смысл понятия «Сила Сцены»? <br/>
        ⁃ как работать с зажимами и установками через осознанность процесса, целеполагание и стремление к результату <br/>
        ⁃ «первое впечатление нельзя произвести дважды»? – жесткое правило или шаблоны прошлого <br/>
        ⁃ самореклама и навязчивость – грани тактичности и навыки эмоционального интеллекта <br/>
        ⁃ взгляд, осанка, голос … - как овладеть приемами и преодолеть страхи публичного выступления <br/>
        ⁃ саморегуляция во время выступлений, собеседования, сдачи экзаменов и переговоров <br/>
      </span>
      `),
      type: "Интерактивный мастер-класс"
    },

    {
      img: "../../images/workshops/hard.jpeg",
      title: "Самый трудный возраст.",
      audience: "подростки",
      time: "16 часов",
      description: window.HTMLReactParser(`
        
      <div class="clearfix">
      <p class="quotemc">
      «Если ты действительно готовишь ребенка к жизни – 
      не учи его подчиняться – учи командовать!» <br> 
       - Франц Лебовиц <br/> <br/>
      </p>
      </div>
      <b>На мастер-классе раскрываются темы:</b> <br/><br/>
      <span class="innderworkshop">
        ⁃	всем известные особенности подросткового возраста <br/>
        ⁃	современные реалии воспитания и страхи родителей <br/>
        ⁃	«а если на самом деле все не так?!» <br/>
        ⁃	теория личности , три ролевые позиции «Я» <br/>
        ⁃	противостояние сторон – незнание и нежелание обоих? <br/>
        ⁃	Я – правильный, ты – нет. <br/>
        ⁃	проблема «отцов и детей» в свете безумного ускорения времени <br/>
        ⁃	«я думаю о нашем совместном будущем» или «как все-таки нам общаться?» <br/>
      </span>
      `),
      type: "Интерактивный мастер-класс"
    },
    {
      img: "../../images/workshops/mama.jpeg",
      title: "Профессия — современная мама.",
      audience: "работающие мамы, многодетные мамы",
      time: "16 часов",
      description: window.HTMLReactParser(`
        
      <b>На мастер-классе раскрываются темы:</b> <br/><br/>
      <span class="innderworkshop">
        ⁃ что делать с повышенной тревожностью и завышенными требованиями к себе? <br>
        ⁃ моя «женская самооценка» - я- реальная, я- идеальная, я- глазами других. <br>
        ⁃ держать равновесие – на грани фантастики? <br>
        ⁃ с чего все начинается? Осознанность. Целеполагание. Результаты. <br>
        ⁃ что делать, если давно сижу дома с детьми? Вопросы профессиональной самореализации <br>
        ⁃ всем ли так необходимо заниматься самореализацией во всех сферах жизни? <br>
        ⁃ женский таймменеджмент? Жесткие реалии? Или индивидуальные возможности? <br>
        ⁃ как разрешить себе не следовать стандартам общества? Аутентичность как процесс. <br>
        ⁃ вдохновляющая мама и жена – тяжелая работа над собой или честные крылья? <br>
        ⁃ «стресс на стресс», приемы осознанной саморегуляции <br> 
        ⁃ вдохновляющие примеры работают? успешные бизнес- вумен – реальные истории. <br>
      </span>
      `),
      type: "Интерактивный мастер-класс"
    },
    {
      img: "../../images/workshops/rooms.jpeg",
      title: window.HTMLReactParser("Страх неизвестности. <br/> Профессиональное самоопределение взрослых."),
      audience: "специалисты, временно не работающие",
      time: "16 часов",
      description: window.HTMLReactParser(`
                
      <div class="clearfix">
      <p class="quotemc">
      «Отдели смятение от его причины, смотри на само дело – и ты убедишься, 
      что в любом из них нет ничего страшного, 
      кроме самого страха» <br>
       - Сенека 
      <br/><br/>
      </p>
      </div>
      <b>На мастер-классе раскрываются темы:</b> <br/> <br/>
     <span class="innderworkshop">  
      ⁃	особенности профессионального самоопределения во взрослом возрасте, «Начать с чистого листа?!» <br/>
      ⁃	профессиональное выгорание – причины, как избежать и как выходить из этого состояния <br/>
      ⁃	парадигмы времени – увеличение возраста профессиональной занятости и тема долголетия <br/>
      ⁃	страх будущего, непонимание ориентиров, нестабильность как затянувшееся проклятие? <br/>
      ⁃	одна жизнь – одна профессия или как адаптироваться под запрос рынка труда <br/>
      ⁃	«ну вот опять!», учиться, учиться и еще раз учиться <br/>
      ⁃	ресурсы человеческой психики и знание своего личностного и профессионального потенциала <br/>
      ⁃	«ну что же, начнем…», активизация ресурсной среды взрослого человека
      </span>
      `),
      type: "Интерактивный мастер-класс"
    }
    /*
    {
      img: "../../images/workshops/№.jpeg",
      title: "Развитие Городской Туристической Ресурсной Среды как модели активизации социально-экономической и культурной жизни в регионе",
      audience: "Подростки с 13 лет, взрсолые",
      time: "3 часа, бесплатно",
      description: window.HTMLReactParser(`
      В качестве продвижения масштабного проекта ОСИГ  и участия в конкурсе «Мастера Гостеприимства» на платформе «Россия – страна возможностей. <br/> <br/>
      «Проектное мышление – взгляд на жизнь, дающий новые возможности и свободу выбора средств в принятии решений; результативная ориентированность, когда проект делается не ради процесса, а ради четко определенного результата» <br/> <br/>                                                                                  
      «Двигаться, дышать, парить, плыть, получать то, что даришь, исследовать, путешествовать – это и значит ЖИТЬ.» Ганс Христиан Андерсон <br/> <br/>
      На мастер-классе раскрываются темы: <br/>
      •	Что такое «городская туристическая ресурсная  среда» – давайте по порядку! <br/>
      •	Для чего и как ее активизировать? <br/>
      •	Какие задачи и проблемы региона и города она может решать? <br/>
      •	Ресурсная среда – среда возможностей. Как ею управлять? <br/>
      •	Что такое событийный, деловой, промышленный, гастрономический, экологический и т.д. туризм? <br/>
      •	Конкретные примеры запуска проекта (города России и отдельные районы Москвы) <br/>
      •	От личного проекта к масштабному: от индивидуального запроса по профессиональному самоопределению к глобальному проекту ОСИГ по развитию внутреннего туризма в России <br/>
      •	Долгосрочное планирование, система наставников, проекты социального предпринимательства и многое другое. Главное, начать! <br/>
      •	Как создать актив, который будет на месте заниматься этим проектом? – вы уже здесь! Поехали!
      
      
      `),
      type: "Обучающий семинар"
    }
    */
  ]

class Workshops extends React.Component {
  constructor(props) {
    super(props);
    this.openPopup = this.openPopup.bind(this);
  }


  openPopup(datas, e) {
    //console.log(datas);
    ReactDOM.render(<Popup  display="flex" bottom="0" typePop="workshops" second_popup={false} datas={datas}/>, document.getElementById("popup"));
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

        {
          this.props.works.map((items) => {
              return <div className="item" onClick={this.openPopup.bind(this, {title: items.title, audience: items.audience, type: items.type, time: items.time, description: items.description})} style={{backgroundImage: `url(${items.img})`}}><h2>{items.title}</h2></div>   
          })
        }
  
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
                    Пришли на мастер-классе "Я себя знаю" вместе с сыном с главным вопросом - 
                    куда ему поступать, если совсем непонятно, что интересно. 
                    До этого проходили профориентацию, но осталось много вопросов.
                    Благодаря Виктории посмотрела на все наши с сыном вопросы со 
                    стороны, и, как она представляет, через "комплексное развитие". 
                    Сын сейчас занимается по индивидуальной программе.
                  </div>
                  <div className="about-comment">Елена Андреева</div>
                </div>
                <div>
                  <div className="body-comment">
                    После мастер-класса "Не говори, а делай!" изменилось отношение ко многим моим вопросам в поиске работы. 
                    Спасибо Виктории за такой понятный и четкий диалог. 
                    Мне понравилось, что было много реальных примеров. Без воды.
                  </div>
                  <div className="about-comment">Александр Завьялов</div>
                </div>
                <div>
                  <div className="body-comment">
                    Виктория большая молодец! Настоящий профессиональный психолог! У меня были постоянные конфликты с дочерью 15 лет. 
                    У обеих сильный характер. Кроме того, что дочь после индивидуальных занятий уже стала заметно меняться, так и я сама тоже. 
                    Всем очень советую!
                  </div>
                  <div className="about-comment">Татьяна Болдина</div>
                </div>
                <div>
                  <div className="body-comment">
                        Сегодня был на мастер-классе "Создание и развитие ресурсной среды человека".  
                        Интересная модель, хотя, вроде все давно известно. Главное, что Виктория умело показывает, 
                        как это можно применить сразу в своей жизни. 
                        Отлично вдохновляет и  делится интересными контактами. Спасибо!
                    </div>
                    <div className="about-comment">Евгений Самгин</div>
                </div>

                <div>
                  <div className="body-comment">
                      Была на тренинге "Сила сцены. Владение собой и аудиторией." Большое спасибо! 
                      Всегда боялась выступать. На тренинге начала работать не только над голосом, 
                      но и над своими страхами. Спасибо Виктории, все очень понравилось!
                  </div>
                  <div className="about-comment">Светлана Каманина</div>
                </div>
                <div>
                  <div className="body-comment">
                      Спасибо Виктории за отличный мастер-класс "Самый трудный возраст". 
                      Никогда не смотрела на проблему с этой стороны. 
                      Получила многие ответы для себя. Интересно теперь пойти с сыном на другие мастер-классы. 
                      Очень динамично и полезно. Ещё раз спасибо!
                  </div>
                  <div className="about-comment">Анна Фадеева</div>
                </div>

                <div>
                  <div className="body-comment">
                      Благодарю Викторию за тренинг "Профессия - современная мама". Я многодетная мама, 
                      и навыки профессиональной деятельности за годы декрета забылись. На тренинге Виктория 
                      профессионально раскрыла тему и работала с группой, с каждой из нас. Оказалось, 
                      что Виктория и сама многодетная мама, как раз использует то, о чем говорит! 
                      Огромное спасибо!
                  </div>
                  <div className="about-comment">Ольга Рожкова</div>
                </div>

                <div>
                  <div className="body-comment">
                      Была на мастер-классе "Страх неизвестности. Профессиональное самоопределение взрослых." 
                      Хорошо, когда такой мастер-класс ведёт психолог, а не формальный специалист. Чувствуется поддержка 
                      и глубокий подход. У меня лично и усталость, и страхи за семью.  Собираюсь на индивидуальную консультацию, 
                      без нее уже никуда. Виктория, спасибо, что поднимаете такие сложные темы!
                  </div>
                  <div className="about-comment">Елена Киселёва</div>
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
          <div onClick={this.openPhoto.bind(this,"")} className="item" style={{backgroundImage: "url(../images/feedback/1.jpg)"}}>        
          </div>

          <div className="item" style={{backgroundImage: "url(../images/feedback/10.jpg)"}}>   
          </div>

          <div className="item" style={{backgroundImage: "url(../images/feedback/18.jpg)"}}>
          </div>

          <div className="item" style={{backgroundImage: "url(../images/feedback/19.jpg)"}}>
          </div>
          <div className="item" style={{backgroundImage: "url(../images/feedback/7.jpg)"}}>
          </div>
          <div className="item" style={{backgroundImage: "url(../images/feedback/11.jpg)"}}>
          </div>
          <div className="item" style={{backgroundImage: "url(../images/feedback/12.jpg)"}}>
          </div>
          <div className="item" style={{backgroundImage: "url(../images/feedback/13.jpg)"}}>
          </div>
          <div className="item" style={{backgroundImage: "url(../images/feedback/15.jpg)"}}>
          </div>
          <div className="item" style={{backgroundImage: "url(../images/feedback/16.jpg)"}}>
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
                            Оставьте контакты, и я перезвоню Вам как можно скорее.<br/> 
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
                      {this.props.datas.audience}
                    </p>
                  </div>
                  <div className="time">
                      <p>
                        {this.props.datas.time}
                      </p>
                  </div>
               </div> 
               <div className="frame">
                  <p>
                    {this.props.datas.description}
                  </p>
               </div>
               <div className="dosh"></div>
               <div className="bottom">
                  <div className="bottom-title">
                      <p>{this.props.datas.type}</p>
                      <h2>{this.props.datas.title}</h2>
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

class Preloader extends React.Component {

  render() {
    return (
     
        <Circle time={2000}/>
 
    );
  }
}

//ReactDOM.render(<Preloader/>, document.getElementById("preloader"));

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
ReactDOM.render(<Feedback/>, document.getElementById("feedbacks"));
ReactDOM.render(<Workshops works={workshops}/>, document.getElementById("workshops"));



/*
var socials = document.querySelector(".social-icons");
var menu = document.querySelector(".menu");

  if (window.innerWidth > 920) {
    menu.style.backgroundColor = "transparent";
    menu.style.boxShadow = "none";
    socials.style.display = "none";
    socials.style.opacity = "0"; 
  }
  else {
    menu.style.backgroundColor = "#F4F5F8";
    menu.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.1)";
    socials.style.opacity = "1"; 
    socials.style.display = "flex";
  }

window.onresize = function() {
  if (window.innerWidth > 920) {
    menu.style.backgroundColor = "transparent";
    menu.style.boxShadow = "none";
    socials.style.display = "none";
    socials.style.opacity = "0"; 

    window.onscroll = function() {  
      if (window.pageYOffset >= 5) {
        menu.style.backgroundColor = "#F4F5F8";
        menu.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.1)";
        socials.style.opacity = "1";
      }
      else {
        menu.style.backgroundColor = "transparent";
        menu.style.boxShadow = "none";
        socials.style.opacity = "0";
      }  
  }


  }
  else {
    menu.style.backgroundColor = "#F4F5F8";
    menu.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.1)";
    socials.style.opacity = "1"; 
    socials.style.display = "flex";
  }
}
*/

var socials = document.querySelector(".social-icons");
var menu = document.querySelector(".menu");

if(window.innerWidth > 920) {
  if (window.pageYOffset >= 5) {
    menu.style.backgroundColor = "#F4F5F8";
    menu.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.1)";
    socials.style.display = "flex";
    socials.style.opacity = "1";      
  }
  else {
    menu.style.backgroundColor = "transparent !important";
    menu.style.boxShadow = "none";
    socials.style.display = "none";
    socials.style.opacity = "0";
  }  

window.onscroll = function() {  
    if (window.pageYOffset >= 5) {
      menu.style.backgroundColor = "#F4F5F8";
      menu.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.1)";
      socials.style.display = "flex";
      socials.style.opacity = "1";      
    }
    else {
      menu.style.backgroundColor = "transparent";
      menu.style.boxShadow = "none";
      socials.style.display = "none";
      socials.style.opacity = "0";
    }  
}
}
else {
  menu.style.backgroundColor = "#F4F5F8";
  menu.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.1)";
  socials.style.display = "flex";
  socials.style.opacity = "1";   
}
