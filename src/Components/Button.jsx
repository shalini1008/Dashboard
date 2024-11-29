
function Button({ text }) {
    return (
      <div className="w-[232px] h-[54px] bg-[#F3F3F7] border-[0.5px] border-gray-400 rounded-md flex items-center justify-center m-4 cursor-pointer">
        <h className="text-black ">{text}</h>
      </div>
    );
  }
  
  export default Button;
  