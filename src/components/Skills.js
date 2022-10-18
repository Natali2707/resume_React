import style from "./styles/skills.module.css";

const Skills = () => {
  return (
    <>
      <h1>Skills:</h1>
      <ul className={style.skills}>
      
        <li className={style.card}>
          <div className={style.textSkill}>HTML</div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}>CSS/SCSS</div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}>Git/GitHub</div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}>JSON/AJAX</div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}>Gulp</div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}>TypeScript</div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}>React</div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}>Flexbox/Grid</div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}>BEM</div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}>
            Semantic / Adaptiv layout
          </div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}>DEVTOOLS</div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}> BUG REPORTS ( JIRA)</div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}>CHECK LISTS ( TESTRAIL )</div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}> BUG REPORTS ( JIRA)</div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}>CHECK LISTS ( TESTRAIL )</div>
        </li>

        <li className={style.card}>
          <div className={style.textSkill}> ENGLISH, A2</div>
        </li>
        <li className={style.card}>
          <div className={style.textSkill}>German, A1 </div>
        </li>
      </ul>
    </>
  );
};

export default Skills;
