import style from "./styles/education.module.css";
import teach from "./images/logo-teach.png";
import skillUp from "./images/skillUp.png";
import dip1 from "./images/dip1.jpg";
import dip2 from "./images/dip2.jpg";
import dip3 from "./images/dip3.jpg";

const Education = () => {
  return (
    <>
      <h1>Education,Training:</h1>
      <ul className={style.head}>
        <li className={style.educ}>
          <div className={style.card}>
            <div>
              <img className={style.logo} src={teach} alt=" TeachMeSkills" />
            </div>

            <div className={style.text}>
              -TeachMeSkills, April 2022-...
              <h3>Frontend/React.js Developer</h3>
            </div>
          </div>
        </li>

        <li className={style.educ}>
          <div className={style.card}>
            <div>
              <img className={style.logo} src={skillUp} alt="SkillUp" />
            </div>

            <div className={style.text}>
              -SkillUp, June 2021-October 2021
              <h3> QA-engineer.</h3>
            </div>
          </div>
        </li>

        <li className={style.educ}>
          <div className={style.card}>
            <div>
              <img className={style.logo} src={dip2} alt="dip" />
            </div>
            <div className={style.text}>
              -Mogilev Technological Institute
              <h3>Accountant-economist</h3>
            </div>
          </div>
        </li>

        <li className={style.educ}>
          <div className={style.card}>
            <div>
              <img className={style.logo} src={dip1} alt="dip" />
            </div>
            <div className={style.text}>
              -Mogilev Technological Institute
              <h3>
                Process Engineer and Chemical Engineer <br />
                <span>
                  + Winner of the republican competition of scientific works
                  among university students
                </span>
              </h3>
            </div>
          </div>
        </li>
        <li className={style.educ}>
          <div className={style.card}>
            <div>
              <img className={style.logo} src={dip3} alt="dip" />
            </div>
            <div className={style.text}>
              -Mogilev Technological Institute
              <h3>
                Process Engineer and Chemical Engineer <br />
                <span>
                  + Winner of the republican competition of scientific works
                  among university students
                </span>
              </h3>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
export default Education;
