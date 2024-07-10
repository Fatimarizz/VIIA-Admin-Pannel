import CustomFilterMenu from "./customeMenu";

export const allUsersColumns = [
  { field: "FullName", headerName: "Full name", flex: 1 },
  { field: "Email", headerName: "Email", flex: 1 },
  { field: "PhoneNumber", headerName: "Phone number", flex: 1 },
  {
    field: "DateRegistered",
    headerName: "Date registered",
    flex: 1,
  },
  {
    field: "Gender",
    headerName: "Gender",
    flex: 1,
  },
  {
    field: "UserType",
    headerName: "User type",
    flex: 1,
  },
  {
    field: "ActiveStatus",
    headerName: "Active Status",
    flex: 1,
    renderCell: (params) => (
      <div className="my-2 p-2 px-4 text-sm rounded-md"
        style={{
          backgroundColor: params.value === "Active" ? "#ECFDF3" : "#ECFDF3",
         
        }}
      >
        {params.value === "Active" ? "Active" : "Insctive"}
      </div>
    ),
  },

  {
    field: "RidesCount",
    headerName: "Rides count",
    flex: 1,
  },
  {
    field: "Flagged",
    headerName: "Flagged",
    flex: 1,
    renderCell: (params) => (
      <div>
        {params.value === "flag" ? (
          <img className="w-[22px] my-4" src="/assets/flag.svg" />
        ) : (
          params.value
        )}
      </div>
    ),
  },
  {
    field: "VerificationStatus",
    headerName: "Verification status",
    flex: 1,
    renderCell: (params) => (
      <div 
      className="my-2 p-2 px-4 text-sm rounded-md"
        style={{
          backgroundColor: params.value === "verified" ? "#ECFDF3" : "#ECFDF3",
        
        }}
      >
        {params.value === "verified" ? "Verified" : "Non Verified"}
      </div>
    ),
  },
  {
    field: "Actions",
    headerName: "Actions",
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      const id = params.row.id;

      return (
        <div  className="my-2">
          <CustomFilterMenu userType={'all'} data={params.row} />
        </div>
      );
    },
  },
];

export const unVerifiedUserColumns = [
  { field: "FullName", headerName: "Full name", flex: 1 },
  { field: "Email", headerName: "Email", flex: 1 },
  { field: "PhoneNumber", headerName: "Phone number", flex: 1 },
  {
    field: "DateRegistered",
    headerName: "Date registered",
    flex: 1,
  },
  {
    field: "RegDate",
    headerName: "Reg Date",
    flex: 1,
  },
  {
    field: "Gender",
    headerName: "gender",
    flex: 1,
  },
  {
    field: "UserType",
    headerName: "User Type",
    flex: 1,
  },
  {
    field: "VerificationStatus",
    headerName: "Verification Status",
    flex: 1,
    renderCell: (params) => (
      <div className="my-2 p-2 px-4 text-sm rounded-md"
        style={{
          backgroundColor: params.value === "Active" ? "#ECFDF3" : "#ECFDF3",
          
        }}
      >
        {params.value === "Active" ? "Active" : "Inactive"}
      </div>
    ),
  },
  {
    field: "Actions",
    headerName: "Actions",
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      const id = params.row.id;

      return (
        <div  className="my-2">
          <CustomFilterMenu userType={'unverified'} data={params.row}/>
        </div>
      );
    },
  },
];

export const deactivatedUserColumns= [
  { field: "FullName", headerName: "Full name", flex: 1 },
  { field: "Email", headerName: "Email", flex: 1 },
  {
    field: "UserType",
    headerName: "User Type",
    flex: 1,
  },
  {
    field: "DateRegistered",
    headerName: "Date registered",
    flex: 1,
  },
  {
    field: "DateDeactivated",
    headerName: "Date Deactivated",
    flex: 1,
  },
  {
    field: "Flagged",
    headerName: "Flagged",
    flex: 1,
    renderCell: (params) => (
      <div >
        {params.value === "flag" ? (
          <img className="w-[22px] my-4" src="/assets/flag.svg" />
        ) : (
          params.value
        )}
      </div>
    ),
  },
  {
    field: "ReasonForDeactivation",
    headerName: "Reason For Deactivation",
    flex: 1,
  },
  {
    field: "Actions",
    headerName: "Actions",
    sortable: false,
    filterable: false,
    renderCell: (params) => {
     
      return (
        <div  className="my-2">
          <CustomFilterMenu userType={'deactivated'} data={params.row} />
        </div>
      );
    },
  },
];

export const flaggedUserColumns= [
  { field: "FullName", headerName: "Full name", flex: 1 },
  { field: "Email", headerName: "Email", flex: 1 },
  {
    field: "UserType",
    headerName: "User Type",
    flex: 1,
  },
  {
    field: "DateFlagged",
    headerName: "Date Flagged",
    flex: 1,
  },
  {
    field: "ReasonForFlagging",
    headerName: "Reason For Flagging",
    flex: 1,
  },
  {
    field: "Flagged",
    headerName: "Flagged",
    flex: 1,
    renderCell: (params) => (
      <div>
        {params.value === "flag" ? (
          <img className="w-[22px] my-4" src="/assets/flag.svg" alt="Flagged" />
        ) : (
          params.value
        )}
      </div>
    ),
  },
  {
    field: "Actions",
    headerName: "Actions",
    sortable: false,
    filterable: false,
    renderCell: (params) => {
    

      return (
        <div className="my-2">
          <CustomFilterMenu userType={'flagged'} data={params.row} />
        </div>
      );
    },
  },
];






