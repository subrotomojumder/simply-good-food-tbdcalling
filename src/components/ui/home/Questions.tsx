import Container from "@/components/Container";
import SectionHeading from "./SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Questions = () => {
  const questionsData = [
    {
      ques: "What are the foods like Steel Yat? How does the mail plan work?",
      ans: "Simply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery",
    },
    {
      ques: "How Do I Eat Fresh and Lean?",
      ans: "Simply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery.Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery",
    },
    {
      ques: "How long do my meals last?",
      ans: "Simply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery",
    },
    {
      ques: "What if I don t eat them all at once?",
      ans: "Simply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery. Hello everyone my work is Simply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery.",
    },
    {
      ques: "What s in the food? Is it organic? Is it gluten free?",
      ans: "Simply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery",
    },
  ];
  return (
    <Container>
      <SectionHeading
        heading="Popular Frequently Asked Questions"
        des="Simply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery
services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy
and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?"
className="px-10"
      />
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-4xl mx-auto mt-10 space-y-5 divide-y-0"
      >
        {questionsData.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${+index}`}
            className="border-b-0 px-4 shadow border rounded-lg"
          >
            <AccordionTrigger className="text-base text-gray-600 gap-4">
              {item.ques}
            </AccordionTrigger>
            <AccordionContent>{item.ans}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default Questions;
