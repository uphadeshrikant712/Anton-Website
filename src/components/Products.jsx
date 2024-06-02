
import React from "react";
import PageSection from "./PageSection";

import { FaRocket, FaSatellite, FaRobot, FaMicrochip } from "react-icons/fa";

const Prodcuts = () => {
  const products = [
    {
      id: 1,
      icon: <FaRocket size={50} className="text-white" />,
      title: "rocket manufacturing",
      subtitle:
        "Rocket manufacturing involves designing, selecting materials, fabricating components, assembling propulsion systems, integrating avionics, and conducting rigorous testing to ensure reliability, followed by final assembly and pre-launch preparations for a successful launch.",
    },
    {
      id: 2,
      icon: <FaMicrochip size={50} className="text-white" />,
      title: "advanced electronics",
      subtitle:
        "Advanced electronics involve cutting-edge technology in semiconductors, microprocessors, and integrated circuits, enhancing performance and efficiency in devices from smartphones to aerospace systems.",
    },
    {
      id: 3,
      icon: <FaRobot size={50} className="text-white" />,
      title: "robotics",
      subtitle:
        "Robotics integrates advanced sensors, AI, and mechanical engineering to create intelligent machines capable of performing complex tasks autonomously in various industries and applications.",
    },
    {
      id: 4,
      icon: <FaSatellite size={50} className="text-white" />,
      title: "payload to orbit",
      subtitle:
        "Payload to orbit involves designing, integrating, and launching satellites or cargo into space, ensuring precise deployment and operation for communication, research, or other space-based functions.",
    },
  ];

  return (
    <PageSection
      name="products"
      title="Products"
      subtitle={`Products are tangible items created through manufacturing processes, designed to meet consumer needs and preferences, ranging from everyday goods to specialized industrial equipment.`}
    >
      <div className="grid lg:grid-cols-2 gap-12 text-black">
        {products.map(({ id, icon, title, subtitle }) => (
          <div
            key={id}
            className="group bg-gradient-to-r from-orange-400 to-green-300 rounded-lg flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              <div className="bg-black rounded-full p-5 m-4">{icon}</div>
            </div>
            <h1 className="text-3xl lg:text-5xl my-8 capitalize">{title}</h1>
            <p className="text-lg">{subtitle}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Prodcuts;
