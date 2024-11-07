
import {render,html} from 'lighterhtml';
/* import Layout from '@components/Layout';
import Stickerz from '@components/Stickerz';*/
/* import Sticker from '@components/Sticker';  */
 /*  import Tutorial1 from '@components/Tutorial1';  
 import Tutorial2 from '@components/Tutorial2';   */
 import Food from '@components/Food';

 import FoodFooter from '@components/FoodFooter';
 import FoodNavbar from '@components/NavFooter';

function App(){
     

    return (
        html.node`
        ${FoodNavbar()}
        <section></section>
            ${Food()}
        <section></section>
        <section></section>
        ${FoodFooter()}
        
        `
    )
}

export default App;



