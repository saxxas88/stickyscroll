import "@style/tutorial1.css";
import { html } from "lighterhtml";

import itemCenter from "@assets/vite.svg";
import itemBack from "@assets/lightning-back.png";
import itemFront from "@assets/lightning-front.png";
import LoremIpsum from '@components/LoremIpsum';

import { useEffect } from "@utils/screwdriver";

function Sticker(){
    useEffect('.scrollable_container')
    .then(res=>{
        res && onLoad()
      
    })
    .catch(err=>false)

function clickPrevent(ev) {
  ev.preventDefault();
  console.log(ev?.currentTarget?.dataset?.name);
}

const onLoad = () => {
  const container_scrollables_copy =  document.querySelector('.scrollable_container_copy');
   const container_scrollables =  document.querySelector('.scrollable_container');
  container_scrollables.style.top=container_scrollables_copy.offsetTop+'px';
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
    container_scrollables.style.transform = `translate3d(0, ${-window.scrollY}px,0)`;
    stickirize();
    window.requestAnimationFrame(smoothScroll);
  };

  const stickirize = () => {
   
    const offsetTopContainer = container_scrollables.offsetTop;

    const elem_center = stickyCenter;
    const elem_back = stickyBack;
    const elem_front = stickyFront;

    const currentOffsetElemCenter = elem_center.offsetTop / window.innerHeight;
    const currentOffsetElemBack = elem_back.offsetTop / window.innerHeight;
    const currentOffsetElemFront = elem_front.offsetTop / window.innerHeight;

    let offsetTopElemCenter =
      window.innerHeight * currentOffsetElemCenter + offsetTopContainer;
      let offsetTopElemBack =
      window.innerHeight * currentOffsetElemBack + offsetTopContainer;
      let offsetTopElemFront =
      window.innerHeight * currentOffsetElemFront + offsetTopContainer;

       /*  const limitHeight = scrollable.getBoundingClientRect().height  - window.innerHeight; */
     const limitHeight = scrollable.getBoundingClientRect().height - scrollable.offsetTop;
   
      //scroll normale
    if (window.scrollY > 0 && window.scrollY < offsetTopElemCenter) {
   
    
    elem_center.style.transform = `translate3d(0,${
      0
    }px, 0)`; 
    elem_back.style.transform = `translate3d(0,${
      0
    }px, 0)`; 
    elem_front.style.transform = `translate3d(0,${
      0
    }px, 0)`; 
    } 
   

    //scroll sticky

     //first elem sticky
     if (
      window.scrollY >= offsetTopElemBack && (window.scrollY <=  limitHeight)
    ) {
       elem_back.style.transform = `translate3d(0,${
        Number(window.scrollY - offsetTopElemBack).toFixed(2)
      }px, 0)`; 
 
    } 

    //second elem sticky
    if (
      window.scrollY >= offsetTopElemCenter  /* && window.scrollY <= offsetTopElemCenter + limitHeight */  && !(window.scrollY > limitHeight)
    ) {
       elem_center.style.transform = `translate3d(0,${
        Number(window.scrollY - offsetTopElemCenter).toFixed(2)
      }px, 0)`; 
      
     
    }

    //third elem sticky
      if (
        window.scrollY >= offsetTopElemFront /* && window.scrollY <= offsetTopElemFront + limitHeight */ && !(window.scrollY >  limitHeight)
      ) {
         elem_front.style.transform = `translate3d(0,${
          Number(window.scrollY - offsetTopElemFront).toFixed(2)
        }px, 0)`; 
       
      } 

      if (window.scrollY > 0 && window.scrollY < offsetTopElemCenter) {
        console.log('a')
      }
      if (
        window.scrollY >= offsetTopElemCenter  /* && window.scrollY <= offsetTopElemCenter + limitHeight */  && !(window.scrollY > limitHeight)
      ) 
      console.log('b')

      if (
        window.scrollY > limitHeight
      ) 
      console.log('c')
  };


  init();
  smoothScroll();
};

return  html.node`
      <section class="custom"></section>
      <div class="scrollable_container_copy"></div>
    <div class="scrollable_container">
   
            <div class="scrollable">
                ${LoremIpsum()}
                ${LoremIpsum()}
                <div id="item_front">
                    <a href="#" data-name="link" onclick=${clickPrevent}>
                        <img src="${itemFront}" class="logo" alt="Front" />
                    </a>
                </div>
                <div id="item_center">
                    <a href="#" data-name="link" onclick=${clickPrevent}>
                        <img src="${itemCenter}" class="logo" alt="Center" />
                    </a>
                </div>
                <div id="item_back">
                    <a href="#" data-name="link" onclick=${clickPrevent}>
                        <img src="${itemBack}" class="logo" alt="Back" />
                    </a>
                </div>
                
            </div>
            <section></section>
                <section></section>
    </div>
   
`;


}
export default Sticker;
