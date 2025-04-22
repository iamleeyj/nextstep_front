import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import { ChartContainerSection } from "./sections/ChartContainerSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MarketDataSection } from "./sections/MarketDataSection";
import { MarketOverviewSection } from "./sections/MarketOverviewSection";
import { SidebarSection } from "./sections/SidebarSection/SidebarSection";
// HomePage.tsx 상단에 추가
import { useNavigate } from "react-router-dom";


export const HomePage = (): JSX.Element => {
  // Data for the three financial cards
  const financialCards = [
    {
      id: 1,
      title: "내국인보유량",
      value: "$ 1,037.86",
      change: "+19.43",
      changeType: "increase",
      chartSrc: "https://c.animaapp.com/YvzUc0O8/img/vector-1-1.svg",
      iconSrc: "https://c.animaapp.com/YvzUc0O8/img/group-2@2x.png",
    },
    {
      id: 2,
      title: "외국인보유량",
      value: "$ 312.22",
      change: "- 3.59",
      changeType: "decrease",
      chartSrc: "https://c.animaapp.com/YvzUc0O8/img/vector-2-1.svg",
      iconSrc: "https://c.animaapp.com/YvzUc0O8/img/group-3@2x.png",
    },
    {
      id: 3,
      title: "기관보유량",
      value: "$ 1,037.86",
      change: "+19.43",
      changeType: "increase",
      chartSrc: "https://c.animaapp.com/YvzUc0O8/img/vector-3-1.svg",
      iconSrc: "https://c.animaapp.com/YvzUc0O8/img/group-237578@2x.png",
    },
  ];

  return (
    <main className="bg-[#202020] flex flex-row justify-center w-full">
      <div className="bg-darkgray-1 overflow-hidden w-[1440px] relative">
        {/* Sidebar with logo */}
        <aside className="fixed left-0 h-full w-[190px]">
          <SidebarSection />
          <img
            className="w-[178px] h-px mt-[78px] mx-6 object-cover"
            alt="Line"
            src="https://c.animaapp.com/YvzUc0O8/img/line-3.svg"
          />
          <img
            className="w-[178px] h-[65px] mt-[7px] mx-[21px] object-cover"
            alt="Logo"
            src="https://c.animaapp.com/YvzUc0O8/img/image-1@2x.png"
          />
        </aside>

        {/* Main content area */}
        <div className="ml-[190px] flex flex-col">
          {/* Header section with search filters */}
          <header className="w-full h-[72px]">
            <HeaderSection />

            <div className="absolute top-5 left-[722px] flex items-center gap-2">
              <ToggleGroup type="single" defaultValue="all">
                <ToggleGroupItem
                  value="all"
                  className="h-7 bg-lightgray-0 text-primary-05 text-[10px] rounded-md px-[12.68px] py-[2.11px]"
                >
                  All
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="code"
                  className="h-7 bg-lightgray-7 text-darkgray-9 text-[10px] rounded-md px-[12.68px] py-[2.11px]"
                >
                  종목코드
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="name"
                  className="h-7 bg-lightgray-7 text-darkgray-9 text-[10px] rounded-md px-[12.68px] py-[2.11px]"
                >
                  정식명칭
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </header>

          {/* Main content grid */}
          <div className="flex">
            {/* Chart container section */}
            <section className="w-[37%]">
              <ChartContainerSection />
            </section>

            {/* Market overview section */}
            <section className="w-[38%]">
              <MarketOverviewSection />
            </section>
          </div>

          <div className="flex">
            {/* Financial cards section */}
            <div className="flex justify-between mt-4 px-4 gap-4 w-[77%]">
              {financialCards.map((card) => (
                <Card
                  key={card.id}
                  className="w-[443px] h-[544px] bg-transparent border-0 relative"
                >
                  <CardContent className="p-0 flex flex-col items-center">
                    <img
                      className="w-full h-full absolute top-0 left-0"
                      alt="Card background"
                      src={`https://c.animaapp.com/YvzUc0O8/img/rectangle-${13 + card.id}.svg`}
                    />

                    <div className="w-[83px] h-11 flex items-center justify-center mt-[139px] z-10">
                      <h3 className="font-['Roboto',Helvetica] font-bold text-white text-xl text-center">
                        {card.title}
                      </h3>
                    </div>

                    <img
                      className="w-[398px] h-[319px] mt-[70px] z-10"
                      alt="Chart"
                      src={card.chartSrc}
                    />

                    <div className="flex flex-col items-center mt-auto z-10">
                      <p className="font-['Roboto',Helvetica] font-bold text-white text-[15px] text-center">
                        {card.value}
                      </p>

                      <div className="flex items-center mt-2">
                        <span
                          className={`font-['Roboto',Helvetica] text-[10px] ${
                            card.changeType === "increase"
                              ? "text-[#ff0000]"
                              : "text-[#159300]"
                          }`}
                        >
                          {card.change}
                        </span>
                        <img
                          className="w-[15px] h-[18px] ml-2"
                          alt="Trend indicator"
                          src={card.iconSrc}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Market data section */}
            <section className="w-[23%]">
              <MarketDataSection />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
