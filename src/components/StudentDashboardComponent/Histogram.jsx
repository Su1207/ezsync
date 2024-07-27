import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Label,
  Legend,
} from "recharts";

const CustomTooltip = ({ payload, label }) => {
  if (payload && payload.length) {
    const { question, accuracy, gestures, relevance, knowledge } =
      payload[0].payload;
    return (
      <div className="custom-tooltip bg-[#000] w-[70%] sm:w-full shadow-md rounded-md text-white p-2 sm:p-4 text-xs sm:text-sm">
        <p className="label mb-2">{`Question: ${question}`}</p>
        <p className="intro">{`Accuracy: ${accuracy}`}</p>
        <p className="intro">{`Gestures: ${gestures}`}</p>
        <p className="intro">{`Relevance: ${relevance}`}</p>
        <p className="intro">{`Knowledge: ${knowledge}`}</p>
      </div>
    );
  }
  return null;
};

const Histogram = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[300px] w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="question" tick={false} axisLine={false}>
              <Label value="Questions" offset={-1} position="insideBottom" />
            </XAxis>
            <YAxis>
              <Label value="Scores" angle={-90} position="insideLeft" />
            </YAxis>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="accuracy" fill="#9c27b0" name="Accuracy" />
            <Bar dataKey="gestures" fill="#00bcd4" name="Gestures" />
            <Bar dataKey="relevance" fill="green" name="Relevance" />
            <Bar dataKey="knowledge" fill="#ff0000" name="Knowledge" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Histogram;
