import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component 
{
  constructor(){
    super();
    this.state = {
      mycards:[
        {id:1,
      title: "What is lorem ipsum? 1",
    description: "jdksds sdjvnjvkdsn dsvjlnjvdsn jlkvdsnkjnvdsn vjdnjcv jcbnaskjncxnbzndckjncd dcjndcj jnczxjn jnxcjznjckd jcnzxjncj mnxzcnxzc ncxzjn",
     buttontext: "Ok"
      },
      {id: 2,
        title: "What is lorem ipsum? 2",
      description: "jdksds sdjvnjvkdsn dsvjlnjvdsn jlkvdsnkjnvdsn vjdnjcv jcbnaskjncxnbzndckjncd dcjndcj jnczxjn jnxcjznjckd jcnzxjncj mnxzcnxzc ncxzjn",
       buttontext: "Ok"
        },
        {id :3,
          title: "What is lorem ipsum 3?",
        description: "jdksds sdjvnjvkdsn dsvjlnjvdsn jlkvdsnkjnvdsn vjdnjcv jcbnaskjncxnbzndckjncd dcjndcj jnczxjn jnxcjznjckd jcnzxjncj mnxzcnxzc ncxzjn",
         buttontext: "Ok"
          },
          {
            title: "What is lorem ipsum 4?",
          description: "jdksds sdjvnjvkdsn dsvjlnjvdsn jlkvdsnkjnvdsn vjdnjcv jcbnaskjncxnbzndckjncd dcjndcj jnczxjn jnxcjznjckd jcnzxjncj mnxzcnxzc ncxzjn",
           buttontext: "Ok"
            },
            {
              title: "What is lorem ipsum 5?",
            description: "jdksds sdjvnjvkdsn dsvjlnjvdsn jlkvdsnkjnvdsn vjdnjcv jcbnaskjncxnbzndckjncd dcjndcj jnczxjn jnxcjznjckd jcnzxjncj mnxzcnxzc ncxzjn",
             buttontext: "Ok"
              }
    ]
  };
  }
  render(){
   const Items =  this.state.mycards.map((item,index) =>{
   return(
   <div className="card" key={item.id}>
   <div className='cardHeader'>{item.title}</div>
<div className='cardBody'>{item.description}</div>
<div className='cardFooter'><button>{item.buttontext}</button></div>
</div>)

   
   })
    
  return (
      <div className="App">
        
      
    {Items}
          
        
     
        
      </div>
    );
  }
}

export default App;