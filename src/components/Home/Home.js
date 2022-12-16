import SearchBar from "../Searchbar/Searchbar";
import SearchResult from "../SearchResult/SearchResult";
import Widgets from "../Widgets/Widgets";
import "./Home.css";
export default function Home() {
  return (
    <>
      <Widgets />
      <SearchBar />
      <SearchResult />
    </>
  );
}
