import React from "react";

import codeImage from "../assets/code.jpg";
import PageSection from "./PageSection";

const DevApi = () => {
  return (
    <PageSection
      name="developer API"
      title="Developer API"
      subtitle={` A set of rules and tools for building software applications to interact with a particular system or service.`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* left */}

        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
          Developer APIs streamline development, offering tools for enhanced functionality.
          </p>
          <p className="border-l-4 pl-4 odd:border-orange-300 even:border-red-400">
          Developer APIs streamline development, providing pre-built tools for software integration.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
          Developer APIs empower interoperability, facilitating seamless communication between software systems.
          </p>
          <p className="border-l-4 pl-4 odd:border-orange-300 even:border-red-400">
          Developer APIs enable software integration, enhancing functionality and interoperability.
          </p>
        </div>
        {/* right */}
        <div className="w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0">
          <img
            src={codeImage}
            alt="code"
            className="rounded-lg shadow-lg shadow-thBlue"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default DevApi;