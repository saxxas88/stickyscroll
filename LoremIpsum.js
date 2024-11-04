import { html } from "lighterhtml";
import "@style/lorem.css"
import { paragraphs } from "@config/lorem";


const LoremIpsum = (data) => {
    const {size,...props} = data ? data : {};
    const elements = paragraphs && Array.isArray(paragraphs) ? paragraphs : [];
    const elementsSize = size ? size : elements.length ;
  return html.node`
    <div class="lorem_container">
        <h2 class="lorem">Lorem ipsum</h2>
        ${elements?.slice(0,elementsSize)?.map((el)=>html.node`<p class="lorem">${el}</p>`)}
    </div>
    `;
};
export default LoremIpsum;
