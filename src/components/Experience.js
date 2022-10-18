import styles from "./styles/experience.module.css";

const Experience = () => {
  return (
    <>
      <h1>Experience:</h1>
      <ul className={styles.job}>
        <li>
          <div className={styles.card}>
            <div>
              <img
                className={styles.icon}
                alt="experience"
                src={process.env.PUBLIC_URL + "/static/media/job.png"}
              />
            </div>
            <div className={styles.text}>
              <h3>Chemical engineer-Developer, Belkosmex, March 2018-...</h3>
              <p>-Development of new types of products;</p>
              <p>-Work with the documentation;</p>
              <p> -Quality control of products and raw materials; </p>
              <p>-Teamwork creation;</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.card}>
            <div>
              <img
                className={styles.icon}
                alt="experience"
                src={process.env.PUBLIC_URL + "/static/media/job.png"}
              />
            </div>

            <div className={styles.text}>
              <h3>
                Microbiologist engineer, Minsk Margarine Factory, November
                2016-March 2018
              </h3>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.card}>
            <div>
              <img
                className={styles.icon}
                alt="experience"
                src={process.env.PUBLIC_URL + "/static/media/job.png"}
              />
            </div>
            <div className={styles.text}>
              {" "}
              <h3>
                Microbiologist engineer,Minsk dairy plant number 1, June 2009
                -September 2016
              </h3>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.card}>
            <div>
              <img
                className={styles.icon}
                alt="experience"
                src={process.env.PUBLIC_URL + "/static/media/job.png"}
              />
            </div>
            <div className={styles.text}>
              <h3>
                Microbiologist engineer,Baranovichi dairy plant, 2006 - 2009
              </h3>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Experience;
