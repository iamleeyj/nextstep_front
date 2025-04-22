import { BellIcon, ChevronDownIcon, SearchIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="w-full h-[72px] flex items-center justify-between px-10 bg-transparent">
      <div className="text-darkgray-11 text-[22px] tracking-[0] leading-7 font-['Poppins',Helvetica] font-semibold">
        메인
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="w-9 h-9 p-0 bg-darkprimary-12 rounded-[18px]"
        >
          <SearchIcon className="h-6 w-6 text-darkgray-11" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="w-9 h-9 p-0 bg-darkprimary-12 rounded-[18px] relative"
        >
          <BellIcon className="h-6 w-6 text-darkgray-11" />
          <div className="absolute w-3.5 h-3.5 top-0 right-0 bg-darkcolor-1 rounded-[7px] border-2 border-solid border-darkgray-2" />
        </Button>

        <Button
          variant="ghost"
          className="h-9 px-1.5 py-1.5 bg-darkprimary-12 rounded-[18px] flex items-center gap-2"
        >
          <Avatar className="h-6 w-6">
            <AvatarImage
              src="https://c.animaapp.com/YvzUc0O8/img/rectangle-6@2x.png"
              alt="User avatar"
            />
            <AvatarFallback>LY</AvatarFallback>
          </Avatar>
          <span className="font-title-poppins-tiny font-[number:var(--title-poppins-tiny-font-weight)] text-darkgray-11 text-[length:var(--title-poppins-tiny-font-size)] tracking-[var(--title-poppins-tiny-letter-spacing)] leading-[var(--title-poppins-tiny-line-height)]">
            Lee Yejin
          </span>
          <ChevronDownIcon className="h-6 w-6 text-darkgray-11" />
        </Button>
      </div>
    </header>
  );
};
