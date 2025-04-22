import { ArrowUpIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

// Define time period options for the chart
const timePeriods = [
  { value: "30m", label: "30m" },
  { value: "1H", label: "1H" },
  { value: "4H", label: "4H" },
  { value: "1D", label: "1D" },
  { value: "7D", label: "7D" },
];

export const ChartContainerSection = (): JSX.Element => {
  return (
    <div className="w-full max-w-[531px]">
      <Card className="w-full bg-darkgray-0 rounded-lg shadow-[0px_1px_4px_#0000001a]">
        <CardContent className="p-6">
          <h2 className="font-title-poppins-large text-darkgray-11 mb-8">
            코스피
          </h2>

          <div className="relative">
            <div className="mb-6">
              <div className="font-body-medium text-darkgray-9">
                Your total balance
              </div>

              <div className="flex items-center mt-2">
                <div className="font-['Poppins',Helvetica] font-semibold text-[22px] leading-7">
                  <span className="text-[#fefefe]">$25,901.0.</span>
                  <span className="text-[#dadada] text-base">41</span>
                </div>

                <Badge className="ml-6 flex items-center gap-1 px-2 py-0.5 bg-darkbg-2 rounded-[10px] text-darkcolor-2 opacity-80">
                  <ArrowUpIcon className="h-[5.2px] w-[6.27px]" />
                  <span className="font-title-poppins-small">810%</span>
                </Badge>
              </div>

              <div className="font-title-poppins-tiny text-darkgray-11 mt-2">
                $1,521.4
              </div>
            </div>

            <div className="relative h-[193px] w-full">
              {/* Chart background with grid lines */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://c.animaapp.com/YvzUc0O8/img/vector-4.svg)",
                }}
              >
                <img
                  className="absolute w-[273px] h-px top-[81px] left-[27px]"
                  alt="Grid line"
                  src="https://c.animaapp.com/YvzUc0O8/img/line.svg"
                />
                <img
                  className="absolute w-[422px] h-px top-[41px] left-[27px]"
                  alt="Grid line"
                  src="https://c.animaapp.com/YvzUc0O8/img/line-1.svg"
                />
                <img
                  className="absolute w-[114px] h-px top-[121px] left-[27px]"
                  alt="Grid line"
                  src="https://c.animaapp.com/YvzUc0O8/img/line-2.svg"
                />

                {/* Tooltip */}
                <div className="absolute right-[3px] top-0">
                  <div className="relative">
                    <div className="absolute w-[75px] h-[62px] top-[31px] left-16 rounded-[37.44px/31px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(21,115,254,1)_0%,rgba(21,115,254,0.1)_72%)] opacity-40" />
                    <div className="absolute w-[19px] h-4 top-[50px] left-[93px] bg-darkprimary rounded-[9.66px/8px] border-[3px] border-solid border-darkgray-0" />
                    <div className="relative w-[103px]">
                      <div className="bg-darkprimary rounded-[8px_8px_0px_8px] p-2">
                        <div className="font-title-poppins-small text-darkgray-0">
                          NYSE
                        </div>
                        <div className="font-body-medium text-darkgray-0 mt-1">
                          15.780,01
                        </div>
                      </div>
                      <img
                        className="absolute w-px h-[15px] bottom-0 right-0"
                        alt="Line"
                        src="https://c.animaapp.com/YvzUc0O8/img/line-11.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Time period selector */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <ToggleGroup
                  type="single"
                  defaultValue="30m"
                  className="flex space-x-5"
                >
                  {timePeriods.map((period) => (
                    <ToggleGroupItem
                      key={period.value}
                      value={period.value}
                      className={`font-heading-07 text-darkgray-11 h-4 p-0 data-[state=on]:font-bold data-[state=off]:opacity-40 bg-transparent`}
                    >
                      {period.label}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
