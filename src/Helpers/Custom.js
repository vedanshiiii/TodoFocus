import { useState,useEffect } from "react";

export const useSessionStorage=(key, def)=>{

     const [val,setVal] = useState(()=>{
        try{
            let e = JSON.parse(sessionStorage.getItem(key));
         if(e){
            return e;
         }else{
            return def;
          }
        }catch{
            return def
        }
        
    });

    useEffect(()=>{
        try{
            sessionStorage.setItem(key,JSON.stringify(val));
        }catch{
            //
        }
    },[key,val])
    
   return [val,setVal]
}



export const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      // Start a timer whenever value changes
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      // Cleanup: clear timer if value changes before delay finishes
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
  
    return debouncedValue;
  };
  