import style from "./styles/avatar.module.css";
import ava from "./images/avatar.png";

const Avatar = () => {
  return (
    <div className={style.about}>
      <div className={style.avatar}>
        <img className={style.pic} src={ava} alt=" myPhoto" />
      </div>
      <div className={style.profile}>
        I am a Frontend/React.js Developer with a technical background.I can
        participate in creating useful beautiful products and solving business
        problems.I intend to grow professionally and improve my skills Now I'm
        eager to join project where I can use my skills.
      </div>
    </div>
  );
};
export default Avatar;
