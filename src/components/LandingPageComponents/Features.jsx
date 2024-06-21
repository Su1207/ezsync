import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className=" font-poppins" id="features">
      <div className="bg-white py-12 pb-20">
        <div className="text-3xl text-center px-4 mb-16 sm:text-5xl text-gray-500 md:text-6xl font-extrabold">
          Our Features
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 gap-4">
          <FeatureCard
            icon={"/feature1.jpeg"}
            title={"Personalized Professional Assessment"}
            content="Lucia tailors its questioning based on the candidate's
              professional background and experience, ensuring that the
              interview is relevant and insightful. By adapting its approach to
              each candidate's unique profile, Lucia provides a personalized
              assessment that accurately reflects their capabilities and
              potential fit for the role."
          />
          <FeatureCard
            icon={"/cloud.png"}
            title={"Data Driven Insights"}
            content="Lucia generates data-driven insights and recommendations based on
            the interview analysis. It identifies patterns, trends, and
            correlations within candidate responses, empowering recruiters and
            hiring managers to make informed decisions about candidate selection
            and placement."
          />
          <FeatureCard
            icon={"/experience.png"}
            title={"Enchanced Candidate Experience"}
            content="Lucia prioritizes candidate experience by delivering a seamless and
            engaging interview process. Its conversational interface and
            intuitive interaction design create a positive impression on
            candidates, enhancing their overall experience and perception of the
            organization."
          />

          <FeatureCard
            icon={"/ai.png"}
            title={"Continuous Learning and Improvement"}
            content="Lucia continuously learns and improves over time through feedback
            and iterative refinement. By incorporating user input and
            performance data, it enhances its interviewing techniques and
            analytical capabilities, ensuring ongoing optimization and
            effectiveness."
          />

          <FeatureCard
            icon={"/meeting.png"}
            title={"Time Effective Interviews"}
            content="Lucia streamlines the interview process, saving valuable time for
            both candidates and hiring managers. Its efficient questioning
            techniques and automated responses ensure that interviews are
            conducted swiftly without compromising on the depth of assessment."
          />

          <FeatureCard
            icon={"/graph.png"}
            title={"Graph-Based Analysis"}
            content="Lucia employs graph-based analysis techniques to visualize candidate
            data and insights. By forming graphs based on the questions asked,
            Lucia provides a clear visualization of candidate attributes such as
            eagerness to join the company, knowledge about the job role, and
            professional qualifications."
          />

          <FeatureCard
            icon={"/cheer-up.png"}
            title={"Assessment of Candidate's Eagerness to Join"}
            content="Through carefully crafted questions and analysis of candidate
            responses, Lucia assesses the candidate's level of enthusiasm and
            commitment towards joining the company. This insight helps
            recruiters gauge the candidate's alignment with the organization's
            goals and culture."
          />

          <FeatureCard
            icon={"/assessment.png"}
            title={"Evaluation of Knowledge About Job Roles"}
            content="Lucia evaluates the candidate's understanding of the job role by
            asking targeted questions related to the responsibilities,
            requirements, and expectations associated with the position. It
            analyzes the depth and accuracy of the candidate's responses to
            determine their proficiency and suitability for the role."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
