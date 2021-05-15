import axios from "axios";
import {call,put,delay} from "@redux-saga/core/effects";

export function *getData(){
  
  const res = yield call(getCountries)
  const { data } = res;
  console.log(data)
  yield put({type:"COUNTRIES",value:res.data})

}

function getCountries(){
  return axios.get("https://restcountries.eu/rest/v2/all")
};