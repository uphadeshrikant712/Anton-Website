import React from "react";

const Footer = () => {
  const menu = [
    {
      id: 1,
      title: "Company",
      subMenu: [
        {
          id: 1,
          title: "Submenu 1",
        },
        {
          id: 2,
          title: "Submenu 2",
        },
        {
          id: 3,
          title: "Submenu 3",
        },
      ],
    },
    {
      id: 2,
      title: "Support",
      subMenu: [
        {
          id: 1,
          title: "Apple 1",
          link: "https://apple.com",
        },
        {
          id: 2,
          title: "Apple 2",
        },
        {
          id: 3,
          title: "Apple 3",
        },
      ],
    },
    {
      id: 3,
      title: "Developer API",
      subMenu: [
        {
          id: 1,
          title: "Grape 1",
        },
        {
          id: 2,
          title: "Grape 2",
        },
        {
          id: 3,
          title: "Grape 3",
        },
      ],
    },
    {
      id: 4,
      title: "Stuff",
      subMenu: [
        {
          id: 1,
          title: "Stuff 1",
        },
        {
          id: 2,
          title: "Stuff 2",
        },
        {
          id: 3,
          title: "Stuff 3",
        },
      ],
    },
  ];

  return (
    <div className="border-t border-white">
      <div className=" my-18 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-12">
          {menu.map(({ id, title, subMenu }) => (
            <div key={id}>
              <h1 className="text-lg font-bold">{title}</h1>
              <ul className="mt-1">
                {subMenu.map(({ id, title, link }) => (
                  <li key={id}>
                    <a href={link}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="my-12 text-center text-sm text-yellow-300">
        🛠️ crafted by Shrikant Uphade ✨
        </p>
      </div>
    </div>
  );
};

export default Footer;