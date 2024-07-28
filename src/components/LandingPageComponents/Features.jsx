import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const companyFeatures = [
    {
      icon: "/candidate.png",
      title: "Efficient Candidate Screening",
      content:
        "Streamline your hiring process with GenAI based screening round and multiple others rounds with advanced 3D avatar interviews that save time and resources.",
    },
    {
      icon: "/meeting.png",
      title: "Automated Interview Scheduling",
      content:
        "Simplify scheduling with our automated system that coordinates with candidates’ availability.",
    },
    {
      icon: "/graph.png",
      title: "Detailed Candidate Analytics",
      content:
        "Access comprehensive analytics and reports on candidate performance to make informed hiring decisions.",
    },
    {
      icon: "/leadership.png",
      title: "Enhanced Candidate Experience",
      content:
        "Provide candidates with a modern and engaging interview experience that reflects positively on your brand.",
    },
    {
      icon: "/scalability.png",
      title: "Scalable Solutions",
      content:
        "Scale your hiring process effortlessly to accommodate varying volumes of interviewees.",
    },
    {
      icon: "/data-management.png",
      title: "Secure Data Management",
      content:
        "Ensure the confidentiality and security of candidate data with our robust data protection measures.",
    },
  ];

  return (
    <div className=" font-poppins" id="features">
      <div className="bg-white py-12 pb-20">
        <div className="text-3xl text-center px-4 mb-10 sm:text-5xl text-gray-700 md:text-6xl font-extrabold">
          Our Features
        </div>

        <h2 className=" text-4xl text-center text-black mb-8 font-bold">
          For Candidates
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 gap-4">
          {/* <FeatureCard
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
          /> */}

          <FeatureCard
            icon={"/virtual-assistant.png"}
            title={"Realistic 3D Avatar Interviews with Flexible Scheduling"}
            content="Engage in lifelike interview simulations with customizable 3D avatars and easily schedule mock interviews at your convenience to fit your preparation needs."
          />
          <FeatureCard
            icon={"/cheer-up.png"}
            title={"Comprehensive Practice Scenarios"}
            content="Access a wide range of industry-specific questions and scenarios to sharpen your skills."
          />
          <FeatureCard
            icon={"/assessment.png"}
            title={"Instant Feedback, Analysis, and Progress Tracking"}
            content="Receive detailed feedback and performance analysis to identify strengths and areas for improvement, and monitor your progress over time with our intuitive tracking tools."
          />
          <FeatureCard
            icon={"/feedback.png"}
            title={"Peer and Mentor Reviews"}
            content="Gain insights from peer reviews and professional mentors to enhance your interview performance."
          />
          <FeatureCard
            icon={"/job-search.png"}
            title={"Tailored Job Roles Just for You"}
            content="Discover job roles personalized to your profile."
          />
          <FeatureCard
            icon={"/cv.png"}
            title={"AI-Powered ATS-Friendly Resume Generator"}
            content="Create resumes that pass ATS with ease using GenAI."
          />
          <FeatureCard
            icon={"/review.png"}
            title={"Get Your ATS Resume Score Instantly"}
            content="Instantly check how your resume scores with ATS."
          />
          <FeatureCard
            icon={"/cover.png"}
            title={"GenAI Cover Letter Creator Tailored to Job Descriptions"}
            content="Generate custom cover letters aligned with job descriptions."
          />
        </div>

        {/* <h2 className=" text-4xl text-center text-black mb-8 mt-12 font-bold">
          For Companies
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 gap-4">
          {companyFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Features;
