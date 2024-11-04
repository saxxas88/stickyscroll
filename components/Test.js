import { html } from "lighterhtml";
import { useEffect } from "@utils/screwdriver";




const Test = ()=>{
    
    function cliccami(ev) {
 
        console.log('ciavole');
      }
      const loadvalue=()=>{console.log(document.querySelector('button').innerText)}
    //loadvalue()

    useEffect('button')
    .then(res=>{
        res && loadvalue()
      
    })
    .catch(err=>false)

    return html.node`
  <div style="position:relative;z-index:10;">
  <button onclick=${cliccami}>CIAVOLE</button>
    
    </div>
`;}

export default Test