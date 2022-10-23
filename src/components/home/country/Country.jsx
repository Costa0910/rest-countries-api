import { Link } from "react-router-dom";
import Article from "./country-style";
const Country = ({ country }) => {
  return (
    <Article>
      <img src alt="" />
      <div className="details">
        <Link>
          <h2></h2>
        </Link>
        <p>
          Population: <span></span>
        </p>
        <p>
          Region: <span></span>
        </p>
        <p>
          Capital: <span></span>
        </p>
      </div>
    </Article>
  );
};

export default Country;
