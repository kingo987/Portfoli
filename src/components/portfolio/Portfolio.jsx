import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  tenth,
  twelvth,
  bachelor,
  certificate,
  interest,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "tenth",
      title: "10th",
    },
    {
      id: "twelvth",
      title: "12th",
    },
    {
      id: "bachelor",
      title: "Degree",
    },
    {
      id: "certificate",
      title: "Certificates",
    },
    {
      id: "interest",
      title: "Interest",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "tenth":
        setData(tenth);
        break;
      case "twelvth":
        setData(twelvth);
        break;
      case "bachelor":
        setData(bachelor);
        break;
      case "certificate":
        setData(certificate);
        break;
      case "interest":
        setData(interest);
        break;
      default:
        setData(tenth);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Qualification</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
          <p> {d.body[0]}</p>
          <p> {d.body[1]}</p>
          <p> {d.body[2]}</p>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
