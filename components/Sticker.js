import "@style/sticker.css";
import { html } from "lighterhtml";

import itemCenter from "@assets/vite.svg";
import itemBack from "@assets/lightning-back.png";
import itemFront from "@assets/lightning-front.png";

import { useEffect } from "@utils/screwdriver";
import LoremIpsum from "@components/LoremIpsum";



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
        
    <div class="scrollable_container">
       
            <div class="scrollable">
                ${LoremIpsum()}
                <div id="item_center">
                    <a href="#" data-name="link" onclick=${clickPrevent}>
                        <img src="${itemCenter}" class="logo" alt="Center" />
                    </a>
                </div>
                <div id="item_back">
                    <img src="${itemBack}" class="" alt="Back " />     
                </div>
                <div id="item_front"> 
                    <img src="${itemFront}" class="" alt="Front " /> 
                </div> 
                <section></section>
            </div>
        
    </div>
   
`;

const onLoad = () => {
     // container elements scrollable (must be fixed)
   const container_scrollables =  document.querySelector('.scrollable_container');
    // container elements to stickerize
  const scrollable = document.querySelector(".scrollable");

  // elements
  const stickyCenter = document.querySelector("#item_center");
  const stickyBack = document.querySelector("#item_back");
  const stickyFront = document.querySelector("#item_front");

  let current = container_scrollables.offsetTop  ;
  let target = 0;
  const ease = 0.35;
console.log(current)
  const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
  };

  // min height body
  const init = () => {
     document.body.style.minHeight = `${
     container_scrollables.getBoundingClientRect().height
    }px`;  
   
  };

  const smoothScroll = () => {

    target = window.scrollY ; 
  
    current = lerp(current, target, ease);
    container_scrollables.style.transform = `translate3d(0, ${-current   }px,0)`;
    stickirize();
    window.requestAnimationFrame(smoothScroll);
  };

 
  const stickirize = () => {
   
    const firstElem = stickyBack;
    const secondElem = stickyCenter;
    const thirdElem = stickyFront;

    const currentOffsetTopFirst = firstElem.offsetTop / window.innerHeight;

    const currentOffsetTopSecond = secondElem.offsetTop / window.innerHeight;

    const currentOffsetTopThird = thirdElem.offsetTop / window.innerHeight;

    const limitHeight = scrollable.getBoundingClientRect().height  - window.innerHeight;

    let offsetFirst =
      window.innerHeight * currentOffsetTopFirst + container_scrollables.offsetTop;
    let offsetSecond =
      window.innerHeight * currentOffsetTopSecond + container_scrollables.offsetTop;
    let offsetThird =
      window.innerHeight * currentOffsetTopThird + container_scrollables.offsetTop;

  
      //scroll normale
    if (current < offsetFirst) {
      firstElem.style.transform = `translate3d(0,0, 0)`;
      thirdElem.style.transform = `translate3d(0,0, 0)`;
      secondElem.style.transform = `translate3d(0,0, 0)`;
    }

    //scroll sticky
    if (
      current >= offsetFirst  &&
      current <= offsetFirst + limitHeight
    ) {
      
      firstElem.style.transform = `translate3d(0,${
        current - offsetFirst
      }px, 0)`;
     
    }

    if (
      current >= offsetSecond &&
      current <=
        offsetSecond + limitHeight  &&
        !(current > offsetFirst + limitHeight  )
    ) {
      secondElem.style.transform = `translate3d(0,${
        current - offsetSecond
      }px, 0)`;

    }

    if (
      current >= offsetThird &&
      current <= offsetThird + limitHeight  &&
      !(current > offsetFirst + limitHeight  )
    ) {
      thirdElem.style.transform = `translate3d(0,${
        current - offsetThird
      }px, 0)`;
    }
  };


  init();
  smoothScroll();
};

export default Sticker;
