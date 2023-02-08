import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
        repellat adipisci iure accusantium sint consequuntur ex voluptas
        cupiditate saepe qui nostrum hic dolorem obcaecati nesciunt nemo,
        distinctio facere quia!
      </p>
      <Link to="/offer/:id"> To Offer Page</Link>
    </div>
  );
};

export default Home;
