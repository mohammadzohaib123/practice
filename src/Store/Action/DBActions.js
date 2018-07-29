export default class DBActions
{
    static GET_ORDER_REQUEST='GET_ORDER_REQUEST';
    static GET_ORDER_SUCCESS='GET_ORDER_SUCCESS';
    static GET_ORDER_FAILURE='GET_ORDER_FAILURE';

    static SET_ITEM_SUCCESS='SET_ITEM_SUCCESS';
    static SET_ITEM_FAILURE='SET_ITEM_FAILURE';

    static SET_STATUS_REQUEST='SET_STATUS_REQUEST';
    static SET_STATUS_SUCCESS='SET_STATUS_SUCCESS';
    static SET_STATUS_FAILURE='SET_STATUS_FAILURE';

    static CHANGE_STATUS_REQUEST='CHANGE_STATUS_REQUEST';
    static CHANGE_STATUS_SUCCESS='CHANGE_STATUS_SUCCESS';
    static CHANGE_STATUS_FAILURE='CHANGE_STATUS_FAILURE';

    static setItem(array){
        return{
            type:DBActions.SET_ITEM_SUCCESS,
            payload:array
        }
    }

    static changeOrder(order_Key){
        return{
            type:DBActions.CHANGE_STATUS_REQUEST,
            payload:order_Key
        }
    }
    static setOrders(order_Key){
        console.log(order_Key);
        return{
            type:DBActions.SET_STATUS_REQUEST,
            payload:order_Key
        }
    }
    static statusFailure(message){
        return{
            type:DBActions.SET_STATUS_FAILURE,
            payload:message
        }
    }
    
    static getOrders(){
      return {
        type:DBActions.GET_ORDER_REQUEST,
        };
    }
    static orderFailure(message){
        return{
            type:DBActions.GET_ORDER_FAILURE,
            payload:message
        }
    }
}