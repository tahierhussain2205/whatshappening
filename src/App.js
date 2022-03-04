import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchOptionsModal from "./components/SearchOptionsModal";

function App() {
  const [openSearchOptionsModal, setSearchOptionsModal] = useState(false);

  const handleSearchOptionModal = () => {
    setSearchOptionsModal((prev) => !prev);
  };
  return (
    <>
      <Header handleSearchOptionModal={handleSearchOptionModal} />
      <SearchOptionsModal
        openSearchOptionsModal={openSearchOptionsModal}
        handleSearchOptionModal={handleSearchOptionModal}
      />
    </>
  );
}

export default App;
