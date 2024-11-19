import React, { Fragment } from "react";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { faquestion } from "@/utils/Faq/Faq";

const FaqComp = () => {
  const [index, setIndex] = React.useState(null);

  const displayHandler = (i) => {
    setIndex((prevIndex) => (prevIndex === i ? null : i));
  };

  return (
    <Fragment>
      <div className="container px-4 sm:px-6 md:px-8 flex flex-col justify-center items-center my-5">
        <h1 className="text-2xl flex justify-center items-center text-black">
          FAQ
        </h1>
        {faquestion.map((text, i) => (
          <div
            className={`border-custom-green h-fit py-3 ${
              index === i ? "border-blue-700 border-2 rounded-2xl" : null
            }  border-2 border-blue-700 w-full my-2  rounded-xl`}
            key={text.id}
          >
            <div
              onClick={() => displayHandler(i)}
              className=" px-5 rounded-xl py-3 text-black w-full flex justify-between items-center cursor-pointer"
            >
              <div className="text-lg">{text.questTxt}</div>

              <ArrowDropDownCircleIcon
                sx={{ color: "black", fontSize: 40 }}
                className={`transition-transform rounded-full p-1 ${
                  index === i ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {index === i && (
              <div className="p-4 text-black">{text.showTxt}</div>
            )}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default FaqComp;
