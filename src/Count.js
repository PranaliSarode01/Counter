import React, {useState} from "react";

const Count = () => {
    
    const [num, setNum] = useState(0);
    const decNum = () => {
        setNum(num - 1);   
     };
     
     const incNum = () => {
         setNum(num + 1);   
     };
 
    return(
        <>
        <div class= "main" >
           <div id="container">
              <h2>Counter</h2>
                <h1>{num}</h1>
        <div id="buttons">
             <button onClick={decNum} >Decrement</button>
              &nbsp; &nbsp;
             <button onClick={incNum} >Increment</button>
       </div>
    </div>
</div>
        </> 
    ) 
}
export default Count;