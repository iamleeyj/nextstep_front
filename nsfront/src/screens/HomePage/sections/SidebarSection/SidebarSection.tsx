import {
    HelpCircleIcon,
    HomeIcon,
    LogOutIcon,
    PieChartIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../../../../components/ui/button";
  import { Separator } from "../../../../components/ui/separator";
  
  export const SidebarSection = (): JSX.Element => {
    // Navigation menu items data
    const menuItems = [
      {
        icon: <HomeIcon className="w-6 h-6" />,
        label: "메인",
        active: true,
      },
      {
        icon: <PieChartIcon className="w-6 h-6" />,
        label: "주식 예측",
        active: false,
      },
    ];
  
    // Footer menu items data
    const footerItems = [
      {
        icon: <HelpCircleIcon className="w-6 h-6" />,
        label: "Help",
      },
      {
        icon: <LogOutIcon className="w-6 h-6" />,
        label: "Log Out",
      },
    ];
  
    return (
      <aside className="w-56 h-full">
        <div className="w-full h-full bg-darkgray-0 flex flex-col">
          {/* Logo would go here */}
  
          {/* Navigation Menu */}
          <nav className="mt-[131px] mx-4 flex flex-col space-y-5">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`flex items-center justify-start h-[50px] px-4 ${
                  item.active
                    ? "bg-darkprimary-40 text-darkprimary"
                    : "text-darkgray-7"
                } rounded-lg`}
              >
                {item.icon}
                <span className="ml-[9px] font-title-poppins-medium text-[length:var(--title-poppins-medium-font-size)] tracking-[var(--title-poppins-medium-letter-spacing)] leading-[var(--title-poppins-medium-line-height)]">
                  {item.label}
                </span>
              </Button>
            ))}
          </nav>
  
          {/* Footer Section */}
          <div className="mt-auto mb-6 mx-4">
            <Separator className="mb-5" />
  
            <div className="flex flex-col space-y-5 px-2">
              {footerItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="flex items-center justify-start h-[22px] p-0 text-lightgray-0"
                >
                  {item.icon}
                  <span className="ml-4 font-normal text-[14.1px] tracking-[0.09px] leading-[21.1px]">
                    {item.label}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    );
  };
  