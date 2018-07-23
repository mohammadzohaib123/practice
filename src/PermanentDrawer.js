import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/LocalDining';
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Actions from "./Store/Action/Actions";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = {
  listText: {
    fontSize: '17px',
    fontFamily: 'sans-serif',
    paddingLeft: '15px',
    color: 'white',
    fontWeight: 'bold'
  },
  circularStyle: {
    height: '87vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
class ClippedDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = { key:[], renderArray: [] };
    }
  componentDidMount() {
      console.log(this.props.orders)
     }
     changeStatus=()=>{
         console.log(this.state.renderArray[0][1])
         var order=this.state.renderArray[0][1]
         this.props.changeOrders({key:this.state.key,val:{...order,status:"delivered"}})
     }
  statusHandler=(key)=>{
      console.log(key)
      this.props.setOrders(key);
  }
  getData=()=>{
      console.log(this.props.orders)
    var obj=this.props.orders;               //{-LHlul1Qfc02kX9h04Vv: {…}}
    // console.log(obj);
   var key1=Object.keys(obj);                 //["-LHlul1Qfc02kX9h04Vv"]
   var entries=Object.entries(obj);  
             //[Array(2)]
      this.setState({key:key1,renderArray:entries})
  }
 render(){
  return (
    <div>
        <Grid container direction="row"  >
          <Grid style={{ border: "2px solid", backgroundColor: "#3d3d3d" }} item xs={4} md={3} >
            <List component="nav" >
              <ListItem button onClick={()=> this.getData()}>
                <ListItemIcon>
                  <InboxIcon style={{ marginRight: "0px", color: "#8e908e" }} />
                </ListItemIcon>
                <p style={styles.listText}>Kitchen</p>
              </ListItem>
              <Divider />
            </List>
          </Grid>
          <Grid item xs={8} md={9} style={{ overflowY: "scroll", height: "90vh" }}>
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
          </Grid>
        </Grid>
      </div>
  );
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
        },
        changeOrders:(key) =>{
            console.log(key)
            return dispatch(Actions.changeOrder(key))
        }
      };
    };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ClippedDrawer);
  