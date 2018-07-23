import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/LocalDining';
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Actions from "./Store/Action/Actions";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import NavBar from './Container/Navbar';
import Button from '@material-ui/core/Button';
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
class App extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  key: [],
                  renderArray: [],
                  heading: 0,
                  isActive:true
            };
            this.changeStatus = this.changeStatus.bind(this);
      }
      heading = {
            count: 0
      };
      componentDidMount() {
            console.log(this.props.getOrders())
      }
      changeStatus = () => {
            console.log(this.state.renderArray[0][1])
            var order = this.state.renderArray[0][1]
            this.props.changeOrders({
                  key: this.state.key,
                  val: { ...order,
                        status: "delivered"
                  }
            })
            this.render();
      }
      statusHandler = (ev,key) => {
            this.props.setOrders(key);
      }
      getData = () => {
            var obj = this.props.orders; //{-LHlul1Qfc02kX9h04Vv: {…}}
            // console.log(obj);
            var key1 = Object.keys(obj); //["-LHlul1Qfc02kX9h04Vv"]
            var entries = Object.entries(obj);
            //[Array(2)]
            this.setState({
                  key: key1,
                  renderArray: entries
            })
      }
      render() {
            return ( 
      < div > 
            < Grid container direction = "row" >  
                  < Grid style =  { {border:"2px solid", backgroundColor:"#3d3d3d"}}item xs =  {4}md =  {3} > 
                        < List component = "nav" > 
                              < ListItem button onClick =  {() => this.getData()} >  
                                    < ListItemIcon >
                                          < InboxIcon style =  { {marginRight:"0px", color:"#8e908e"}}/>
                                    </ListItemIcon > 
                                    < p style =  {styles.listText} > Kitchen </p >  
                              </ListItem > 
                              < Divider />
                        </List >
                  </Grid >
                        < Grid item xs =  {8}md =  {9}style =  { {overflowY:"scroll", height:"90vh"}} >
                              < Grid container direction = "row" >
                               
                                     { 
                                    this.state.renderArray.map((value,key) => 
                                    {
                                          this.state.heading=key+1
                                          this.heading.count = key;
                                    var history = value[1].history?Object.entries(value[1].history):[]; 
                                    return history.map(val =>
                                          {
                                            return val[1].map((obj, i) =>  
                                                { 
                                                    return < Grid container justify = "center"direction = "col"item md =  {5} >
                                                     
                                                      < Card style =  { {marginBottom:10, width:280, marginTop:10}} >
                                                            < CardContent > 
                                                                  < Typography >
                                                                        <Typography component="h4" variant="headline">
                                                                             Order No:{this.state.heading}
                                                                        </Typography>
                                                                        < Typography variant = "headline"component = "h2" >
                                                                             {obj.item}       
                                                                        </Typography >  < br /> 
                                                                        < Typography component = "p" > 
                                                                              Price: {obj.price} < br /> 
                                                                              Quantity: {obj.qty} < br /> 
                                                                        </Typography >  < br />  
                                                                        
                                                                        
{/*                                                                         
                                                                        < input type = "submit" className={this.state.isActive ? 'backgroundColor' : '#333333'} value = "Queued"onClick =  {(ev) => this.statusHandler(ev,{path:value[0] + "/history/" + val[0] + "/" + i.toString(), val: {...obj, status:"Queued"}})}/>
                                                                        < input type = "submit" value = "Cooked" onClick =  {(ev) => this.statusHandler(ev,{path:value[0] + "/history/" + val[0] + "/" + i.toString(), val: {...obj, status:"Cooked"}})}/>  
                                                                        < input type = "submit" value = "Delivered" onClick =  {(ev) => this.statusHandler(ev,{path:value[0] + "/history/" + val[0] + "/" + i.toString(), val: {...obj, status:"Delieverd"}})}/>   */}
                                                                  </Typography >  
                                                            </CardContent >  
                                                            <CardActions>
                                                                  <Button variant="fab" color="secondary" aria-label="Add" style={{ backgroundColor: "#41b3ec" }}  value = "Queued" onClick =  {(ev) => this.statusHandler(ev,{path:value[0] + "/history/" + val[0] + "/" + i.toString(), val: {...obj, status:"Queued"}})}>
                                                                        <span style={{color:"#333",fontFamily:"Roboto",fontWeight:"bold"}}>queue</span>
                                                                  </Button>
                                                                  <Button variant="fab" color="secondary" aria-label="Add"value="Cooked" onClick= {(ev) => this.statusHandler(ev,{path:value[0] + "/history/" + val[0] + "/" + i.toString(), val: {...obj, status:"Cooked"}})}>
                                                                        <span style={{color:"#333",fontFamily:"Roboto",fontWeight:"bold"}}>cook</span>
                                                                  </Button>
                                                                  <Button variant="fab" color="secondary" aria-label="Add" value="Delivered" style={{ backgroundColor: "#4bec50" }}  value = "Delivered" onClick =  {(ev) => this.statusHandler(ev,{path:value[0] + "/history/" + val[0] + "/" + i.toString(), val: {...obj, status:"Delieverd"}})} >
                                                                        <span style={{color:"#333",fontFamily:"Roboto",fontWeight:"bold"}}>deliv</span>
                                                                  </Button>
                                                            </CardActions>
                                                      </Card >
                                                 </Grid > 
                                                })
                                          })
                                    })
                              } 
                              
                        </Grid >  
                  </Grid >  
            </Grid >
      </div > 
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
            changeOrders: (key) => {
                  console.log(key)
                  return dispatch(Actions.changeOrder(key))
            }
      };
};
export default connect(
      mapStateToProps,
      mapDispatchToProps
)(App);