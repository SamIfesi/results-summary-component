import data from "../json/data.json";

export default function Results() {
  return (
    <>
      {data.map((item) => (
        <div className={`test-type ${item.category.toLowerCase()}`} key={item.category}>
          <div className="test">
            <img src={item.icon} alt={item.category} />
            <p>{item.category}</p>
          </div>
          <p className="average-score">
            {item.score} <span>/ 100</span>
          </p>
        </div>
      ))}
    </>
  );
}
