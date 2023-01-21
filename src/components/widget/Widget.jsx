import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({type}) => {

let data;

switch (type) {
  case "user":

  data = {
    title:"USERS",
    isMoney: false,
    link: "See all users",
    icon: <PersonOutlineOutlinedIcon className='ico'/>,
  };
  break;

  case "order":

    data = {
      title:"ORDERS",
      isMoney: false,
      link: "View all users",
      icon: <ShoppingCartOutlinedIcon className='ico'/>,
    };
    break;

    case "earning":

      data = {
        title:"EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon className='ico'/>,
      };
      break;

      case "balance":

        data = {
          title:"BALANCE",
          isMoney: true,
          link: "See all users",
          icon: <PersonOutlineOutlinedIcon className='ico'/>,
        };
        break;
  
  default:
    break;
}


  return (
    <div className='widget'>
    <div className="left">
        <span className="titl"> USERS </span>
        <span className="count"> 21312</span>
        <span className="link"> See all user </span>
    </div>
    <div className="right">
        <div className="percent positive">
        <KeyboardArrowUpIcon/>
         20%
         </div>
         <PersonOutlineOutlinedIcon className='symbl'/>
     </div>
    </div>
  ) 
}

export default Widget
