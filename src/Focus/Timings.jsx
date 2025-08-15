import React, { useContext } from 'react';
import './Focus.css'
import '../Home.css'
import { ThemeContext } from '../Context';

const Timings = ({setTimeLeft}) => {


const {theme} = useContext(ThemeContext);

 const change=(val)=>{
    setTimeLeft(val*60)
 }
  return (
    <div className='time idsf'>
        <div className={`seltime ${theme? '' : 'darktime'}`} onClick={()=>{change(5)}}>5 min</div>
        <div className={`seltime ${theme? '' : 'darktime'}`} onClick={()=>{change(15)}}>15 min</div>
        <div className={`seltime ${theme? '' : 'darktime'}`}onClick={()=>{change(30)}}>30 min</div>
        <div className={`seltime ${theme? '' : 'darktime'}`}onClick={()=>{change(60)}}>60 min</div>
    </div>
  )
}

export default React.memo(Timings)