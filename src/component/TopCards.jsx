import bnb_img from "../assets/bnbbag.webp";
import left from "../assets/left.png";
import right from "../assets/right.png";
import { topCardData } from "../dummydata/topCard";

import { useState, useEffect, useRef } from "react";

const TopCards = () => {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const [hideButtons, setHideButtons] = useState(false);

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current?.scrollWidth >= parent?.offsetWidth)
      return setHideButtons(false);
    return setHideButtons(true);
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener("resize", isScrollable);

    return () => {
      window.removeEventListener("resize", isScrollable);
    };
  });

  return (
    <>
      <div className="relative flex-1 max-w-full flex" ref={parentRef}>
        <div
          className="flex flex-row w-max overflow-x-scroll no-scrollbar gap-6 p-2 text-center pb-8 text-white select-none"
          ref={scrollRef}
        >
          {topCardData.map((item) => {
            return (
              <div
                className="p-2 rounded-lg w-[230px] lg:w-[253px] shadow-custom  mb-4 relative flex-shrink-0 w-[calc(25% - 2rem)]"
                style={{ backgroundColor: "rgba(59,51,100,255)" }}
              >
                <img
                  src={bnb_img}
                  alt="Small img"
                  className="w-16 h-16 mx-auto"
                />
                <h2 className="text-xl font-semibold mb-1 mt-4">
                  {item.balance} BNB
                </h2>
                <h5 className="mb-4 font-light text-xs">{item.owner}</h5>
                <h5 className="mb-4 font-light text-xs">
                  {item.totalParticipants}
                </h5>
              </div>
            );
          })}

          {!hideButtons && (
            <>
              <div
                className="absolute w-8 h-8 minlg:w-12 minlg:h-12 -left-6 top-24 cursor-pointer hidden lg:flex"
                onClick={() => handleScroll("left")}
              >
                <img
                  src={left}
                  layout="fill"
                  objectFit="contain"
                  alt="left_arrow"
                />
              </div>
              <div
                className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-24 -right-6 cursor-pointer hidden lg:flex"
                onClick={() => handleScroll("right")}
              >
                <img
                  src={right}
                  layout="fill"
                  objectFit="contain"
                  alt="right_arrow"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TopCards;
