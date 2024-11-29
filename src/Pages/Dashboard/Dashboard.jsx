import Navbar from "../../Components/Navbar";
import Sidenav from "../../Components/Sidenav";

function Dashboard() {
  return (
    <>
      <div className="flex">
        <Sidenav />
        <Navbar text="DASHBOARD" />
        <div className="flex-1 flex flex-col  bg-[#F3F3F7]">
          <div className="fixed top-0 left-72 mt-[88px] ml-[168px] gap-4">
            <img className="w-auto h-auto" src="/Balance.png" alt="img" />
            <div className="flex flex-row w-[468px] h[145px] mt-4 gap-4" >
            <img src="/Current Price.png"/>
            <img src="/Transactions.png"/>
            </div>
             <div className="flex flex-row w-[468px] h[120px] mt-2 gap-4">
                <img src="Loans.png"/>
                <img src="Contact.png"/>
             </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Dashboard;
