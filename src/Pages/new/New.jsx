import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const New = () => {
  return (
    <div className="new">
     <Sidebar/>
     <div className="newContainer">

      <Navbar/>
      <div className="topp"> <h1 className="heading"> Add New User </h1></div>
      <div className="bottomm">
        <div className="leftt"> 
        <img className="imgg" src="https://media.istockphoto.com/id/1193046540/vector/photo-coming-soon-image-icon-vector-illustration-isolated-on-white-background-no-website.jpg?s=612x612&w=0&k=20&c=4wx1UzigP0g9vJv9D_DmOxdAT_DtX5peZdoS4hi2Fqg=" alt="" /></div>
        <div className="right">
        <form className='form'>
<div className= "formInput">
  <span className="lab"> Username</span>
  <input className="inp" type="text" placeholder='jeohn' />
</div>
<div className= "formInput">
  <span className="lab"> Email</span>
  <input className="inp" type="email" placeholder='jeohn_doe@gmail.com' />
</div>
<div className= "formInput">
  <span className="lab"> DOB </span>
  <input className="inp" type="text" placeholder='09-03-1997' />
</div>
<div className= "formInput">
  <span className="lab"> Password</span>
  <input className="inp" type="pasword" placeholder='jeohn' />
</div>
<div className= "formInput">
  <span className="lab"> Confirm Password</span>
  <input className="inp" type="text" placeholder='jeohn' />
</div>
<div className= "formInput">
  <span className="lab"> Status </span>
  <input className="inp" type="text" placeholder='Active' />
</div>
<div className= "formInput">
  <span className="lab"> User Level </span>
  <input className="inp" type="text" placeholder='artist' />
</div>
<div className="formInput">
  <span className="lab"> Country   </span>
  <input className="inp" type="text" placeholder='England' />
</div>

<button className="btn"> Send </button>
</form>  
  </div>
      </div>
     </div>
    </div>
  );
};

export default New;


   
