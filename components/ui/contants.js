import Tooltip from '@mui/material/Tooltip';
import UserCustomFilterMenu from '../userManagment/customeMenu';
import PaymentMenu from '../paymentSection/PaymentMenu';


export const getPaymentLogo = (method) => {
  switch (method) {
    case 'Visa':
      return <img src={'/assets/visa.svg'} alt="Visa" className="inline-block w-9 h-9 mr-2" />;
    case 'GPay':
      return <img src={'/assets/google_pay.svg'} alt="Google Pay" className="inline-block w-9 h-9 mr-2" />;
    case 'Stripe':
      return <img src={'/assets/stripe.svg'} alt="Stripe" className="inline-block w-9 h-9 mr-2" />;
    case 'ApplePay':
      return <img src={'/assets/apple_pay.svg'} alt="Apple Pay" className="inline-block w-9 h-9 mr-2" />;
    case 'MasterCard':
      return <img src={'/assets/mastercard.svg'} alt="MasterCard" className="inline-block w-9 h-9 mr-2" />;
    case 'PayPal':
      return <img src={'/assets/paypal.svg'} alt="PayPal" className="inline-block w-9 h-9 mr-2" />;
    default:
      return null;
  }
};

export const allUsersColumns = [
  { field: "FullName", headerName: "Full name", flex: 1 },
  {
    field: "Email",
    headerName: "Email",
    flex: 1,
    renderCell: (params) => {
      return (
        <Tooltip title={params.value} arrow classes={{ tooltip: 'custom-tooltip', arrow: 'custom-tooltip-arrow' }}>
          <p className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap">
            {params.value}
          </p>
        </Tooltip>
      );
    }
  },
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
        {params.value === "Active" ? "Active" : "Inactive"}
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
          <img className="w-[22px] my-4" src="/assets/flag.svg" alt="Flagged" />
        ) : (
          params.value
        )}
      </div>
    ),
  },
  {
    field: "VerificationStatus",
    headerName: "Verification Status",
    flex: 1.2,
    innerWidth: 330,
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
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      const id = params.row.id;
      return (
        <div className="my-2 flex justify-end">
          <UserCustomFilterMenu userType={'all'} data={params.row} />
        </div>
      );
    },
  },
];

export const unVerifiedUserColumns = [
  { field: "FullName", headerName: "Full name", flex: 1 },
  {
    field: "Email",
    headerName: "Email",
    flex: 1,
    renderCell: (params) => {
      return (
        <Tooltip title={params.value} arrow classes={{ tooltip: 'custom-tooltip', arrow: 'custom-tooltip-arrow' }}>
          <p className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap">
            {params.value}
          </p>
        </Tooltip>
      );
    }
  },
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
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      return (
        <div className="my-2 flex justify-end">
          <UserCustomFilterMenu userType={'unverified'} data={params.row} />
        </div>
      );
    },
  },
];

export const deactivatedUserColumns = [
  { field: "FullName", headerName: "Full name", flex: 1 },
  {
    field: "Email",
    headerName: "Email",
    flex: 1,
    renderCell: (params) => {
      return (
        <Tooltip title={params.value} arrow classes={{ tooltip: 'custom-tooltip', arrow: 'custom-tooltip-arrow' }}>
          <p className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap">
            {params.value}
          </p>
        </Tooltip>
      );
    }
  },
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
    field: "ReasonForDeactivation",
    headerName: "Reason For Deactivation",
    flex: 2,
  },
  {
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      return (
        <div className="my-2 flex justify-end">
          <UserCustomFilterMenu userType={'deactivated'} data={params.row} />
        </div>
      );
    },
  },
];

export const flaggedUserColumns = [
  { field: "FullName", headerName: "Full name", flex: 1 },
  {
    field: "Email",
    headerName: "Email",
    flex: 1,
    renderCell: (params) => {
      return (
        <Tooltip title={params.value} arrow
          classes={{ tooltip: 'custom-tooltip', arrow: 'custom-tooltip-arrow' }}>
          <p className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap">
            {params.value}
          </p>
        </Tooltip>
      );
    }
  },
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
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      return (
        <div className="my-2 flex justify-end">
          <UserCustomFilterMenu userType={'flagged'} data={params.row} />
        </div>
      );
    },
  },
];

export const transactionOverviewColumns = [
  { field: "TripCodeID", headerName: "Trip Code ID", flex: 1 },
  { field: "Passenger", headerName: "Passenger", flex: 1 },
  { field: "Driver", headerName: "Driver", flex: 1 },
  { field: "Date", headerName: "Date", flex: 1 },
  { field: "Time", headerName: "Time", flex: 1 },
  {
    field: "PaymentMethod", headerName: "Payment Method", flex: 1,
    renderCell: (params) => (
      <div className="flex items-center">
        {getPaymentLogo(params.value)}
        <span>{params.value}</span>
      </div>
    ),
  },
  { field: "Amount", headerName: "Amount", flex: 1 },
  {
    field: "Status", headerName: "Status", flex: 1,
    renderCell: (params) => (
      <div className="my-2  px-2 py-1  text-center text-sm rounded-full"
        style={{
          backgroundColor: params.value === "Successful" ? "#ECFDF3" : "#EFF8FF",
          color: params.value === "Successful" ? "#027A48" : "#175CD3",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      return (
        <div className="my-2 flex justify-end">
          <PaymentMenu userType={'transaction'} data={params.row} />
        </div>
      );
    },
  },
];
export const walletManagementColumns = [
  { field: "UserName", headerName: "Name of User", flex: 1 },
  { field: "Type", headerName: "Type", flex: 1 },
  {
    field: "Date", headerName: "Date", flex: 1,
    renderCell: (params) => (
      <div className="flex flex-col mt-2">

        <p className='text-sm'>{params.value}
          
        </p>
        <span className='text-xs'>{params.row?.Time}</span>
      </div>
    ),
  },
  { field: "Amount", headerName: "Amount", flex: 1 },
  { field: "Revenue", headerName: "Revenue", flex: 1 },
  {
    field: "PaymentMethod", headerName: "Payment Method", flex: 1,
    renderCell: (params) => (
      <div className="flex items-center">
        {getPaymentLogo(params.value)}
        <span>{params.value}</span>
      </div>
    ),
  },
  {
    field: "Status", headerName: "Status", flex: 1,
    renderCell: (params) => (
      <div className="my-2 py-1  text-center text-sm rounded-full"
        style={{
          backgroundColor: params.value === "Successful" ? "#ECFDF3" : params.value === "Declined" ? "#FEF3F2" : "#EFF8FF",
          color: params.value === "Successful" ? "#027A48" : params.value === "Declined" ? "#B42318" : "#175CD3",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      return (
        <div className="my-2 flex justify-end">
          <PaymentMenu userType={'wallet'} data={params.row} />
        </div>
      );
    },
  },
];
export const paymentGatewayIntegrationColumns = [
  {
    field: "PaymentMethod", headerName: "Payment Method", flex: 1,
    renderCell: (params) => (
      <div className="flex items-center">
        {getPaymentLogo(params.value)}
        <span>{params.value}</span>
      </div>
    ),
  },
  { field: "ConfigurationDetail", headerName: "Configuration Detail", flex: 3 },
  { field: "DateConnected", headerName: "Date Connected", flex: 2 },
  {
    field: "Status", headerName: "Status", flex: 1,
    renderCell: (params) => (
      <div className="my-2  py-1  text-center text-sm rounded-full"
        style={{
          backgroundColor: params.value === "Connected" ? "#ECFDF3" : "#FEF3F2",
          color: params.value === "Connected" ? "#027A48" : "#B42318",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {


    flex: 2,
    renderCell: (params) => (
      <div className="">
       
        <PaymentMenu userType={'PaymentGateway'} data={params.row} />
       
      </div>
    ),
  },
];
export const tripPaymentColumns = [
  { field: "TripCodeID", headerName: "Trip Code ID", flex: 1 },
  { field: "Date", headerName: "Date", flex: 1 },
  { field: "Time", headerName: "Time", flex: 1 },
  { field: "Amount", headerName: "Amount", flex: 1 },
  { field: "Revenue", headerName: "VIIA Revenue", flex: 1 },
  {
    field: "PaymentMethod", headerName: "Payment Method", flex: 1,
    renderCell: (params) => (
      <div className="flex items-center">
        {getPaymentLogo(params.value)}
        <span>{params.value}</span>
      </div>
    ),
  },
  {
    field: "Status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => (
      <div
        className="my-2 px-2 py-1 text-center text-sm rounded-full"
        style={{
          backgroundColor: params.value === "Successful" ? "#ECFDF3" : params.value === "Declined" ? "#FEF3F2" : "#EFF8FF",
          color: params.value === "Successful" ? "#027A48" : params.value === "Declined" ? "#B42318" : "#175CD3",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      return (
        <div className="my-2 flex justify-end">
          <PaymentMenu userType={'tripPayment'} data={params.row} />
        </div>
      );
    },
  },
];
