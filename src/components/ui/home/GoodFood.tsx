import Container from "@/components/Container";
import SectionHeading from "./SectionHeading";
import { foodFeatures } from "@/assets";
import Image from "next/image";

const GoodFood = () => {
  const featuresData = [
    {
      image: foodFeatures.features_1,
      title: "Health awareness",
      des: "Our Proteins are bigger. Meals designed to fill you up with the nutrients you need perform at your best.",
    },
    {
      image: foodFeatures.features_2,
      title: "More Protein",
      des: "Protein-rich meals to FUEL your workouts, improve recuperation, and increase outcomes.",
    },
    {
      image: foodFeatures.features_3,
      title: "Unending Variety",
      des: "Select breakfasts, snacks, and bulk proteins/sides. You can change it up at any moment or stick with the same routine.",
    },
  ];
  return (
    <Container>
      <SectionHeading heading="Why Simply Good Food" />
      <div className="flex flex-col lg:flex-row justify-between gap-16 mt-14 px-10 lg:px-0">
        {featuresData.map((item, index) => (
          <div key={index} className="h-full text-center space-y-4">
            <div className="max-w-24 mx-auto">
              <Image
                src={item.image}
                className=""
                height={500}
                width={500}
                alt="image"
              />
            </div>
            <h4 className="text-2xl font-semibold text-gray-700">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600">{item.des}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default GoodFood;
