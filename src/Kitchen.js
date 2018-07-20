import React, { Component } from 'react';
import { connect } from "react-redux";
import Actions from "./Store/Action/Actions";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { key:[], renderArray: [] };
    }
  componentDidMount() {
    
      console.log(this.props.getOrders())
     }
  statusHandler=()=>{
      this.props.setOrders();
  }
  getData=()=>{
    var obj=this.props.orders;               //{-LHlul1Qfc02kX9h04Vv: {…}}
    console.log(obj);
   var key1=Object.keys(obj);                 //["-LHlul1Qfc02kX9h04Vv"]
   var entries=Object.entries(obj);            //[Array(2)]
   var entry=entries[0][1];//{ETA: 1531994528783, history: {…}, items: Array(6), status: "confirmed", timeCreated: 1531993328783}
   var history=Object.values(entry);          //(5) [1531994528783, {…}, Array(6), "confirmed", 1531993328783]
   var item_Obj=history[1]
   var items =Object.keys(item_Obj);   //(2) ["-LHmMCt1UsbWz3rnRhls", Array(5)]
   var all_item= item_Obj[items];
      console.log(all_item);
      this.setState({key:key1,renderArray:all_item})
  }
  render() {
      return (
          <div>
              {/* <input type="submit" value="GET DATA" onClick={()=> this.getData()} /> */}
              <Button variant="contained" size="large" color="primary" style={{textAlign:"center",marginLeft:250,marginTop:70}}  type="submit" value="GET DATA" onClick={()=> this.getData()}>
          Large
        </Button>
        
        {
            this.state.renderArray.map(obj=>{
              return <Paper style={{width:"40%"}}><li><ol>
              Item:{obj.item}<br /> Price:{obj.price} <br /> Quantity:{obj.qty} <br /> Status: {obj.status}
              <br />
              <input type="submit" value="Queued" onClick={()=>this.statusHandler()} />
              <input type="submit" value="Cooked" onClick={()=> this.statusHandler()}/>
              <input type="submit" value="Delivered" onClick={()=> this.statusHandler()}/>
                </ol></li>        </Paper>
            })
             
          }
              
          </div>
      )
    }
}
const mapStateToProps = state => {
  console.log(state);
  return {
      isLoading: state.reducer.isLoading,
      isError: state.reducer.isError,
      errorMsg: state.reducer.errorMessage,
      orders: state.reducer.order
  };
};
const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => {
        return dispatch(Actions.getOrders());
      },
      setOrders: () => {
        return dispatch(Actions.setOrders());
      }
    };
  };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
