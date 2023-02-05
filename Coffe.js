import axios from "axios";
import React, { useEffect, useState } from "react";

const Drink = ({ title, description, image, id }) => {
  return (
    <div>
      <h3>
        id:{id}- title:{title}
      </h3>
      <p>Des:{description}</p>
      <img src={image} style={{ width: 200 }} />
    </div>
  );
};

const Cofe = () => {
  const [cofee, setCofee] = useState([]);
  const [visible, setVisible] = useState(2);

  const LoadMore = () => {
    setVisible((prevValue) => prevValue + 2);
  };

  useEffect(() => {
    axios
      .get(`https://api.sampleapis.com/coffee/hot`)
      .then((response) => {
        setCofee(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h3>Cofee</h3>
      {cofee.slice(0, visible).map((co, i) => {
        return <Drink {...co} key={co + i} />;
      })}
      <button onClick={LoadMore}>LoadMore</button>
    </>
  );
};
export default Cofe;
