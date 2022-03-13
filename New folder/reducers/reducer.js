const reducer = (state,action) => {

  if(state === undefined){
      return {
          Amount:10000000000000000000000000000000000000000000000000000000,
      };
   }
   switch (action.type) {
     case "add":
       state.Amount = state.Amount + parseInt(action.payload);
        
       break;

     case "remove":
         if(state.Amount > 7000){
            state.Amount = state.Amount - action.payload;
         }
       
       break;

     default:
       break;
   }

   return {...state};

};

export default reducer;