import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <div className="container text-center">
        <h1 className="font-bold text-4xl text-center mt-3">About Me</h1>
        <div
          className="d-flex flex-column mb-3 .justify-content-center
align-items-center"
        >
          <div className="mt-4">
            <div class="avatar">
              <div class="w-24 mask mask-hexagon">
                <img src="https://lh3.googleusercontent.com/a-/AOh14GgmvYYCNHapX35tDKfoH1d3hHBJBCY-LZ_59sD29Q=s96-c" />
              </div>
            </div>
            <h1 className="font-semibold text-2xl">Muhammad Shafi</h1>
            <p className="font-semibold">shahedali734@gmail.com</p>
            <h4 className="font-semibold">Patiya, Chattogram</h4>
            <h4 className="font-semibold mt-3  text-xl text-success">Educational Background</h4>
            <p className="font-semibold">
              BBA Hon's - Department of Management (2019 - Present) <br></br>
              <span className="font-semibold">
                {" "}
                National University(NU)
              </span>
            </p>
          </div>
        </div>
        <h1 className="font-bold text-center text-xl text-success mt-3">My Skilss</h1>
        <div
          className="d-flex flex-column justify-content-center
align-items-center"
        >
          <div className="">
            <p className="font-semibold">
              <span className="text-success">Expertise: </span>JavaScript, ES6,
              React.js,, React Bootstrap, HTML, CSS, Bootstrap,
            </p>
            <p className="font-semibold">
              <span className="text-success">Comfortable: </span>Node.js, Express.js,
              MongoDB,Rest API, Firebase authentication,Tailwind CSS.
            </p>
            <p className="font-semibold ">
              <span className="text-success">Tools: </span>VS Code,
              GitHub, Create React App, NPM, Chrome
              Dev tool, Firebase, Netlify, Heroku.
            </p>
          </div>
        </div>
        <h1 className="font-bold text-xl text-success text-center mt-3">
          Links of three of my projects{" "}
        </h1>
        <div
          className="d-flex flex-column mb-3 .justify-content-center
align-items-center"
        >
          <div className="">
            <a
              className="text-decoration-none text-xl font-bold text-secondary"
              href="https://warehose-management-website.web.app/"
            >
              Smart Electronics
            </a>
            <br />
            <a
              className="text-decoration-none text-xl font-bold text-secondary"
              href="https://lucent-kashata-03ee9c.netlify.app/"
            >
              Furniture Mart
            </a>
            <br />
            <a
              className="text-decoration-none text-xl font-bold text-secondary"
              href="https://warehose-management-website.web.app/"
            >
              Smart Electronics
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
