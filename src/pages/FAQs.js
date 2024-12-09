import NavigationBar from "@/modules/HomePage/Components/NavigationBar";
import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const FAQs = () => {
  const [faqClicked, setFaqClicked] = useState([
    // FAQs data remains unchanged
    {
      isClicked: false,
      faq: "What is Kathak?",
      answer:
        "Kathak comes from the Sanskrit word ‘Katha’ which means a story. ‘Katha Kahe So Kathak Kehlave’ – Kathak is the art of story-telling. It is a North Indian classical dance style which originated in temples and was later danced in courts of kings. There are three gharanas of Kathak – Lucknow, Jaipur and Benaras.",
    },
    {
      isClicked: false,
      faq: "Who can join SKILS?",
      answer: "Anyone and everyone above the age of 7 is welcome.",
    },
    {
      isClicked: false,
      faq: "When can we join?",
      answer:
        "We have admissions going on a rolling basis throughout the year. You can join at any time.",
    },
    {
      isClicked: false,
      faq: "I am above 30/40/50 years of age. Am I too old to start?",
      answer:
        "It’s never too late to start learning Kathak! We have students of all age groups. Our youngest student is 7 years old and the oldest are over 50.",
    },
    {
      isClicked: false,
      faq: "I have learned Kathak when I was a kid and want to start again after a gap of ___ years. Can I join? Will I have to start from the basics again?",
      answer:
        "Yes, you can join. From which level you can start will depend on how much you have learned earlier and how much of that you recollect. It will also depend on how long you have been out of practice.",
    },
    {
      isClicked: false,
      faq: "I have learned the style of a different Gharana earlier and wish to join SKILS. Is it possible?",
      answer:
        "Yes. Shruti has learned the Natraj Gopi Krishna Parampara, which is an amalgamation of the Lucknow and Benaras Gharanas, while she is now pursuing advanced training under Pt. Rajendra Gangani ji of Jaipur Gharana. We at SKILS do not interfere with the individual grace of the student which has developed in a certain style.",
    },
    {
      isClicked: false,
      faq: "Where are the classes conducted? Are there weekend batches?",
      answer:
        "While some online training slots are available on weekends, currently we have only weekday classes conducted at three locations in Pune – 1. Karvenagar (Monday and Wednesday evenings) 2. Kalyaninagar (Tuesday evenings) 3. Baner (Thursday evenings) – (Batches are currently full.)",
    },
    {
      isClicked: false,
      faq: "Are students provided with stage performance opportunities?",
      answer:
        "Yes. Every year all students of SKILS perform in our annual showcase ‘Avant Garde’.",
    },
    {
      isClicked: false,
      faq: "I want to perform a dance piece at a function/competition/event, but I am not a student of SKILS. Can you help me?",
      answer:
        "Yes. I can help you with song selection, choreography and music editing..",
    },
    {
      isClicked: false,
      faq: "When will we appear for exams?",
      answer:
        "Gandharva Mahavidyalaya exams are conducted in April/May and November/December. We usually require at least 1 to 1.5 years to complete the portion of one exam.",
    },
    {
      isClicked: false,
      faq: "Does the course include theory as well?",
      answer:
        "Yes. Gandharva Mahavidyalaya requires students to be thorough with practical and theory both. We have separate theory sessions for understanding core concepts of practice.",
    },
    {
      isClicked: false,
      faq: "Is appearing for exams compulsory?",
      answer:
        "Even though we encourage our students to appear for exams, it is solely their decision.Do note that even if you choose not to appear for exams, there will still be theory lessons which you need to be thorough with.",
    },
    {
      isClicked: false,
      faq: "Do you conduct personal (one to one) classes?",
      answer:
        "Yes. Personal classes are available in-person and online. Please get in touch over phone or email for more details.",
    },
  ]);

  const handleClick = (index) => {
    setFaqClicked((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, isClicked: !item.isClicked } : item
      )
    );
  };

  return (
    <div className="flex flex-col mx-auto w-full max-w-[1000px] p-4">
      <NavigationBar />
      <h1 className="text-4xl md:text-6xl text-red-500 font-bold text-center mt-36 mb-10">
        FAQs
      </h1>
      <div className="w-full max-w-[1000px] mx-auto">
        {faqClicked.map((question, index) => (
          <div key={index} className="mb-4">
            {/* Question */}
            <div
              onClick={() => handleClick(index)}
              className={`flex items-center justify-between p-4 cursor-pointer transition-colors duration-300 ${
                question.isClicked ? "bg-slate-400" : "bg-slate-300"
              } hover:bg-slate-400`}
              aria-expanded={question.isClicked}
            >
              {question.isClicked ? (
                <FaChevronDown className="text-xl text-red-500" />
              ) : (
                <FaChevronRight className="text-xl" />
              )}
              <h2 className="ml-4 text-right text-gray-700 text-lg md:text-xl">
                {question.faq}
              </h2>
            </div>
            {/* Answer */}
            {question.isClicked && (
              <div
                className="p-4 text-gray-700 bg-gray-100 border-l-4 border-red-500 transition-all duration-300"
                role="region"
              >
                <p>{question.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
