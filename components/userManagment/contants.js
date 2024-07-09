// columns.js

import CustomFilterMenu from "./customeMenu";
export const allUsersColumns = [
  { field: "fullName", headerName: "Full Name" },
  { field: "email", headerName: "Email" },
  { field: "phoneNumber", headerName: "Phone Number",
    renderCell:(value)=>(
      <div className="w-16">
        {value}
      </div>
    )
    
   },
  { field: "dateRegistered", headerName: "Date Registered" },
  { field: "gender", headerName: "Gender", 
    renderCell:(value)=>(
    <div className="w-8">
      {value}
    </div>
  ) },
  
  { field: "userType", headerName: "User Type" },
  {
    field: "activeStatus",
    headerName: "Active Status",
    renderCell: (value) => (
      <div className="px-1" style={{ backgroundColor: value === "Active" ? "#ECFDF3" : "#FDECEA", padding: "3px", borderRadius: "10px" }}>
        {value}
      </div>
    ),
  },
  { field: "ridesCount", headerName: "Rides Count" },
  {
    field: "flagged",
    headerName: "Flagged",
    renderCell: (value) => (
      <div className="">
        {value === "flag" ? <img className="w-[22px]" src="/assets/flag.svg" alt="Flagged" /> : value === "unflag" ? <img className="w-[22px] text-red-500" src="/assets/flag.svg" alt="Flagged" /> :value}
      </div>
    ),
  },
  {
    field: "verificationStatus",
    headerName: "Verification Status",
    renderCell: (value) => (
      <div className="px-1" style={{ backgroundColor: value === "verified" ? "#ECFDF3" : value === "unverified" ? "#EAECF0" : "", }}>
        {value}
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    renderCell: (row, value) => (
      <div>

        <CustomFilterMenu userType={'all'} data={value} />
      </div>
    ),
  },
];

export const unVerifiedUserColumns = [
  { field: "fullName", headerName: "Full Name" },
  { field: "email", headerName: "Email" },
  { field: "phoneNumber", headerName: "Phone Number" },
  { field: "dateRegistered", headerName: "Date Registered" },
  { field: "regDate", headerName: "Reg Date" },
  { field: "gender", headerName: "Gender" },
  { field: "userType", headerName: "User Type" },
  {
    field: "verificationStatus",
    headerName: "Verification Status",
    renderCell: (value) => (
      <div className="px-2 rounded-md" style={{ backgroundColor: value === "verified" ? "#ECFDF3" : value === "Unverified" ? "#EAECF0" : "", }}>
        {value}
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    renderCell: (row, value) => (
      <div>

        <CustomFilterMenu userType={'unverified'} data={value} />
      </div>
    ),
  },
];

export const deactivatedUserColumns = [
  { field: "fullName", headerName: "Full Name" },
  { field: "email", headerName: "Email" },
  { field: "userType", headerName: "User Type" },
  { field: "dateRegistered", headerName: "Date Registered" },
  { field: "dateDeactivated", headerName: "Date Deactivated" },
  {
    field: "flagged",
    headerName: "Flagged",
    renderCell: (value) => (
      <div>
        {value === "flagged" ? <img className="w-[22px]" src="/assets/flag.svg" alt="Flagged" /> : value}
      </div>
    ),
  },
  { field: "reasonForDeactivation", headerName: "Reason For Deactivation" },
  {
    field: "actions",
    headerName: "Actions",
    renderCell: (row, value) => (
      <div>

        <CustomFilterMenu userType={'deactivated'} data={value} />
      </div>
    ),
  },
];

export const flaggedUserColumns = [
  { field: "fullName", headerName: "Full Name" },
  { field: "email", headerName: "Email" },
  { field: "userType", headerName: "User Type" },
  { field: "dateFlagged", headerName: "Date Flagged" },
  { field: "reasonForFlagging", headerName: "Reason For Flagging" },
  {
    field: "flagged",
    headerName: "Flagged",
    renderCell: (value) => (
      <div>
        {value === "flagged" ? <img className="w-[22px]" src="/assets/flag.svg" alt="Flagged" /> : value}
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    renderCell: (row, value) => (
      <div>

        <CustomFilterMenu userType={'flagged'} data={value} />
      </div>
    ),
  },
];
