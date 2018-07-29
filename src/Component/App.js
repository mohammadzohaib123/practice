import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DBActions from '../Store/Action/DBActions';
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
class App extends Component{

    constructor(props) {
        super(props);
      this.state=
        {
          items:[],
          table:[],
          itemArr:[]
        }

    }
    
    componentDidMount(){
        this.props.getOrders();
    }
    tablesData = {};
    getData=()=>{
      var  tableKey=this.props.orders.returnKey;
      var  tableArray=this.props.orders.returnArr; 

      var ordersKey=[];
      var ordersArray=[];
      var data=[];
      var orderItem=[];
      console.log('tablekey',this.props.orders.returnArr);
      this.props.orders.returnArr.forEach((element, index) => {
          let eachObj = element.Orders,
                seats = element.seats,
                table = element.key,
                ordersKeys = Object.keys(element.Orders),
                temArray = [];
            // console.log(eachObj[ordersKeys[index]])
            if(ordersKeys.length>1){
                ordersKeys.forEach((data, i)=>{
                    console.log('greater than one data: ',eachObj[data].items);
                    eachObj[data].items.forEach((itemData, ind)=>{
                        //let newObj = itemData;
                        itemData.parentKey = data;
                        itemData.table = table;
                        temArray.push(itemData);
                    })
                })
                this.tablesData[table] = temArray;
            }else{
                let newObj = eachObj[ordersKeys].items;
                newObj.forEach((data, i)=>{
                    let obj = data;
                    data.table = table;
                    data.parentKey = ordersKeys[0];
                    temArray.push(data);
                })
                this.tablesData[table] = temArray;
            }
            console.log('tableData: ', this.tablesData);
            var arr=Object.values(this.tablesData);
                this.setState({
                items:arr
            })
            

      });
    //   console.log(this.tablesData)
    // //   console.log('tableArray',this.props.orders.returnArr);
    //   for(var i=0;i<tableArray.length;i++){
    //       ordersKey.push(Object.keys(tableArray[i].Orders))
          
    //       ordersArray.push(Object.values(tableArray[i].Orders))
    //       //ordersArray.push(tableKey)
    //   }
//       console.log('orderKey',ordersKey)
//       console.log('orderArray',ordersArray)
//       for (var i=0;i<tableArray.length;i++){
//           for(var j=0;j<ordersKey[i].length;j++) {
//          // console.log(this.props.returnKey[i])
//          data.push(tableArray[i].Orders[ordersKey[i][j]].items);
//            //console.log(tableArray[i].Orders[ordersKey[i][j]].items);}
//           }
//         }
//       var tables=[];
//       console.log('data',data)
//       for(var i=0;i<data.length;i++){
          
//           for(var j=0;j<data[i].length;j++){
//           let obj = data[i][j];
          
//           obj.table = tableKey[i];
//             orderItem.push(obj)}

//       }
//       console.log('tableKey',tableKey)
//       console.log('orderItem',orderItem)
//       this.setState({
//         tableName: tables,
//         items: orderItem
//   })
    }
    setItem = (array) => {
        this.setState({ itemArr: array });
    }
    item=[];
    render(){
        return(
            <div>
                <input type="submit" onClick={()=>this.getData()} />
                {
                
                   this.state.items.map((element,index)=>{
                       return element.map(ele=>{
                        return < Grid container justify = "center"direction = "col"item md =  {5} >
                                                     
                        < Card style =  { {marginBottom:10, width:280, marginTop:10}} >
                              < CardContent > 
                                    < Typography >
                                          < Typography variant = "headline"component = "h2" >
                                               {ele.item}       
                                          </Typography >  < br /> 
                                          < Typography component = "p" > 
                                                Price: {ele.price} < br /> 
                                                Quantity: {ele.qty} < br /> 
                                          </Typography >  < br />  
                                  </Typography >  
                              </CardContent >  
                              <CardActions>
                                    <Button variant="fab" color="secondary" aria-label="Add" style={{ backgroundColor: "#41b3ec" }}  value = "Queued" tableKey={ele.table} key={ele.parentKey} onClick={() => this.onChangeHandler()} >
                                          <span style={{color:"#333",fontFamily:"Roboto",fontWeight:"bold"}}>queue</span>
                                    </Button>
                                    <Button variant="fab" color="secondary" aria-label="Add"value="Cooked" >
                                          <span style={{color:"#333",fontFamily:"Roboto",fontWeight:"bold"}}>cook</span>
                                    </Button>
                                    <Button variant="fab" color="secondary" aria-label="Add" value="Delivered" style={{ backgroundColor: "#4bec50" }}  value = "Delivered">
                                          <span style={{color:"#333",fontFamily:"Roboto",fontWeight:"bold"}}>deliv</span>
                                    </Button>
                              </CardActions>
                        </Card >
                   </Grid >
                       })
                   })
                }
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        isLoading: state.DBReducer.isLoading,
        isError: state.DBReducer.isError,
        errorMsg: state.DBReducer.errorMsg,
        orders: state.DBReducer.order
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(DBActions.getOrders()),
        setItem: (array) => dispatch(DBActions.setItem(array))
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);