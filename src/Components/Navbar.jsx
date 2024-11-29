function Navbar({ text }) {
    return (
      <div className="fixed top-0 ml-64 w-full h-[64px] bg-white border-gray-400 flex flex-row">
        <h className="text-xl font-semibold m-4  ml-4">{text}</h>
        <div className="w-[45px] h-[5px] m-4 fixed right-16">
        <img  src="/Group 165.png" alt="image"/>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  