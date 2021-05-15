import axios from "axios";
import {call,put,delay} from "@redux-saga/core/effects";

export function *getData(){
  delay(5000)
  const res = yield call(getCountries)
  const { data } = res;
  console.log(data)
  yield put({type:"COUNTRIES",value:data})

}

function *getCountries(){
  return axios.get("https://restcountries.eu/rest/v2/all")
};