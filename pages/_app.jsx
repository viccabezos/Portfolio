import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Layout from "../components/Layout/layout";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
