import React, { Fragment } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { faquestion } from "@/utils/Faq/Faq";

const FaqComp = () => {
  const [index, setIndex] = React.useState(null);
   
  const displayHandler = (i) => {
    setIndex((prevIndex) => (prevIndex === i ? null : i));
  };

  return (
    <Fragment>
      <div className="container px-4 sm:px-6 md:px-8 flex flex-col justify-center items-center my-5">
        <h1 className="text-2xl flex justify-center items-center text-white">
          FAQ
        </h1>
        {faquestion.map((text, i) => (
          <div
            className={`border-custom-green h-fit ${index === i ? "border-violet-600 rounded-2xl" :null}  border-2 w-full my-2  rounded-xl`}
            key={text.id}
          >
            <div
          
              onClick={()=> displayHandler(i)} 
              className="bg-slate-700 px-5 rounded-xl py-3 text-white w-full flex justify-between items-center cursor-pointer"
            >
              <div>{text.questTxt}</div>
              <ExpandLessIcon
                className={`transition-transform ${
                  index === i ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {index === i && <div className="p-4 text-white">{text.showTxt}</div>}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default FaqComp;
