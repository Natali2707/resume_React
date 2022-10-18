import styles from "./styles/personInfo.module.css";

const PersonInfo = () => {
  return (
    <>
      <h1>Personinfo:</h1>
      <ul className={styles.personInfo}>
        <li>
          <div className={styles.card}>
            <div className={styles.link}>
              <a href="  HTTPS://WWW.LINKEDIN.COM/IN/NATALLIA- ALISEVICH">
                <img
                  className={styles.icon}
                  alt="linkedin"
                  src={process.env.PUBLIC_URL + "/image/linkedin.jpg"}
                />
              </a>
            </div>
            <div className={styles.link}>
              <a href=" https://github.com/Natali2707">
                <img
                  className={styles.icon}
                  alt="github"
                  src={process.env.PUBLIC_URL + "/image/github.png"}
                />
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.card}>
            <img
              className={styles.icon}
              alt="address"
              src={process.env.PUBLIC_URL + "/image/house.jpg"}
            />

            <div className={styles.text}>Belarus, Minsk</div>
          </div>
        </li>

        <li>
          <div className={styles.card}>
            <img
              className={styles.icon}
              alt="phone"
              src={process.env.PUBLIC_URL + "/image/phone.jpg"}
            />

            <div className={styles.text}>+375-(29)-746-54-18</div>
          </div>
        </li>

        <li>
          <div className={styles.card}>
            <img
              className={styles.icon}
              alt="GMAIL"
              src={process.env.PUBLIC_URL + "/image/gmail.png"}
            />
            <div className={styles.text1}> alisevich.natali@gmail.com</div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default PersonInfo;
