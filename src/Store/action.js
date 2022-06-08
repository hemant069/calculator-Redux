import { COUNTER_INCREMENT,COUNTER_DECREMENT } from "./action.type";

export const add=()=>({type:COUNTER_INCREMENT});
export const sub=()=>({type:COUNTER_DECREMENT});

export const AddNumber=(payload)=>{
    return {
        type:'Add',
        payload
    }
}

export const AddSub=(payload)=>{
    return {
        type:'Sub',
        payload
    }
}

export const AddMul=(payload)=>{
    return {
        type:'Mul',
        payload
    }
}
export const AddDivide=(payload)=>{
    return {
        type:'Div',
        payload
    }
}