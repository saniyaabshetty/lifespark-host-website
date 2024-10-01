import { useState } from "react";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";

interface FAQAccordionProps {
  questions: {
    question: string;
    answer: string;
  }[];
}

export default function FAQAccordion({ questions }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [answerHeights, setAnswerHeights] = useState<number[]>([]);

  const toggleQuestion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
    const newAnswerHeights = Array.from({ length: questions.length }, () => 0);
    if (activeIndex !== idx) {
      const element = document.getElementById(`answer-${idx}`);
      if (element) {
        newAnswerHeights[idx] = element.scrollHeight;
      }
    }
    setAnswerHeights(newAnswerHeights);
  };

  // Log questions prop for debugging
  console.log("Questions prop:", questions);

  if (!questions || questions.length === 0) {
    return null; // Or handle no questions case
  }

  return (
    <div className="container max-w-sm rounded-xl bg-faqWhite p-6 text-faqDarkPurple">
      
      {/* FAQ Questions */}
      <div className="flex flex-col divide-y">
        {questions.map((faq, idx) => (
          <div key={idx} className="py-6">
            {/* Question */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleQuestion(idx)}
            >
              <h2 className="text-lg font-bold leading-6 text-faqDarkPurple hover:text-faqPurple">
                {faq.question}
              </h2>
              {/* Toggle Button */}
              {activeIndex === idx ? (
                <FaMinus className="text-faqDarkPurple cursor-pointer" />
              ) : (
                <FaPlus className="text-faqDarkPurple cursor-pointer" />
              )}
            </div>
            {/* Answer */}
            <div
              id={`answer-${idx}`}
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: `${activeIndex === idx ? answerHeights[idx] : 0}px` }}
            >
              <p className="pt-6 text-faqGrayishPurple">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}