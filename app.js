// TODO
class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick(){
    this.setState({
      done: !this.state.done
    });
  }
  
  onListItemHover(){
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {

    var style = {
      textDecoration: this.state.done? 'line-through' : 'none',
      fontWeight: this.state.hover? 'bold' :'normal'
    };

    return(
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
    )
  }
};

var GroceryList = (props) => (
  <div>
  <h2>Grocery List</h2>
  <ul>
    {props.items.map(item => 
      <GroceryListItem item={item} />
    )}
  </ul>
  </div>
);



ReactDOM.render(<GroceryList items={['milk','butter', 'eggs']}/>, document.getElementById('app'));