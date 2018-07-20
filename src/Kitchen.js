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
  statusHandler=(key)=>{
      console.log(key)
      this.props.setOrders(key);
  }
  getData=()=>{
    var obj=this.props.orders;               //{-LHlul1Qfc02kX9h04Vv: {…}}
    // console.log(obj);
   var key1=Object.keys(obj);                 //["-LHlul1Qfc02kX9h04Vv"]
   var entries=Object.entries(obj);            //[Array(2)]
      this.setState({key:key1,renderArray:entries})
  }
  render() {
      return (
          <div>
              {/* <input type="submit" value="GET DATA" onClick={()=> this.getData()} /> */}
              <Button variant="contained" size="large" color="primary" style={{textAlign:"center",marginLeft:250,marginTop:70}}  type="submit" value="GET DATA" onClick={()=> this.getData()}>
          Large
        </Button>
        
        {
            this.state.renderArray.map(value=>{
              console.log(value);
              var history = value[1].history ? Object.entries(value[1].history) : [];

            return history.map(val=>{
                  console.log(val);
                //   var historyVal = val[1].history ? Object.entries(val[1].history) : [];
            return val[1].map((obj, i)=>{
                    console.log(obj.item);
        return <Paper style={{width:"40%"}}>
         <ul>
             <li><ol>
            Item:{obj.item}<br /> Price:{obj.price} <br /> Quantity:{obj.qty} <br /> Status: {obj.status}
         <br />
         <input type="submit" value="Queued" onClick={()=>this.statusHandler({path: value[0]+"/history/"+val[0]+"/"+i.toString(), val: {...obj, status: "Queued"}})} />
             <input type="submit" value="Cooked" onClick={()=> this.statusHandler({path: value[0]+"/history/"+val[0]+"/"+i.toString(), val: {...obj, status: "Cooked"}})}/>
             <input type="submit" value="Delivered" onClick={()=> this.statusHandler({path: value[0]+"/history/"+val[0]+"/"+i.toString(), val: {...obj, status: "Delieverd"}})}/>
               </ol></li>        
         </ul>
        </Paper>
                    })
                })
                       
          })
        }
              
      </div>
    //        <div>
    //        {/* <input type="submit" value="GET DATA" onClick={()=> this.getData()} /> */}
    //        <Button variant="contained" size="large" color="primary" style={{textAlign:"center",marginLeft:250,marginTop:70}}  type="submit" value="GET DATA" onClick={()=> this.getData()}>
    //    Large
    //  </Button>
     
    //  {
    //      this.state.renderArray.map(obj=>{
    //        return <Paper style={{width:"40%"}}><li><ol>
    //        Item:{obj.item}<br /> Price:{obj.price} <br /> Quantity:{obj.qty} <br /> Status: {obj.status}
    //        <br />
    //        <input type="submit" value="Queued" onClick={()=>this.statusHandler()} />
    //        <input type="submit" value="Cooked" onClick={()=> this.statusHandler()}/>
    //        <input type="submit" value="Delivered" onClick={()=> this.statusHandler()}/>
    //          </ol></li>        </Paper>
    //      })
          
    //    }
           
    //    </div>
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
      setOrders: (key) => {
          console.log(key)
        return dispatch(Actions.setOrders(key));
      }
    };
  };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
