import style from "./styles/hobby.module.css";

const Hobby = () => {
  return (
    <>
      <h1>My hobbies:</h1>
      <ul className={style.hobby}>
        <li>
          <div className={style.card}>
            <div className={style.text}>Self development.</div>
          </div>
        </li>
        <li>
          <div className={style.card}>
            <div className={style.text}>Camping.</div>
          </div>
        </li>
        <li>
          <div className={style.card}>
            <div className={style.text}> Psychology. </div>
          </div>
        </li>
        <li>
          <div className={style.card}>
            <div className={style.text}>
              I am fond of making natural cosmetics, making candles.{" "}
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Hobby;
