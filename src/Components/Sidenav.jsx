import { Link } from "react-router-dom";
import Button from "./Button";

function Sidenav() {
  return (
    <div
      className="w-64 h-screen border-r-[0.5px] border-gray-400 ">
      <div className="flex items-center justify-center">
        <h className="text-[#5F00D9] m-4 p-4 font-semibold ">@letscode</h>
      </div>
      <div className="gap-4">
          <Link to="/dashboard">
              <Button text="Dashboard" />
            </Link>
            <Link to="/transaction">
              <Button text="Transaction" />
            </Link>
            <Link to="/support">
              <Button text="Support" />
            </Link>
      </div>
     
      
    </div>
  );
}



export default Sidenav