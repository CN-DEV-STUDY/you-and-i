import TopBar from "../../components/shared/TopBar";
import { InputOutlined } from "@mui/icons-material";
import { Input } from "@mui/joy";
import { HiOutlineSearch } from "react-icons/hi";

const SearchPage = () => {
  return (
    <>
      <TopBar isSearch={true} />
      <Input startDecorator={<HiOutlineSearch />} />
      <div>SearchPage</div>
      <div>SearchPage</div>
      <div>SearchPage</div>
      <div>SearchPage</div>
    </>
  );
};

export default SearchPage;
