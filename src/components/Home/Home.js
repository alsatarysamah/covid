import SearchBar from "../Searchbar/Searchbar";
import Widgets from "../Widgets/Widgets";
import "./Home.css";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>COVID-19</title>
      </Helmet>
      <Widgets />
      <SearchBar />
     
    </>
  );
}
