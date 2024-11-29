import Navbar from "../../Components/Navbar";
import Sidenav from "../../Components/Sidenav";

function Dashboard() {
  return (
    <>
      <div className="flex">
        <Sidenav />
        <Navbar text="TRANSACTION" />
        <div className="flex-1 flex flex-col  bg-[#F3F3F7]">
            <div className=" flex flex-row justify-center items-center m-20 w-[960px] h-[508px]">
             <img src="Table.png"/>
            </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;