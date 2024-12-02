import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="flex flex-row bg-black justify-between py-5 px-5">
        <div className="flex gap-4 justify-center items-center">
          <div className="text-white">Paradise Logo</div>
          <div className="text-white">Competitions</div>
          <div className="text-white">Previous Winners</div>
          <div className="text-white">Draw Results</div>
        </div>

        <div className="flex flex-row gap-5 ">
          <Link to="/login">
          <div className="flex justify-center items-center gap-2">
            <span className="px-1.5 py-[3px] border bg-white rounded-full">
              <PersonIcon sx={{ fontSize: 18 }} />
            </span>
            <p className="text-white font-mono">Login</p>
          </div>
          </Link>
          <Link to="/basket">
            <div className="flex justify-center items-center gap-2">
              <span className="px-1.5 py-[3px] border bg-white rounded-full">
                <ShoppingBasketIcon sx={{ fontSize: 18 }} />
              </span>
              <p className="text-white font-mono">Basket</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
