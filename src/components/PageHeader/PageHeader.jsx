/* eslint-disable react/prop-types */


const PageHeader = ({heading}) => {
  return (
    <div className=" bg-white">
      <div className="relative bg-blue-500 text-white p-4 md:p-4 pb-6 md:pb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 pt-4 md:mb-6">{heading}</h1>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-8 md:h-12">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-white"></div>
            <div 
              className="absolute inset-0 bg-blue-500" 
              style={{
                clipPath: 'ellipse(75% 100% at 50% 0%)'
              }}
            ></div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default PageHeader