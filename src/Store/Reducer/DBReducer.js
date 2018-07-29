import DBActions from '../Action/DBActions';
const INITIAL_STATE={
    isError:"false",
    isLoading:"false",
    errorMessage:"",
    order:[]
}
export default function reducer(state=INITIAL_STATE,action)
{
    switch(action.type){
        case DBActions.GET_ORDER_REQUEST:
        return Object.assign({},state,{isLoading:"true"});
        case DBActions.GET_ORDER_SUCCESS:
        return Object.assign({},state,{isLoading:"false",order:action.payload});
        case DBActions.GET_ORDER_FAILURE:
        return Object.assign({},state,{isLoading:"false",isError:"true",errorMessage:action.payload});
       
       case DBActions.SET_STATUS_REQUEST:
       return Object.assign({},state,{isLoading:"true"});
       case DBActions.SET_STATUS_SUCCESS:
       return Object.assign({},state,{isLoading:"false"});
       case DBActions.SET_STATUS_FAILURE:
       return Object.assign({},state,{isLoading:"false",isError:"true",errorMessage:action.payload});

       case DBActions.CHANGE_STATUS_REQUEST:
       return Object.assign({},state,{isLoading:"true"});
       case DBActions.CHANGE_STATUS_SUCCESS:
       return Object.assign({},state,{isLoading:"false"});
       case DBActions.CHANGE_STATUS_FAILURE:
       return Object.assign({},state,{isLoading:"false",isError:"true",errorMessage:action.payload});
        default:
        return state;
    }
}