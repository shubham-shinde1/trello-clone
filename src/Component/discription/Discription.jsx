import style from "./discription.module.css";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const styles = {
  activity: { width: "15px" },
  button: {
    border: "none",
    backgroundColor: "#999",
    borderRadius: "0.2rem",
    paddingLeft: "0.4rem",
    paddingRight: "0.4rem",
    fontSize: "12px",
  },
};

const Discription = () => {
  return (
    <>
      <div className={style.main_container}>
        <div className={style.container}>
          <div className={style.title}>
            <div>
              <SubtitlesOutlinedIcon />
            </div>
            <div>
              <h2>[Tile of card] </h2> <h6>in list (Name of column)</h6>
            </div>
          </div>

          <div className={style.notifications}>
            <div>
              <h6>Members</h6>
              <AccountCircleRoundedIcon />
              <AccountCircleRoundedIcon />
            </div>
            <div>
              <h6>Notifications</h6>
              <button className={style.icons} style={styles.button}>
                <RemoveRedEyeOutlinedIcon style={styles.activity} /> Watch
              </button>
            </div>
          </div>

          <div className={style.description}>
            <div className={style.icons}>
              <NotesOutlinedIcon />
              <h3>Description</h3>
            </div>

            <div className={style.textarea}>
              <textarea placeholder="Add a more detailed description"></textarea>
            </div>
          </div>

          <div className={style.activity}>
            <div>
              <h3 className={style.icons}>
                <FormatListBulletedOutlinedIcon /> Activity
              </h3>
            </div>
            <div>
              <button className={style.hideDetailsBtn}>Hide Details</button>
            </div>
          </div>
          <AccountCircleRoundedIcon />
          <AccountCircleRoundedIcon />
          <p>[name of user] added this card to [tile of column]</p>
          <p>[time 1:15AM]</p>
          <input placeholder="Write a comment..."></input>
        </div>
      </div>
    </>
  );
};

export default Discription;
