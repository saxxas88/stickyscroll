import "@style/tutorial2.css";
import { html } from "lighterhtml";

import itemCenter from "@assets/vite.svg";
import itemBack from "@assets/lightning-back.png";
import itemFront from "@assets/lightning-front.png";
import LoremIpsum from '@components/LoremIpsum';

import { useEffect } from "@utils/screwdriver";


    useEffect('.scrollable_container')
    .then(res=>{
        res && onLoad()
      
    })
    .catch(err=>false)

function clickPrevent(ev) {
  ev.preventDefault();
  console.log(ev?.currentTarget?.dataset?.name);
}

const Sticker = html.node`
      <section></section>
      <section></section>
    <div class="scrollable_container">
   
            <div class="scrollable">
                ${LoremIpsum()}
                ${LoremIpsum()}
              
                <div id="item_center">
                    <a href="#" data-name="link" onclick=${clickPrevent}>
                        <img src="${itemCenter}" class="logo" alt="Center" />
                    </a>
                </div>
               
                
            </div>
            
    </div>
    <section></section>
    <section></section>
`;

const onLoad = () => {
 
   const container_scrollables =  document.querySelector('.scrollable_container');
  
  const scrollable = document.querySelector(".scrollable");

  // elements
  const stickyCenter = document.querySelector("#item_center");
  const stickyBack = document.querySelector("#item_back");
  const stickyFront = document.querySelector("#item_front");

  let current = 0  ;
  let target = 0;
  const ease = 0.35;

  const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
  };

  // min height body
  const init = () => {
      document.body.style.minHeight = `${container_scrollables.getBoundingClientRect().height}px`;      
  };

  const smoothScroll = () => {

    target = window.scrollY ; 
    current = lerp(current, target, ease);
    stickirize();
    window.requestAnimationFrame(smoothScroll);
  };

  const stickirize = () => {
   
    const offsetTopContainer = container_scrollables.offsetTop;

    const elem_center = stickyCenter;
   /*  const elem_back = stickyBack;
    const elem_front = stickyFront; */

    const currentOffsetElemCenter = elem_center.offsetTop / window.innerHeight;
   /*  const currentOffsetElemBack = elem_back.offsetTop / window.innerHeight;
    const currentOffsetElemFront = elem_front.offsetTop / window.innerHeight; */

    let offsetTopElemCenter =
      window.innerHeight * currentOffsetElemCenter + offsetTopContainer;
     /*  let offsetTopElemBack =
      window.innerHeight * currentOffsetElemBack + offsetTopContainer;
      let offsetTopElemFront =
      window.innerHeight * currentOffsetElemFront + offsetTopContainer; */

       /*  const limitHeight = scrollable.getBoundingClientRect().height  - window.innerHeight; */
     const limitHeight = scrollable.getBoundingClientRect().height - scrollable.offsetTop;
   
      //scroll normale
    if (window.scrollY > 0 && window.scrollY < offsetTopElemCenter) {    
      /*   elem_center.classList.remove('sticky'); 
        elem_back.classList.remove('sticky'); 
        elem_front.classList.remove('sticky');  */
    } 
   

    //scroll sticky


    //second elem sticky
    if (
      window.scrollY >= offsetTopElemCenter   && window.scrollY <= offsetTopElemCenter + limitHeight   && !(window.scrollY > limitHeight) && !elem_center.classList.contains('sticky')
    ) {
        elem_center.style.top=elem_center.getBoundingClientRect().top+'px'
       elem_center.classList.add('sticky'); 
       
    }

   

      if (window.scrollY > 0 && window.scrollY < offsetTopElemCenter) {
        console.log('a',window.scrollY,offsetTopElemCenter)
      }
      if (
        window.scrollY >= offsetTopElemCenter  /* && !(window.scrollY > limitHeight) */
      ) 
      console.log('b',window.scrollY,offsetTopElemCenter)

      if (
        window.scrollY > limitHeight
      ) 
      console.log('c')
  };


  init();
  smoothScroll();
};

export default Sticker;
