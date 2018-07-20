import { Observable } from "rxjs";
import Actions from "../Action/Actions";
import { getData, setStatus } from '../Firebase/firebase';


export class Epic{
    static getOrdersFromFirebase(action$) {
        console.log(action$)
        return action$.ofType(Actions.GET_ORDER_REQUEST).switchMap(({payload}) => {
            console.log(action$)
            return Observable.fromPromise(getData()).map((array) => {
                console.log(array)
                return {
                    type:Actions.GET_ORDER_SUCCESS,
                    payload:array.val()
                }
            }).catch((error)=>{
                return Observable.of(Actions.orderFailure(error.message))
            })
        })
    }

    static setStatusOnFirebase(action$){
        return action$.ofType(Actions.SET_STATUS_REQUEST).switchMap(({payload}) => {
            console.log(action$)
            return Observable.fromPromise(setStatus()).map((array)  => {
                return{
                    type:Actions.SET_STATUS_SUCCESS,
                    payload:array.val()
                }
            }).catch((error) =>{
                return Observable.of(Actions.statusFailure(error.message))
            })
        })
    }
}