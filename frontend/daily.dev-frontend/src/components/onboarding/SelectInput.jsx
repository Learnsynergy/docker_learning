import React from "react";
import { Select, Space } from "antd";

const SelectInput = ({ experienceLevel, setExperienceLevel }) => {
  const handleChange = (value) => {
    setExperienceLevel(value);
  };

  return (
    <Space wrap>
      <Select
        className="w-96 mt-5 h-12 rounded-lg  "
        value={experienceLevel}
        onChange={handleChange}
        options={[
          {
            value: "not-filled",
            label: "Experience level",
          },
          {
            value: "Aspiring engenieer (<1 year)",
            label: "Aspiring engenieer (<1 year)",
          },
          {
            value: "Entry-level (1 year)",
            label: "Entry-level (1 year)",
          },
          {
            value: "Mid-level(2-3 years)",
            label: "Mid-level(2-3 years)",
          },
          {
            value: "Experienced (4-5 years)",
            label: "Experienced (4-5 years)",
          },
          {
            value: "Highly experienced (6-10 years)",
            label: "Highly experienced (6-10 years)",
          },
          {
            value: "I've suffered enough (10+ years)",
            label: "I've suffered enough (10+ years)",
          },
          {
            value: "I'm not an engineer",
            label: "I'm not an engineer",
          },
        ]}
      />
    </Space>
  );
};
export default SelectInput;
