import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export const List = () => {

  const [data, setData] = useState(null);
  
  useEffect(() => {

    axios.get('http://180.179.213.61:3000/user/AllUser')
  .then(function (response) {
    // handle success
    
    setData(response.data.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  } , [])
  console.log(data)
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable data = {data} />
      </div>
    </div>
  );
};

export default List;
