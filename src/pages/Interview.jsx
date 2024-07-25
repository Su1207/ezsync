import React from "react";
import Histogram from "../components/StudentDashboardComponent/Histogram";
import PersonalityChart from "../components/StudentDashboardComponent/PersonalityChart";

const Interview = () => {
  const data = [
    {
      question: "What could be the output ?",
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
    // Add more data points
  ];

  const personalityData = [
    { name: "Communication", value: 85 },
    { name: "Problem-Solving", value: 90 },
    { name: "Adaptability", value: 80 },
    { name: "Teamwork", value: 75 },
    { name: "Leadership", value: 70 },
  ];

  return (
    <div className=" w-full font-poppins">
      <div className=" text-4xl text-gray-700 font-bold mb-5">Interview</div>
      <Histogram data={data} />
      <div className="mt-8 w-full md:flex items-center gap-5 h-full">
        <div className=" flex flex-col items-center w-full mb-8 md:mb-0 md:w-1/2">
          <PersonalityChart data={personalityData} />
          <h4 className=" text-gray-500 text-lg">Personality Chart</h4>
        </div>
        <div className=" h-[300px] p-4 text-white shadow-md w-full md:w-1/2 rounded-xl bg-purple-500">
          Comments
        </div>
      </div>
    </div>
  );
};

export default Interview;
