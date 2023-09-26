import React from "react";

const BelowCards = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col text-gray-300">
        {/* Left Card Start */}
        <div
          className="order-2 md:order-1 mb-10 p-4 shadow-custom rounded-lg relative"
          style={{ backgroundColor: "rgba(59,51,100,255)" }}
        >
          <h2 className="text-xl font-semibold mb-3 text-amber-300">
            PROFITABILITY METRICS
          </h2>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">
              Tickets Needed To Be FIRST PLACE:
            </p>
            <span className="text-sm font-bold text-[#d753d2]">1 Ticket</span>
          </div>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">Cost Of Tickets:</p>
            <span className="text-sm font-bold text-[#81d2e5]">
              0.00795 BNB
            </span>
          </div>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">
              Percentage That The First Place Wins:
            </p>
            <span className="text-sm font-bold text-[#d753d2]">20%</span>
          </div>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">Amount To Be Won:</p>
            <span className="text-sm font-bold text-[#81d2e5]">
              8.000000600 BNB
            </span>
          </div>
          &nbsp;
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">
              Tickets Needed To Be SECOND PLACE:
            </p>
            <span className="text-sm font-bold text-[#d753d2]">1 Ticket</span>
          </div>
          <div className="flex justify-between">
            <p className="mb-1 font-light text-xs">Cost Of Tickets:</p>
            <span className="text-sm font-bold text-[#81d2e5]">
              0.00795 BNB
            </span>
          </div>
        </div>
        {/* Left Card End */}

        {/* Middle Card Start */}
        <div className="order-1 md:order-2 lg:p-8 col-span-2 mb-4 m-0 relative text-white">
          <div className="border rounded-lg border-[#d753d2] text-center pt-1 pb-1">
            <p className="text-xs font-bold">
              Last Buyer: <span className="text-green-500">0x0000...0000</span>
            </p>
            <p className="text-xs font-bold">
              is Earning: <span className="text-yellow-300">0 BNB </span>Per
              Hour
            </p>
            <p className="text-xs font-bold">
              Has Earned: <span className="text-yellow-300">0 BNB </span>So Far
            </p>
            <p className="text-xs font-bold">
              Will Win: <span className="text-green-500">10.000001 BNB </span>On
              Game End
            </p>
          </div>

          <div className="m-2 rounded-2xl mt-6 mb-6 pt-1 pb-1 bg-[#6ed9e1] text-[#2b2549] text-center font-extrabold">
            BUY (0.00795 BNB)
          </div>

          <p className="text-center italic text-sm">
            You will earn free BNB for the duration of time you hold the last
            buyer spot - the more tickets you buy, the more you earn per minute
          </p>
        </div>
        {/* Middle Card End */}

        {/* Right Card Start */}
        <div
          className="order-3 p-4 lg:w-[300px] h-80 shadow-custom rounded-lg relative"
          style={{ backgroundColor: "rgba(59,51,100,255)" }}
        >
          <h2 className="text-xl font-semibold mb-3 text-amber-300">
            ROUND STATISTICS
          </h2>
          <div className="flex justify-between">
            <p className="font-light text-xs">Total Tickets Bought:</p>
            <span className="text-sm font-bold text-[#81d2e5]">0 Tickets</span>
          </div>
          &nbsp;
          <div className="flex justify-between">
            <p className="font-light text-xs">BNB Spent On Tickets:</p>
            <span className="text-sm font-bold text-[#81d2e5]">0 BNB</span>
          </div>
          &nbsp;
          <div className="flex justify-between">
            <p className="font-light text-xs">Tokens Bought Back And Burned:</p>
            <span className="text-sm font-bold text-[#de5277]">0</span>
          </div>
        </div>
        {/* Right Card End */}
      </div>
    </div>
  );
};

export default BelowCards;
