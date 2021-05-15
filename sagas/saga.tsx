import axios from "axios";
import {call,put} from "@redux-saga/core/effects";

export function *getData(){
  const res = yield call(getCountries)
  yield put({type:"COUNTRIES",value:res})

}

function *getCountries(){
  return axios.get("https://restcountries.eu/rest/v2/all")
}