import { createStore } from "redux";

const INITIAL_STATE = {
    counter: 0,
    privacy: false
}
const reducer = (store = INITIAL_STATE, action) => {
   
    if(action.type === "INCREMENT") {
       return {...store, counter: store.counter + action.payload.num};
    }else if(action.type === "DECREMENT"){
       return {...store, counter: store.counter - action.payload.num};
    }else if(action.type === "ADD"){
       return {...store, counter: store.counter + action.payload.num};
    }
    else if(action.type === "SUBSTRACT"){
       return {...store, counter: store.counter - action.payload.num};
    }else if(action.type === "PRIVACY"){
       return {...store, privacy : !store.privacy};
    }
    return store;
}

export const counterStore = createStore(reducer);





