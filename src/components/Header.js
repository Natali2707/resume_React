import style from "./styles/header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.introduce}>
        <h1 >ALISEVICH NATALLIA</h1>
        <h3 className={style.prof}>
         <i>Objective:</i> FRONT END DEVELOPER
        </h3>
      </div>
    </div>
  );
};
export default Header;
