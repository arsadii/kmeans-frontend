import Head from "next/head";
import Navbar from "../components/Navbar";

export default function App(props) {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Head>
        <title>K-Means | {props.title}</title>
      </Head>
      <Navbar />
      <div className="w-full overflow-y-auto min-h-full bg-white">
        {props.children}
      </div>
    </div>
  );
}
