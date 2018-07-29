import { Observable } from "rxjs";
import DBActions from "../Action/DBActions";
import { getData, setStatus, changeStatus} from '../Firebase/firebase';


export class DBEpic{
    static getOrdersFromFirebase(action$) {
        console.log(action$)
        return action$.ofType(DBActions.GET_ORDER_REQUEST).switchMap(({payload}) => {
            console.log(action$)
            return Observable.fromPromise(getData()).map((array) => {
                console.log(array)
                return {
                    type:DBActions.GET_ORDER_SUCCESS,
                    payload:array
                }
            }).catch((error)=>{
                return Observable.of(DBActions.orderFailure(error.message))
            })
        })
    }

    static setStatusOnFirebase(action$){
        return action$.ofType(DBActions.SET_STATUS_REQUEST).switchMap(({payload}) => {
            return Observable.fromPromise(setStatus(payload)).map((array)  => {
                return{
                    type:DBActions.SET_STATUS_SUCCESS,
                    payload:array
                }
            }).catch((error) =>{
                return Observable.of(DBActions.statusFailure(error.message))
            })
        })
    }
    static changeStatusOnFirebase(action$){
        return action$.ofType(DBActions.CHANGE_STATUS_REQUEST).switchMap(({payload}) => {
            console.log(payload)
            return Observable.fromPromise(changeStatus(payload)).map((array)  => {
                return{
                    type:DBActions.CHANGE_STATUS_SUCCESS,
                    payload:array
                }
            }).catch((error) =>{
                return Observable.of(DBActions.statusFailure(error.message))
            })
        })
    }
}