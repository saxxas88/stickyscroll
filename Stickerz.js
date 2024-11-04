import "@style/stickerz.css";
import { html } from "lighterhtml";

import itemCenter from "@assets/vite.svg";
import itemBack from "@assets/lightning-back.png";
import itemFront from "@assets/lightning-front.png";

import { useEffect } from "@utils/screwdriver";
import LoremIpsum from "@components/LoremIpsum";



    useEffect('.cont')
    .then(res=>{
        res && onLoad()
      
    })
    .catch(err=>false)

function clickPrevent(ev) {
  ev.preventDefault();
  console.log(ev?.currentTarget?.dataset?.name);
}


const Stickerz = html.node`

<div class="cont">
    <section></section>
    <div id="test"></div>
    <section></section>
    
</div>
<section style="background:yellow;"></section>
`;

const onLoad = () => {
   let cont = document.querySelector('.cont')
   let elem = document.querySelector('#test');
  let current = cont.offsetTop  ;
  let target = 0;
  const ease = 0.35;
  let pass=false;
  const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
  };

  // min height body
  const init = () => {
    
  };

  const smoothScroll = () => {
   
    target = window.scrollY ; 
    
    current = lerp(current, target, ease);
    
    if(window.scrollY >= elem.getBoundingClientRect().top - window.scrollY/60 && window.scrollY <= elem.getBoundingClientRect().top + 400 && !elem.classList.contains('sticky')){
        console.log('x')
        elem.classList.add('sticky')
        elem.classList.remove('relative')
            elem.style.top=elem.getBoundingClientRect().top-window.scrollY/60+'px';
            pass=true
    }
     if (window.scrollY > elem.getBoundingClientRect().top + 400){
        console.log('y')
        elem.classList.add('relative')
        elem.classList.remove('sticky')
        elem.style.transform=`translate3d(-50%,-${-window.scrollY*60}px,0`;
        
    }
    
    window.requestAnimationFrame(smoothScroll);
  };

  smoothScroll()
};

export default Stickerz;
