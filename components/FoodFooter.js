import { html } from "lighterhtml";
import '@style/footer.css' 
import { useEffect } from "@utils/screwdriver";

const Footer = ()=>{
    
    useEffect('footer.food_footer')
    .then(res=>{
        res 
      
    })
    .catch(err=>false)

    return html.node`
        <footer class="food_footer">
           <h2>FOOTER</h2>
        </footer>
`;}

export default Footer