export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "user",
    headerName: "User",
    width: 230,
    valueGetter: (params) => `${params.row.name}`,
  },

  {
    field: "email",
    headerName: "Email",
    width: 300,
  },

  {
    field: "role",
    headerName: "Role",
    width:150,
  },

  {
    field: "country",
    headerName: "Country",
    width:150,
  },

  {
    field: "status",
    headerName: "Status",
    width:150,
    
    valueGetter: (params) => (
      <div className="status" > 1 {params.row.status}</div>
    ),
  // valueGetter: (params) => {
  //   console.log(params.row.status)
  //     return ( 
  //       <div className="status" > 1 {params.row.status} </div>
  //     )
  //   }
  },
];

export const userRows = [
  {
    id: 1,
    name: "Alok",
    email: "1alok@gmail.com",
    role: "Artist",
    country: "India",
    status: "active",
  },

  {
    id: 2,
    name: "Surya",
    email: "2surya@gmail.com",
    role: "admin",
    country: "India",
    status: "passive",
  },

  {
    id: 3,
    name: "Manoj",
    email: "3manoj@gmail.com",
    role: "director",
    country: "America",
    status: "active",
  },

  {
    id: 4,
    name: "Lucky",
    email: "4lucky@gmail.com",
    role: "artist",
    country: "Australia",
    status: "pending",
  },

  {
    id: 5,
    name: "Amit",
    email: "5amit@gmail.com",
    role: "admin",
    country: "Nigeria",
    status: "active",
  },

  {
    id: 6,
    name: "Vineet",
    email: "6vineet@gmail.com",
    role: "artist",
    country: "Thailand",
    status: "active",
  },

  {
    id: 7,
    name: "pawan",
    email: "7pawan@gmail.com",
    role: "admin",
    country: "Bangkok",
    status: "pending",
  },

  {
    id: 8,
    name: "Abhinav",
    email: "15abhi@gmail.com",
    role: "artist",
    country: "London",
    status: "active",
  },

  {
    id: 9,
    name: "Vaibhav",
    email: "17vaibhav@gmail.com",
    role: "director",
    country: "India",
    status: "active",
  },
  {
    id: 10,
    name: "Manoj",
    email: "3manoj@gmail.com",
    role: "director",
    country: "America",
    status: "active",
  },
  {
    id: 11,
    name: "Alok",
    email: "1alok@gmail.com",
    role: "Artist",
    country: "India",
    status: "active",
  },
  {
    id: 12,
    name: "Pirbhav",
    email: "12pirbhav@gmail.com",
    role: "admin",
    country: "Korea",
    status: "pending",
  },
  {
    id: 13,
    name: "Aadhar",
    email: "13aadhar@gmail.com",
    role: "artist",
    country: "Pataya",
    status: "active",
  },
  {
    id: 14,
    name: "Riya",
    email: "14riya@gmail.com",
    role: "artist",
    country: "China",
    status: "active",
  },
  {
    id: 15,
    name: "Abhinav",
    email: "15abhi@gmail.com",
    role: "artist",
    country: "London",
    status: "active",
  },
  {
    id: 16,
    name: "Kuldeeep",
    email: "16kuldeep@gmail.com",
    role: "director",
    country: "Nepal",
    status: "pending",
  },
];
