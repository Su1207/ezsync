import React, { useEffect, useState } from "react";
import Histogram from "../components/StudentDashboardComponent/Histogram";
import PersonalityChart from "../components/StudentDashboardComponent/PersonalityChart";

const Interview = () => {
  const combinedData = [
    {
      interview: "Interview 1",
      questions: [
        {
          question: "What could be the output?",
          accuracy: 85,
          gestures: 90,
          relevance: 80,
          knowledge: 70,
        },
        {
          question: "Question 2",
          accuracy: 88,
          gestures: 85,
          relevance: 78,
          knowledge: 75,
        },
        {
          question: "Question 3",
          accuracy: 30,
          gestures: 90,
          relevance: 80,
          knowledge: 50,
        },
        {
          question: "Question 4",
          accuracy: 55,
          gestures: 60,
          relevance: 80,
          knowledge: 70,
        },
        {
          question: "Question 5",
          accuracy: 95,
          gestures: 40,
          relevance: 20,
          knowledge: 70,
        },
      ],
      personality: [
        { name: "Communication", value: 85 },
        { name: "Problem-Solving", value: 90 },
        { name: "Adaptability", value: 80 },
        { name: "Teamwork", value: 75 },
        { name: "Leadership", value: 70 },
      ],
    },
    {
      interview: "Interview 2",
      questions: [
        {
          question: "What is React?",
          accuracy: 80,
          gestures: 85,
          relevance: 75,
          knowledge: 78,
        },
        {
          question: "Explain closures in JavaScript.",
          accuracy: 82,
          gestures: 80,
          relevance: 70,
          knowledge: 80,
        },
        {
          question: "What is the output of 1 + '2' in JavaScript?",
          accuracy: 90,
          gestures: 88,
          relevance: 85,
          knowledge: 88,
        },
        {
          question: "Difference between var, let, and const.",
          accuracy: 85,
          gestures: 82,
          relevance: 78,
          knowledge: 80,
        },
        {
          question: "Explain event delegation.",
          accuracy: 88,
          gestures: 85,
          relevance: 80,
          knowledge: 82,
        },
      ],
      personality: [
        { name: "Communication", value: 85 },
        { name: "Problem-Solving", value: 90 },
        { name: "Adaptability", value: 80 },
        { name: "Teamwork", value: 75 },
        { name: "Leadership", value: 70 },
      ],
    },
    {
      interview: "Interview 3",
      questions: [
        {
          question: "What are hooks in React?",
          accuracy: 85,
          gestures: 90,
          relevance: 88,
          knowledge: 80,
        },
        {
          question: "What is the Virtual DOM?",
          accuracy: 80,
          gestures: 85,
          relevance: 75,
          knowledge: 78,
        },
        {
          question: "Explain the use of Redux.",
          accuracy: 78,
          gestures: 82,
          relevance: 70,
          knowledge: 75,
        },
        {
          question: "What are pure functions?",
          accuracy: 85,
          gestures: 80,
          relevance: 78,
          knowledge: 82,
        },
        {
          question: "Difference between state and props.",
          accuracy: 88,
          gestures: 85,
          relevance: 80,
          knowledge: 80,
        },
      ],
      personality: [
        { name: "Communication", value: 85 },
        { name: "Problem-Solving", value: 90 },
        { name: "Adaptability", value: 80 },
        { name: "Teamwork", value: 75 },
        { name: "Leadership", value: 70 },
      ],
    },
    {
      interview: "Interview 4",
      questions: [
        {
          question: "Explain the box model in CSS.",
          accuracy: 80,
          gestures: 85,
          relevance: 75,
          knowledge: 70,
        },
        {
          question: "What is flexbox?",
          accuracy: 85,
          gestures: 90,
          relevance: 80,
          knowledge: 78,
        },
        {
          question: "How does CSS Grid work?",
          accuracy: 88,
          gestures: 85,
          relevance: 80,
          knowledge: 82,
        },
        {
          question: "Explain CSS specificity.",
          accuracy: 80,
          gestures: 82,
          relevance: 75,
          knowledge: 78,
        },
        {
          question: "What is the difference between padding and margin?",
          accuracy: 90,
          gestures: 88,
          relevance: 85,
          knowledge: 88,
        },
      ],
      personality: [
        { name: "Communication", value: 85 },
        { name: "Problem-Solving", value: 90 },
        { name: "Adaptability", value: 80 },
        { name: "Teamwork", value: 75 },
        { name: "Leadership", value: 70 },
      ],
    },
    {
      interview: "Interview 5",
      questions: [
        {
          question: "What is a RESTful API?",
          accuracy: 80,
          gestures: 85,
          relevance: 78,
          knowledge: 75,
        },
        {
          question: "Explain the concept of middleware.",
          accuracy: 82,
          gestures: 80,
          relevance: 75,
          knowledge: 78,
        },
        {
          question: "What is GraphQL?",
          accuracy: 85,
          gestures: 82,
          relevance: 80,
          knowledge: 82,
        },
        {
          question: "How does authentication work in web applications?",
          accuracy: 88,
          gestures: 85,
          relevance: 80,
          knowledge: 85,
        },
        {
          question: "Explain the MVC architecture.",
          accuracy: 90,
          gestures: 88,
          relevance: 85,
          knowledge: 88,
        },
      ],
      personality: [
        { name: "Communication", value: 85 },
        { name: "Problem-Solving", value: 90 },
        { name: "Adaptability", value: 80 },
        { name: "Teamwork", value: 75 },
        { name: "Leadership", value: 70 },
      ],
    },
  ];

  const [selectedOption, setSelectedOption] = useState("Interview 1");
  const [data, setData] = useState({});

  useEffect(() => {
    if (selectedOption) {
      const data = combinedData.find(
        (dataSet) => dataSet.interview === selectedOption
      );

      setData(data);
    }
  }, [selectedOption]);

  return (
    <div className=" w-full font-poppins">
      <div className=" text-4xl text-gray-700 font-bold mb-5">Interview</div>

      <div className="text-base font-medium text-center text-gray-500 border-b">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <div
              className={`${
                selectedOption === "Interview 1"
                  ? "text-[#fd3103] border-b-2 border-[#fd3103]"
                  : "border-b-2 border-transparent hover:text-black hover:border-gray-700"
              } inline-block p-4 rounded-t-lg transition-all duration-300 ease-in-out`}
              onClick={() => setSelectedOption("Interview 1")}
            >
              Interview 1
            </div>
          </li>
          <li className="me-2">
            <div
              className={`${
                selectedOption === "Interview 2"
                  ? "text-[#fd3103] border-b-2 border-[#fd3103]"
                  : "border-b-2 border-transparent hover:text-black hover:border-gray-700"
              } inline-block p-4 rounded-t-lg  dark:hover:text-gray-300 transition-all duration-300 ease-in-out`}
              onClick={() => setSelectedOption("Interview 2")}
            >
              Interview 2
            </div>
          </li>
          <li className="me-2">
            <div
              className={`${
                selectedOption === "Interview 3"
                  ? "text-[#fd3103] border-b-2 border-[#fd3103]"
                  : "border-b-2 border-transparent hover:text-black hover:border-gray-700"
              } inline-block p-4 rounded-t-lg  dark:hover:text-gray-300 transition-all duration-300 ease-in-out`}
              onClick={() => setSelectedOption("Interview 3")}
            >
              Interview 3
            </div>
          </li>
          <li className="me-2">
            <div
              className={`${
                selectedOption === "Interview 4"
                  ? "text-[#fd3103] border-b-2 border-[#fd3103]"
                  : "border-b-2 border-transparent hover:text-black hover:border-gray-700"
              } inline-block p-4 rounded-t-lg  dark:hover:text-gray-300 transition-all duration-300 ease-in-out`}
              onClick={() => setSelectedOption("Interview 4")}
            >
              Interview 4
            </div>
          </li>
        </ul>
      </div>

      <Histogram data={data?.questions} />
      <div className="mt-8 w-full md:flex items-center gap-5 h-full">
        <div className=" flex flex-col items-center w-full mb-8 md:mb-0 md:w-1/2">
          <PersonalityChart data={data?.personality} />
        </div>
        <div className=" h-[300px] p-4 text-white shadow-md w-full md:w-1/2 rounded-xl bg-purple-500">
          Comments
        </div>
      </div>
    </div>
  );
};

export default Interview;
