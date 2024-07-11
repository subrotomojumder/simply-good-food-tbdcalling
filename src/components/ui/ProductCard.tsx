import type { TProduct } from "@/types/product.type";
import Image from "next/image";
import { Button } from "./button";
import StarIcon from "./StarIcon";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="bg-gray-100 p-2.5 rounded-lg space-y-3 group">
      <div className="w-full overflow-hidden rounded-lg">
        <Image
          src={product.image}
          className="group-hover:scale-110 rounded-lg transition-all"
          height={700}
          width={700}
          alt="image"
        />
      </div>
      <div className="space-y-2.5">
        <div className="flex items-center gap-1">
          <StarIcon width={18} height={18} fill="#fdb64e" />
          <span className="text-[#fdb64e] text-sm">{product.rate}</span>
        </div>
        <h4 className="text-xl font-bold text-[#3e3e3e]">{product.title}</h4>
        <p className="text-gray-500">
          <span className="font-medium ">$</span>{" "}
          <span className="font-semibold">{product.price}</span>
        </p>
        <Button className="bg-green-btn-ground w-full font-normal">
          Add to Cart
        </Button>
        <div className="flex justify-center gap-3">
          {product.materials.map((item: string, i: number) => (
            <div key={i} className="text-xs space-x-2 ">
              <span className="text-gray-950">{i !== 0 && "/"}</span>
              <span className="text-slate-400">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
