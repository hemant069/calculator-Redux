import { COUNTER_DECREMENT,COUNTER_INCREMENT } from "./action.type";



export const reducer=(state,action)=>{
console.log(action);
switch (action.type){
    case COUNTER_INCREMENT:{
        state.count++;
       return  {...state};
    }
    case COUNTER_DECREMENT:{
        state.count--;
      return  { ...state}
    }
    case 'Add':{
        let num = Number(action.payload.Value);
         state.count = action.payload.count+num
        return{...state}
    }
    case 'Sub':{
        let num = Number(action.payload.Value);
         state.count = action.payload.count-num
        return{...state}
    }
    case 'Mul':{
        let num = Number(action.payload.Value);
         state.count = action.payload.count*num
        return{...state}
    }
    case 'Div':{
        let num = Number(action.payload.Value);
         state.count = action.payload.count/num
        return{...state}
    }

    default:{
        return state;
    }
}
}




