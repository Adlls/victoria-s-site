//var React = require('react');
//var ReactDOM = require('react-dom');
const propsValues = {
  title: "Lists",
  items: [
    "HTC",
    "iPhone",
    "Samsung"
  ]
}

class Item extends React.Component {
  render() {
  return <li>{this.props.name}</li>
  }
}

class Hello extends React.Component {
  
  constructor(props) {
      super(props);
      //this.state = {class: "off", label:"Нажми"};
      //this.setState({welcome: "okay"})
      //this.press1 = this.press1.bind(this);
      this.state = {items: this.props.data.items};
      this.filterList = this.filterList.bind(this);

  }
  press1(e) {
    console.log(e);
    let className = (this.state.class=== "off")?"on":"off";
    this.setState({class: className});
  }

   filterList() {
      var filteredList = this.props.data.items.filter(function(item) {
          return item.tiLowerCase().search(e.target.value.toLowerCase()) != -1;
      })
      this.setState({items: filteredList});
  }

  render() {
  //return  <div> <h2>Current time: {new Date().toLocaleTimeString()} {this.props.kek} {this.state.welcome}</h2> </div>;
  //return <button onClick={this.press1} className={this.state.class}>{this.state.label}</button>
   return (
        <ul>
            {
              
              this.props.data.items.map(function(item) {
                return <li>{item}</li>
              })
              
        
            }
          </ul>
    );
  }
}

/*
  ReactDOM.render(<Hello data={propsValues}/>,
    document.getElementById("app")
  );

*/



