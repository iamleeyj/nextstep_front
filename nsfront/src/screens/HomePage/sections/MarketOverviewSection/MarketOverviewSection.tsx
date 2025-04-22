import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Market data for the cards
const marketData = [
  {
    id: 1,
    title: "환율",
    subtitle: "Ethereum",
    price: "$23,738",
    pnlDaily: "+$189.91",
    pnlPercentage: "+24.68%",
    iconBg: "bg-darkbg-4",
    iconSrc: "https://c.animaapp.com/YvzUc0O8/img/vector-2.svg",
    chartSrc: "https://c.animaapp.com/YvzUc0O8/img/vector-3.svg",
    isPnlPositive: true,
  },
  {
    id: 2,
    title: "유가",
    subtitle: "Bitcoin",
    price: "$23,738",
    pnlDaily: "-$16.78",
    pnlPercentage: "+14.67%",
    iconBg: "bg-darkbg-1",
    iconSrc: "https://c.animaapp.com/YvzUc0O8/img/vector.svg",
    chartSrc: "https://c.animaapp.com/YvzUc0O8/img/vector-1.svg",
    isPnlPositive: false,
  },
];

export const MarketOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-4 w-full max-w-[542px]">
      {marketData.map((item) => (
        <Card
          key={item.id}
          className="bg-darkgray-0 rounded-xl shadow-[0px_1px_4px_#0000001a] h-[174px] relative"
        >
          <CardContent className="p-5">
            <div className="flex flex-col h-full">
              <div className="flex items-start">
                <div
                  className={`${item.iconBg} rounded-lg w-11 h-[43px] flex items-center justify-center`}
                >
                  <img
                    className="w-auto h-6"
                    alt="Crypto icon"
                    src={item.iconSrc}
                  />
                </div>

                <div className="flex flex-col ml-3">
                  <div className="font-title-poppins-medium text-darkgray-11 tracking-[var(--title-poppins-medium-letter-spacing)] leading-[var(--title-poppins-medium-line-height)]">
                    {item.title}
                  </div>
                  <div className="font-body-small text-darkgray-8 tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] -mt-1.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>

              <div className="flex mt-5">
                <div className="font-title-poppins-medium text-darkgray-11 tracking-[var(--title-poppins-medium-letter-spacing)] leading-[var(--title-poppins-medium-line-height)]">
                  {item.price}
                </div>
                <img
                  className="ml-auto w-[139px] h-[52px]"
                  alt="Price chart"
                  src={item.chartSrc}
                />
              </div>

              <div className="flex items-center mt-auto">
                <div className="font-body-medium text-darkgray-8 tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)]">
                  PNL Daily
                </div>
                <div
                  className={`ml-10 w-[65px] font-title-poppins-small tracking-[var(--title-poppins-small-letter-spacing)] leading-[var(--title-poppins-small-line-height)] ${item.isPnlPositive ? "text-darkcolor-2" : "text-darkcolor-1"}`}
                >
                  {item.pnlDaily}
                </div>
                <Badge className="ml-10 bg-darkbg-2 text-darkcolor-2 rounded-[60px] px-2 font-title-poppins-tiny tracking-[var(--title-poppins-tiny-letter-spacing)] leading-[var(--title-poppins-tiny-line-height)]">
                  {item.pnlPercentage}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
