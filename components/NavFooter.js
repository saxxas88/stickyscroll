import { html } from "lighterhtml";
import "@style/navbar.css";
import { useEffect } from "@utils/screwdriver";

const Footer = () => {
  useEffect("footer.food_footer")
    .then((res) => {
      res && loadvalue();
    })
    .catch((err) => false);

  return html.node`
        <nav class="food_navbar">
           <h2>NAVBAR</h2>
</nav>
`;
};

export default Footer;
