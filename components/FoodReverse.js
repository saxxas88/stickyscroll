import { html, render } from "lighterhtml";
import "@style/food_reverse.css";


import itemTable from "@assets/food_parts/wood_plate.png";
import itemCheese from "@assets/food_parts/cheese.png";
import itemToast from "@assets/food_parts/toast.png";
import itemTomato_a from "@assets/food_parts/tomato_a.png";
import itemTomato_b from "@assets/food_parts/tomato_b.png";
import itemCucumber_a from "@assets/food_parts/cucumber_a.png";
import itemCucumber_b from "@assets/food_parts/cucumber_b.png";

import Spinner from '@components/Spinner';
import LoremIpsum from "@components/LoremIpsum";

import { useEffect } from "@utils/screwdriver";

function Sticker() {

  useEffect("#container_stickirize_food_r")
  .then((res) => {
    res && onLoadContainer();
  })
  .catch((err) => false);

 
  function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent) || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
  }

  const redrawing = async()=>{
    window.scrollTo({
      top: 0
    });
    document.querySelector('#container_stickirize_food_r .loading').style.display='block';
    document.querySelector('#container_stickirize_food_r #stickirize_food_r').style.visibility='hidden';
         
    await render(document.querySelector('#stickirize_food_r'),Food);     
    useEffect("#stickirize_food_r")
    .then((res) => {
      res && onLoad();
    })
    .then(()=>{
      document.querySelector('#container_stickirize_food_r .loading').style.display='none';
      document.querySelector('#container_stickirize_food_r #stickirize_food_r').style.visibility='visible';
    })
    .catch((err) => false);
  }

  const onLoadContainer = async()=>{

      redrawing();
      console.log('LOAD')
     
     window.onresize = ()=>{
      if(!isMobile()){
        redrawing();
        console.log('RESIZE',{is_mobile:isMobile(),navigator:navigator.userAgent})
      }
     }

    screen.orientation.addEventListener("change", (event) => {
      
      if(isMobile()) {
        redrawing();
        console.log('ORIENTATION_CHANGE',{is_mobile:isMobile(),navigator:navigator.userAgent})
      }
     /*  const type = event.target.type;
      const angle = event.target.angle;
      console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`); */
    });

           
    }

  const onLoad = async () => {
   
    // * containers scrollables    
    // ** container scrollable fixed
    const container_scrollables = document.querySelector(
      ".scrollable_container"
    );
    // ** container scrollable copy relative
    const container_scrollables_copy = document.querySelector(
        ".scrollable_container_copy"
      );
    // *** container elements scrollables
    const scrollable = document.querySelector(".scrollable");

    // elements scrollables
    const elem_table = document.querySelector("#item_table");
    const elem_toast = document.querySelector("#item_toast");
    const elem_cheese = document.querySelector("#item_cheese");
    const elem_tomatoA = document.querySelector("#item_tomato_a");
    const elem_tomatoB = document.querySelector("#item_tomato_b");
    const elem_cucumberA = document.querySelector("#item_cucumber_a");
    const elem_cucumberB  = document.querySelector("#item_cucumber_b");


    // offsets of elements scrollables
    let offsetTopContainer , offsetTopTable, offsetTopToast,offsetTopCheese,offsetTopTomatoA,offsetTopTomatoB,offsetTopCucumberA,offsetTopCucumberB ,limitHeight ;

    let elements = [elem_table,elem_toast,elem_cheese,elem_tomatoA,elem_tomatoB,elem_cucumberA,elem_cucumberB];

    let current = 0;
    let target = 0;
    const ease = 1;
    let variable = 0;
    const lerp = (start, end, t) => {
      return start * (1 - t) + end * t;
    };

    // init containers properties (height,top)
    const initContainers = () => {
        // set min height body
      document.body.style.minHeight = `${
        container_scrollables.getBoundingClientRect().height
      }px`;

      // set fixed contrainer top
      container_scrollables.style.top =
      container_scrollables_copy.getBoundingClientRect().top + "px";

      // set parallel of fixed container height
    container_scrollables_copy.style.height = container_scrollables.getBoundingClientRect().height+'px';
    
     // offsets of elements scrollables
     offsetTopContainer = container_scrollables.offsetTop;
     offsetTopTable = elem_table.offsetTop + offsetTopContainer;
     offsetTopToast =elem_toast.offsetTop + offsetTopContainer;
     offsetTopCheese = elem_cheese.offsetTop + offsetTopContainer;
     offsetTopTomatoA = elem_tomatoA.offsetTop + offsetTopContainer;
     offsetTopTomatoB = elem_tomatoB.offsetTop + offsetTopContainer;
     offsetTopCucumberA = elem_cucumberA.offsetTop + offsetTopContainer;
     offsetTopCucumberB = elem_cucumberB.offsetTop + offsetTopContainer;
   
     // limits to stop translation
     limitHeight =
     scrollable.getBoundingClientRect().height - scrollable.offsetTop;
     return true;
    };
    
    const smoothScroll = () => {
      target = window.scrollY;
       
      current = lerp(current, target, ease);
      container_scrollables.style.transform = `translate3d(0, ${-current}px,0)`;
      stickirize();
      window.onscroll=smoothScroll;
    };
    
    
    const stickirize = () => {
      //scroll normale

      //scroll sticky
     

      elements.forEach((elem,i)=>{

        if (current > 0 && current < ( elem.offsetTop + offsetTopContainer))
            elem.style.transform = `translate3d(0,${0}px, 0)`;

        if (
            current >= (elem.offsetTop + offsetTopContainer) &&
            current <= limitHeight + elem.offsetTop - i*100
          ) {
            
            elem.style.transform = `translate3d(0,${Number(
                current - (elem.offsetTop + offsetTopContainer ) 
              ).toFixed(2)}px, 0)`;
              variable = 0;
          }

           if (
            current > limitHeight + elem.offsetTop - i*100
          ) {
            // ??????
           variable= variable + 50;
            elem.style.transform = `translate3d(0,${Number(
                current  - (elem.offsetTop + offsetTopContainer - variable ) 
              ).toFixed(2)}px, 0)`;
          } 
      });
    
     

    };

    initContainers();
    smoothScroll(); 
  
  };
 
  
  const Food = ()=> html.node`<div class="scrollable_container_copy"></div>
  <div class="scrollable_container">

    <div class="scrollable">
        ${LoremIpsum({size:20})}
     
        <div id="item_table" class="item">
                <img src="${itemTable}"  alt="Tree Table" />
        </div>
        <div id="item_toast" class="item">
                <img src="${itemToast}"  alt="Toast" />
        </div>
        <div id="item_cheese" class="item">
                <img src="${itemCheese}"  alt="Slice Cheese" />
        </div>
        <div id="item_tomato_a" class="item">
                <img src="${itemTomato_a}"  alt="Slice Tomato" />
        </div>
        <div id="item_tomato_b" class="item">
                <img src="${itemTomato_b}"  alt="Slice Tomato" />
        </div>
        <div id="item_cucumber_a" class="item">
                <img src="${itemCucumber_a}"  alt="Slice Cucumber" />
        </div>
        <div id="item_cucumber_b" class="item">
                <img src="${itemCucumber_b}"  alt="Slice Cucumber" />
        </div>
    </div>
    
  </div>`;

  return html.node`
  <div id="container_stickirize_food_r">
         ${Spinner()}
        <div id="stickirize_food_r"></div>
    </div>
   
`;
}
export default Sticker;
