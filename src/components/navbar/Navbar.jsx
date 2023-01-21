import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input className="input" type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
        <div className="tit">
        <div >
            <button className="clear"> Clear Cache </button>
          </div>
          <div >
            <button className="License"> License & Billing </button>
          </div>
          <div >
            <button className="Support"> Support </button>
          </div>
          <div >
            <button className="upload"> Upload </button>
        </div>
         
          </div>
          <div className="tech">
          <div className="item">
            <SignalCellularAltRoundedIcon className="ico" />
            
          </div>
          <div className="item">
            <HomeOutlinedIcon className="ico" />
            
          </div>
          <div className="item">
            <SettingsOutlinedIcon className="ico" />
          </div>

          <div className="item">
            <img
              className="avatar"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
