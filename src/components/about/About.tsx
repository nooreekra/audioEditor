import React from "react";
import Laptop from "../../assets/laptop.jpg";
const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center justify-center space-y-9">
          <div className="w-[500px] flex justify-center items-center flex-col">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              About Us
            </h1>
            <p className="text-center">
              MusicEditor is an easy -to-use multitrack audio editor and
              recorder for Windows, macOS, GNU/Linux and other operating
              systems.
            </p>
          </div>

          <div className="flex space-x-6">
            <div className="flex flex-col items-center w-[250px]">
              <h3 className="font-bold">Main task</h3>
              <p>
                Our MusicEditor app is to create high quality, intuitive and
                powerful software. We value diligence, creativity and
                innovation.
              </p>
            </div>
            <div className="flex flex-col items-center w-[250px]">
              <h3 className="font-bold">Project</h3>
              <p>
                MusicEditor allows you to record and edit music, vocals and
                other sounds. When editing audio files you can cut, copy and
                paste parts of recordings and, if necessary, add effects such as
                echo, gain and noise reduction.
              </p>
            </div>
            <div className="flex flex-col items-center w-[250px]">
              <h3 className="font-bold">Help</h3>
              <p>Tutorials for MusicEditor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
