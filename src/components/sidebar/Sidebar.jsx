import React from "react";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DensitySmallOutlinedIcon from '@mui/icons-material/DensitySmallOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutIcon from "@mui/icons-material/Logout";
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TvIcon from '@mui/icons-material/Tv';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PieChartIcon from '@mui/icons-material/PieChart';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">

      
       <img className="logo" src="/img/logo.png" alt=""  /> 
      </div>
      <hr />

      <div className="center">
        <ul className="ul">
          
          <li>
            <GridViewOutlinedIcon className="icon" />
            <span className="likh" >Dashboard</span>
          </li>
          <p className="title"> CONTENT MANAGEMENT </p>

          <li>
            <VideocamOutlinedIcon className="icon" />
            <span className="likh"> Manage Videos</span>
          </li>

          <li>
            <LocalShippingIcon className="icon" />
            <span className="likh"> Manage Series </span>
          </li>

          <li>
            <VideocamOutlinedIcon className="icon" />
            <span className="likh"> Artist Manager </span>
          </li>

          <li>
            <ListOutlinedIcon className="icon" />
            <span className="likh"> Content Categories </span>
          </li>

          <li>
            <ExploreOutlinedIcon className="icon" />
            <span className="likh"> Editor's Pick </span>
          </li>

          <li>
            <DensitySmallOutlinedIcon className="icon" />
            <span className="likh"> Content Lists </span>
          </li>

          <li>
            <Inventory2OutlinedIcon  className="icon" />
            <span className="likh"> Content Bundles </span>
          </li>

          <li>
            <InsertDriveFileOutlinedIcon className="icon" />
            <span className="likh"> Manage Pages </span>
          </li>
         

          <p className="title"> USER MANAGEMENT </p>


          <li>
            <PeopleAltOutlinedIcon className="icon" />
            <span className="likh"> Manage Users</span>
          </li>

          <p className="title"> REVENUE MANAGEMENT </p>

          <li>
            <CurrencyRupeeRoundedIcon className="icon" />
            <span className="likh"> Sales Dashboard </span>
          </li>

          <li>
            <HowToRegIcon className="icon" />
            <span className="likh"> Manage Subscribers </span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span className="likh"> Manage TVOD Orders </span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span className="likh"> Manage packages </span>
          </li>

          <p className="title"> MARKETING </p>

          <li>
            <MailOutlineIcon className="icon" />
            <span className="likh"> Newsletter Manager</span>
          </li>

          <li>
            <LocalOfferOutlinedIcon className="icon" />
            <span className="likh"> Promotions & Discount </span>
          </li>

          <li>
            <TvIcon className="icon" />
            <span className="likh"> Ads Manager </span>
          </li>

          <p className="title"> STATS & REPORT </p>

          <li>
            <PieChartIcon className="icon" />
            <span className="likh"> Analytics </span>
          </li>

          <li>
            <ArticleOutlinedIcon className="icon" />
            <span className="likh"> Reporting </span>
          </li>

          <li>
            <TopicOutlinedIcon className="icon" />
            <span className="likh"> Invoices </span>
          </li>

        </ul>
      </div>
      <div className="bottom">
        <div className="coloroption"></div>
        <div className="coloroption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
