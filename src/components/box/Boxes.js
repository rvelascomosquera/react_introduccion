import {useState} from "react";
import Box from './Box';
import './Boxes.css'

export default function Boxes(){

  const [count1, updateCount1] = useState(0);
  const [count2, updateCount2] = useState(0);
  const [count, updateCount] = useState(0);
  
  const maximo = (count1 > count2)? 'Boton 1' : 'Bonton 2'
  
  function childClicked(number, child) {
    console.log('click boton');
    if (child === 1) {
      updateCount1(number);
    } else {
      updateCount2(number);
    }
    updateCount(count + 1);
  }
   
  return (
    <>
    <div className="container">
    <h2>Ejercicio 2 </h2>
    <h3> Padre </h3>
    <p>Numero total de clics: {count}</p>
    <p>Mayor número de clics dados en el:  {maximo}</p>
    <div className="container__box">
      <Box name="Boton 1" count={count1} clicked={(number) => {
        childClicked(number, 1);
      }} />
      <Box name="Boton 2" count={count2} clicked={(number) => {
        childClicked(number, 2);
      }} />
    </div>
    </div>
    
    </>
  )
}