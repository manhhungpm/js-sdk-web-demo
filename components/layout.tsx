import Header from "./layout/header";
import Footer from "./layout/footer";
import Meta from "./meta";
import Script from "next/script";
// import 'antd/dist/reset.css';

type Props = {
  preview?: boolean;
  children?: React.ReactNode;
  headerContent?: React.ReactNode;
  headerClassName?: string;
};

const Layout = ({ preview, children, headerContent, headerClassName }: Props) => {
  return (
    <>
      {/* Animation */}
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      {/* Bootstrap */}
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" /> */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />

      <Meta />
      <div className="min-h-screen">
        <Header headerContent={headerContent} className={headerClassName} />
        <main>{children}</main>
      </div>

      {/* Animation */}
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>

      {/* Bootstrap */}
      {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      <script src="https://static.airflex.io/sdk/js/1.0.2/airflex.js"></script>
      <Script id="AirflexJS-analytics">
        {`
         AirflexJS.create("310797", {devmode: true});
        `}
      </Script>

      <Footer />
    </>
  );
};

export default Layout;
