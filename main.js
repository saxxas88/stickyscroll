
import {render,html} from 'lighterhtml';
/* import Layout from '@components/Layout';
import Stickerz from '@components/Stickerz';*/
/* import Sticker from '@components/Sticker';  */
 /*  import Tutorial1 from '@components/Tutorial1';  
 import Tutorial2 from '@components/Tutorial2';   */

function App(){

    const renderTutorialOne = async()=>{
       try{
    
        render(document.getElementById('container-tutorial'),html.node``)
         const Tutorial1 = await import('@components/Tutorial1') ; 
        render(document.getElementById('container-tutorial'),Tutorial1.default)
       }catch(err){console.log(err.message)}
    }

    const renderTutorialTwo = async()=>{
        render(document.getElementById('container-tutorial'),html.node``)
       const Tutorial2 = await import('@components/Tutorial2') ; 
        render(document.getElementById('container-tutorial'),Tutorial2.default)
    }


    return (
        html.node`
        <div class="container-btn">
            <button onclick=${renderTutorialOne}>Tutorial_1</button>
            <button onclick=${renderTutorialTwo}>Tutorial_2</button>
        </div>
        <div id="container-tutorial" class="container-tutorial">

        </div>
        `
    )
}

export default App;



