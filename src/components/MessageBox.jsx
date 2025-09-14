/* eslint-disable react/prop-types */
import Status from "./Status";
/* eslint-disable react/react-in-jsx-scope */
export function MessageBox({ data, readHandler }) {
  return (
    <>
      {data.map((userData, index) => (
        <div
          onClick={() => readHandler(index)}
          key={index}
          className={`flex flex-col items-start   w-[100%] mx-auto my-2 cursor-pointer ${
            userData.read ? "bg-white" : "bg-gray-100"
          } bg-gray-100 rounded-sm p-2   `}
        >
          {" "}
          <div className="flex justify-between gap-3 w-full">
            <div className="flex justify-start gap-3 ">
              {" "}
              <img src={userData.img} className="md:w-8 md:h-8 w-6 h-6" />
              <div className="flex flex-col   items-start justify-start">
                <div className="flex items-center gap-1">
                  <span className="text-slate-900 font-bold md:text-[12px] text-[6px]">
                    {userData.name}
                  </span>
                  <span className="md:text-[12px] text-[6px]">
                    {userData.action}
                  </span>
                  <span className="relative pr-2 text-[6px] md:text-[10px] text-slate-900 font-bold hover:text-slate-600">
                    {userData.post}
                    <span className="text-slate-900 font-bold md:text-[10px] text-[6px] hover:text-slate-600">
                      {userData.group}
                    </span>

                    <span className="absolute md:top-[56%] top-[54%] right-0">
                      {" "}
                      {!userData.read && <Status />}
                    </span>
                  </span>
                </div>
                <span className="md:text-[10px] text-[8px] text-gray-500">
                  {userData.time}
                </span>
              </div>
            </div>
            {userData.chessImage && (
              <img
                className="md:w-10 md:h-10 w-8 h-8 rounded-xl"
                src={userData.chessImage}
                alt="chess image"
              />
            )}
          </div>
          {userData.message && (
            <div className="flex justify-end mt-3">
              <div className=" border-1 border-gray-400 rounded-xl md:text-sm text-[10px] text-gray-500 w-[90%]  md:p-3 p-1.5 ">
                {" "}
                <p className=""> {userData.message}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
