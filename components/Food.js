import { html } from "lighterhtml";
import "@style/food.css";


import itemTable from "@assets/food_parts/wood_plate.png";
import itemCheese from "@assets/food_parts/cheese.png";
import itemToast from "@assets/food_parts/toast.png";
import itemTomato_a from "@assets/food_parts/tomato_a.png";
import itemTomato_b from "@assets/food_parts/tomato_b.png";
import itemCucumber_a from "@assets/food_parts/cucumber_a.png";
import itemCucumber_b from "@assets/food_parts/cucumber_b.png";

import LoremIpsum from "@components/LoremIpsum";

import { useEffect } from "@utils/screwdriver";

function Sticker() {
  useEffect("#stickirize_food")
    .then((res) => {
      res && onLoad();
    })
    .catch((err) => false);


  const onLoad = () => {
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


    let current = 0;
    let target = 0;
    const ease = 1;

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
    };

    let elements = [elem_table,elem_toast,elem_cheese,elem_tomatoA,elem_tomatoB,elem_cucumberA,elem_cucumberB];
    
    const smoothScroll = () => {
      target = window.scrollY;

      current = lerp(current, target, ease);
      container_scrollables.style.transform = `translate3d(0, ${-current}px,0)`;
      stickirize();
      window.requestAnimationFrame(smoothScroll);
    };
    

    const stickirize = () => {

      //scroll normale

      //scroll sticky
     

      elements.forEach((elem,i)=>{

        if (current > 0 && current < (elem.offsetTop + offsetTopContainer))
            elem.style.transform = `translate3d(0,${0}px, 0)`;

        if (
            current >= (elem.offsetTop + offsetTopContainer) &&
            current <= limitHeight - i*100
          ) {
            elem.style.transform = `translate3d(0,${Number(
              current - (elem.offsetTop + offsetTopContainer)
            ).toFixed(2)}px, 0)`;
          }

          /* if (
            current > elem.offsetTop + offsetTopContainer + (i*100)
          ) {
            // ??????
          } */
      });
    
     

    };

    initContainers();
    smoothScroll();
  };

  return html.node`
      <section></section>
        <div id="stickirize_food">
          <div class="scrollable_container_copy"></div>
          <div class="scrollable_container">
   
            <div class="scrollable">
                ${LoremIpsum()}
                ${LoremIpsum()}
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
            
          </div>
        </div>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
   
`;
}
export default Sticker;
