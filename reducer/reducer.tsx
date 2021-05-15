const initialState = {
  res: {}
}

const reducer = (state=initialState,action)=>{
  switch(action.type){
    case "COUNTRIES":
      return{
        ...state,
        res: action.value
      }
      break;
    default:
      return state

  }
}

export default reducer;