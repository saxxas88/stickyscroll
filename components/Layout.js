import { html } from "lighterhtml";

import '@style/style.css'
import viteLogo from "@assets/vite.svg";

import frontLightning from "@assets/lightning-front.png";
import backLightning from "@assets/lightning-back.png";

import itemCenter from "@assets/tiger.svg";
import itemBack from "@assets/flame-retro.png";
import itemFront from "@assets/flame-front.png";

import { useEffect } from "@utils/screwdriver";



    useEffect('#scrollable_container')
    .then(res=>{
        res && onLoad()
      
    })
    .catch(err=>false)

function clickPrevent(ev) {
  ev.preventDefault();
  console.log(ev?.currentTarget?.dataset?.name);
}

const loremLeft= ()=>html.node`<section class="col-left">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque arcu tellus, posuere aliquet velit tempor eu. Nunc convallis tristique orci non rutrum. Curabitur eu diam turpis. Morbi in libero non elit finibus hendrerit mattis varius elit. Nulla in sagittis diam. Donec felis augue, fringilla in pulvinar vitae, placerat eu diam. Donec vitae finibus dolor. Fusce ac turpis vitae sapien rutrum accumsan. Cras tempor erat vel consectetur fringilla.</p>

<p>Donec sagittis quam augue, non semper nisl interdum vel. Maecenas pharetra, enim in luctus ultrices, turpis nisi semper justo, et iaculis lacus urna maximus arcu. Maecenas sodales vitae felis eget sollicitudin. In hac habitasse platea dictumst. Praesent quis libero eu sapien venenatis lobortis. Fusce at nisi sed orci vehicula vestibulum. Vivamus at egestas nisl. Quisque rutrum auctor varius. Morbi iaculis lacinia consequat. Morbi in mi dignissim erat finibus vulputate vel quis elit. Fusce turpis tellus, sagittis a ullamcorper a, ultricies vitae sem. Vestibulum vel diam eu nunc tincidunt vestibulum. Praesent viverra nibh nunc, at porta tortor ultricies ac. Curabitur justo est, vulputate nec feugiat viverra, blandit a lectus.</p>

<p>Nunc nec sagittis sapien. Praesent ipsum nisi, iaculis ut dictum vitae, interdum eget nulla. Praesent risus tellus, efficitur vitae mauris et, tempor venenatis lacus. Phasellus lectus lorem, consequat quis feugiat et, rutrum sit amet mi. Duis dignissim eleifend sem a consequat. Quisque euismod ipsum lacus, ac mattis velit pulvinar id. Duis lacinia nulla pellentesque purus fringilla vulputate. Ut id orci cursus, laoreet mi vel, accumsan nibh. Fusce tempor porttitor velit. Nunc accumsan, risus ac maximus ultrices, quam dui interdum elit, tincidunt consequat erat dui sit amet sapien. Duis at maximus purus, non commodo urna. Nam congue dui ut dignissim placerat.</p>
</section>`

const loremRight= ()=>html.node`<section class="col-right">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque arcu tellus, posuere aliquet velit tempor eu. Nunc convallis tristique orci non rutrum. Curabitur eu diam turpis. Morbi in libero non elit finibus hendrerit mattis varius elit. Nulla in sagittis diam. Donec felis augue, fringilla in pulvinar vitae, placerat eu diam. Donec vitae finibus dolor. Fusce ac turpis vitae sapien rutrum accumsan. Cras tempor erat vel consectetur fringilla.</p>

<p>Donec sagittis quam augue, non semper nisl interdum vel. Maecenas pharetra, enim in luctus ultrices, turpis nisi semper justo, et iaculis lacus urna maximus arcu. Maecenas sodales vitae felis eget sollicitudin. In hac habitasse platea dictumst. Praesent quis libero eu sapien venenatis lobortis. Fusce at nisi sed orci vehicula vestibulum. Vivamus at egestas nisl. Quisque rutrum auctor varius. Morbi iaculis lacinia consequat. Morbi in mi dignissim erat finibus vulputate vel quis elit. Fusce turpis tellus, sagittis a ullamcorper a, ultricies vitae sem. Vestibulum vel diam eu nunc tincidunt vestibulum. Praesent viverra nibh nunc, at porta tortor ultricies ac. Curabitur justo est, vulputate nec feugiat viverra, blandit a lectus.</p>

<p>Nunc nec sagittis sapien. Praesent ipsum nisi, iaculis ut dictum vitae, interdum eget nulla. Praesent risus tellus, efficitur vitae mauris et, tempor venenatis lacus. Phasellus lectus lorem, consequat quis feugiat et, rutrum sit amet mi. Duis dignissim eleifend sem a consequat. Quisque euismod ipsum lacus, ac mattis velit pulvinar id. Duis lacinia nulla pellentesque purus fringilla vulputate. Ut id orci cursus, laoreet mi vel, accumsan nibh. Fusce tempor porttitor velit. Nunc accumsan, risus ac maximus ultrices, quam dui interdum elit, tincidunt consequat erat dui sit amet sapien. Duis at maximus purus, non commodo urna. Nam congue dui ut dignissim placerat.</p>
</section>`

const Layout = html.node`

  <div id="scrollable_container">
    <section></section>
        <div class="scrollable">
            
            <div id="vite">
                <a href="#" data-name="link" onclick=${clickPrevent}>
                    <img src="${viteLogo}" class="logo" alt="Vite logo" />
                </a>
            </div>
            <div id="backlightning">
                    <img src="${backLightning}" class="" alt="Back lightning" />     
            </div>
            <div id="frontlightning">
                    <img src="${frontLightning}" class="" alt="Front lightning" />
            </div>
            <section></section>            
        </div>
        <div class="scrollable_2">
                ${loremLeft()}
                <div id="item_center">
                    <a href="#" data-name="link" onclick=${clickPrevent}>
                        <img src="${itemCenter}" class="logo" alt="Center" />
                    </a>
                </div>
                <div id="item_back">
                        <img src="${itemBack}" class="" alt="Back " />     
                </div>
                <div id="item_front"> <img src="${itemFront}" class="" alt="Front " /> </div> 
                ${loremRight()}
        </div>
    
    </div>
    
</div>

`;

const onLoad = () => {
 
  const scrollable = document.querySelector(".scrollable");
  const scrollable2 = document.querySelector(".scrollable_2");

  const stickyVite = document.querySelector("#vite");
  const stickyLightningBack = document.querySelector("#backlightning");
  const stickyLightningFront = document.querySelector("#frontlightning");

  const stickyCenter = document.querySelector("#item_center");
  const stickyBack = document.querySelector("#item_back");
  const stickyFront = document.querySelector("#item_front");

  let current = 0;
  let target = 0;
  const ease = 0.25;

  let current2 = scrollable2.offsetTop;
  let target2 = 0;
  const ease2 = 0.75;

  const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
  };

  const init = () => {
     document.getElementById('app').style.height = `${
      document.getElementById('scrollable_container').getBoundingClientRect().height + window.innerHeight 
    }px`;  
   
  };

  const smoothScroll = () => {
    target = window.scrollY;
    target2 = window.scrollY;

    current = lerp(current, target, ease);
    current2 = lerp(current2, target2, ease2);

    scrollable.style.transform = `translate3d(0, ${-current}px,0)`;
    scrollable2.style.transform = `translate3d(0, ${-current2}px,0)`;

    stickirize();
    stickirize_2();
    window.requestAnimationFrame(smoothScroll);
  };

  const stickirize = () => {
    const firstElem = stickyLightningBack;
    const secondElem = stickyVite;
    const thirdElem = stickyLightningFront;

    const currentOffsetTopFirst = firstElem.offsetTop / window.innerHeight;

    const currentOffsetTopSecond = secondElem.offsetTop / window.innerHeight;

    const currentOffsetTopThird = thirdElem.offsetTop / window.innerHeight;

    let offsetFirst = window.innerHeight * currentOffsetTopFirst + scrollable.offsetTop;
    let offsetSecond = window.innerHeight * currentOffsetTopSecond + scrollable.offsetTop;
    let offsetThird = window.innerHeight * currentOffsetTopThird + scrollable.offsetTop;

    const limitHeight = scrollable.getBoundingClientRect().height  - window.innerHeight;

    if (current < offsetFirst) {
      firstElem.style.transform = `translate3d(0,0, 0)`;
      thirdElem.style.transform = `translate3d(0,0, 0)`;
      secondElem.style.transform = `translate3d(0,0, 0)`;
    }

    /*    if (current > offsetFirst * currentOffsetTopFirst) {
      firstElem.style.transform = `translate3d(0,${offsetFirst}px, 0)`;
    
    }

    if (current > offsetFirst * currentOffsetTopSecond) {
      secondElem.style.transform = `translate3d(0,${offsetSecond}px, 0)`;
    }

    if (current > offsetFirst * currentOffsetTopThird) {
      thirdElem.style.transform = `translate3d(0,${offsetThird}px, 0)`;
    }  */

    //single
    if (
      current >= offsetFirst &&
      current <= offsetFirst + (scrollable.getBoundingClientRect().height  - window.innerHeight)
    ) {
      firstElem.style.transform = `translate3d(0,${
        current - offsetFirst
      }px, 0)`;
    }

    if (
      current >= offsetSecond &&
      current <= offsetSecond + limitHeight  &&
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



  const stickirize_2 = () => {
   
    const firstElem = stickyBack;
    const secondElem = stickyCenter;
    const thirdElem = stickyFront;

    const currentOffsetTopFirst = firstElem.offsetTop / window.innerHeight;

    const currentOffsetTopSecond = secondElem.offsetTop / window.innerHeight;

    const currentOffsetTopThird = thirdElem.offsetTop / window.innerHeight;

    const limitHeight = scrollable2.getBoundingClientRect().height  - window.innerHeight;

    let offsetFirst =
      window.innerHeight * currentOffsetTopFirst + scrollable2.offsetTop;
    let offsetSecond =
      window.innerHeight * currentOffsetTopSecond + scrollable2.offsetTop;
    let offsetThird =
      window.innerHeight * currentOffsetTopThird + scrollable2.offsetTop;


    if (current2 < offsetFirst) {
      firstElem.style.transform = `translate3d(0,0, 0)`;
      thirdElem.style.transform = `translate3d(0,0, 0)`;
      secondElem.style.transform = `translate3d(0,0, 0)`;
    }

    //single
    if (
      current2 >= offsetFirst  &&
      current2 <= offsetFirst + limitHeight
    ) {
      firstElem.style.transform = `translate3d(0,${
        current2 - offsetFirst
      }px, 0)`;
     
    }

    if (
      current2 >= offsetSecond &&
      current2 <=
        offsetSecond + limitHeight  &&
        !(current2 > offsetFirst + limitHeight  )
    ) {
      secondElem.style.transform = `translate3d(0,${
        current2 - offsetSecond
      }px, 0)`;

    }

    if (
      current2 >= offsetThird &&
      current2 <= offsetThird + limitHeight  &&
      !(current2 > offsetFirst + limitHeight  )
    ) {
      thirdElem.style.transform = `translate3d(0,${
        current2 - offsetThird
      }px, 0)`;
    }
  };

  init();
  smoothScroll();
};

export default Layout;
