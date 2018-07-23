import Actions from '../Action/Actions';
const INITIAL_STATE={
    isError:"false",
    isLoading:"false",
    errorMessage:"",
    order:[]
}
export default function reducer(state=INITIAL_STATE,action)
{
    switch(action.type){
        case Actions.GET_ORDER_REQUEST:
        return Object.assign({},state,{isLoading:"true"});
        case Actions.GET_ORDER_SUCCESS:
        return Object.assign({},state,{isLoading:"false",order:action.payload});
        case Actions.GET_ORDER_FAILURE:
        return Object.assign({},state,{isLoading:"false",isError:"true",errorMessage:action.payload});
       
       case Actions.SET_STATUS_REQUEST:
       return Object.assign({},state,{isLoading:"true"});
       case Actions.SET_STATUS_SUCCESS:
       return Object.assign({},state,{isLoading:"false"});
       case Actions.SET_STATUS_FAILURE:
       return Object.assign({},state,{isLoading:"false",isError:"true",errorMessage:action.payload});

       case Actions.CHANGE_STATUS_REQUEST:
       return Object.assign({},state,{isLoading:"true"});
       case Actions.CHANGE_STATUS_SUCCESS:
       return Object.assign({},state,{isLoading:"false"});
       case Actions.CHANGE_STATUS_FAILURE:
       return Object.assign({},state,{isLoading:"false",isError:"true",errorMessage:action.payload});
        default:
        return state;
    }
}