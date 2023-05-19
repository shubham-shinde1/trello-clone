import style from "./discription.module.css";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useState } from "react";

const Discription = () => {
  const navigate = useNavigate();
  const [discription, setDiscription] = useState("");
  const [showDis, setShowDis] = useState("");

  const [comment, setcomment] = useState("");
  const [showcomment, setShowcomment] = useState([]);

  const handelDisChange = (event) => {
    setDiscription(event.target.value);
  };

  const handleDisClick = () => {
    setShowDis(discription);
  };

  const handelComment = (event) => {
    setcomment(event.target.value);
  };

  const handleClick = () => {
    setShowcomment(comment);
  };

  return (
    <>
      <div className={style.main_container}>
        <div className={style.container}>
          <div className={style.title}>
            <div>
              <SubtitlesOutlinedIcon />
            </div>

            <div className={style.titleb}>
              <div>
                <h2>To Do </h2> <h6>in list task</h6>
              </div>
              <button className={style.closebtn} onClick={() => navigate(-1)}>
                ❌
              </button>
            </div>
            <div className={style.close}></div>
          </div>

          <div className={style.description}>
            <div className={style.icons}>
              <NotesOutlinedIcon />
              <h3>Description</h3>
            </div>

            <div className={style.textarea}>
              <p>{showDis}</p>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "90%",
                }}
              >
                <TextField
                  sx={{ marginTop: "0.5rem" }}
                  onChange={handelDisChange}
                  fullWidth
                  label="Discription"
                  id="fullWidth"
                />
                <Button
                  onClick={handleDisClick}
                  sx={{ marginTop: "0.5rem" }}
                  variant="contained"
                >
                  Save
                </Button>
              </Box>
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
          <div className={style.icons}>
            <AccountCircleRoundedIcon />
            <Box
              sx={{
                width: 500,
                maxWidth: "85%",
              }}
            >
              <p>{showcomment}</p>
              <TextField
                onChange={handelComment}
                fullWidth
                label="Comment"
                id="fullWidth"
              />
              <Button
                onClick={handleClick}
                sx={{ marginTop: "0.5rem" }}
                variant="contained"
              >
                Comment
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discription;
