import produce from 'immer';

const INITIAL_STATE={
  customer:{
    name:"goku"
  },
  itens:[
    "uva","banana", "maca"
  ]
}

function shop(state = INITIAL_STATE, action){
  switch(action.type){
    case 'SET_CUSTOMER': {
      return produce(state, (draft)=>{
        draft.customer = action.customer;
      })
    }
    case 'SET_ITENS': {
      return produce(state, (draft)=>{
        draft.itens = action.itens;
      })
    }
    default:
      return state;
  }

}

export default shop;