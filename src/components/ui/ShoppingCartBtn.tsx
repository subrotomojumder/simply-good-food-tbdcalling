import { ShoppingCart } from "lucide-react";
import { Button } from "./button";

const ShoppingCartBtn = () => {
  return (
    <div className="fixed top-[90%] right-6 ">
      <Button
        variant={"outline"}
        className="relative shadow-lg border border-white text-white  hover:text-white bg-[#277e16] hover:bg-[#2f971a] rounded-full py-[25px]"
      >
        <ShoppingCart size={20} />
        <div className="inline-flex justify-center items-center absolute top-2 right-2 text-[9px] font-medium bg-gray-500 rounded-full w-[17px] h-[17px]">
          1
        </div>
      </Button>
    </div>
  );
};

export default ShoppingCartBtn;
