import Head from "next/head";
import MahasiswaTable from "../components/MahasiswaTable";
import App from "../layouts/App";

export default function Home() {
  return (
    <App title="Home">
      <main className="container flex flex-col items-center">
        <div className="h-56 flex items-center justify-center">
          <h1 className="text-6xl text-gray-800 text-center font-bold">
            K-Means Clustering
          </h1>
        </div>
        <div className="w-1/2">
          <MahasiswaTable />
        </div>
      </main>
    </App>
  );
}
