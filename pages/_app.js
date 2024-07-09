import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <div>
    
      <QueryClientProvider client={queryClient}>
        <ToastContainer limit={1} />
      
          <Component {...pageProps} />
       
      </QueryClientProvider>
    </div>
  )
}

export default MyApp