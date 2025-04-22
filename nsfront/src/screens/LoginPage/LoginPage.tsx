import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const LoginPage = (): JSX.Element => {
  return (
    <div className="bg-black flex flex-row justify-center w-full min-h-screen">
      <div className="bg-black overflow-hidden w-full max-w-[1440px] relative py-[102px]">
        {/* Left blue circle with light blue dot */}
        <div className="absolute w-[268px] h-[844px] top-[102px] left-0 bg-[url(https://c.animaapp.com/EnwNaksK/img/ellipse-1.svg)] bg-[100%_100%]">
          <div className="relative w-[76px] h-[76px] top-[65px] left-[118px] bg-secendry rounded-[38px]" />
        </div>

        {/* Top right decorative element */}
        <img
          className="absolute w-[513px] h-[463px] top-0 right-0"
          alt="Decorative element"
          src="https://c.animaapp.com/EnwNaksK/img/subtract.svg"
        />

        {/* Bottom right polygon */}
        <img
          className="absolute w-52 h-[248px] bottom-0 right-0"
          alt="Decorative polygon"
          src="https://c.animaapp.com/EnwNaksK/img/polygon-1.svg"
        />

        {/* Logo image */}
        <img
          className="absolute w-[422px] h-[154px] top-[215px] left-1/2 -translate-x-1/2 object-cover"
          alt="Next Step Logo"
          src="https://c.animaapp.com/EnwNaksK/img/image-2@2x.png"
        />

        {/* Login form */}
        <Card className="border-none shadow-none bg-transparent w-[531px] mx-auto mt-[400px]">
          <CardContent className="p-0 space-y-12">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="block font-subtitel font-[number:var(--subtitel-font-weight)] text-graye text-[length:var(--subtitel-font-size)] tracking-[var(--subtitel-letter-spacing)] leading-[var(--subtitel-line-height)] [font-style:var(--subtitel-font-style)]"
              >
                Username
              </label>
              <Input
                id="username"
                className="border-0 border-b border-graye rounded-none bg-transparent h-10 px-0 focus-visible:ring-0 focus-visible:border-praimery"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block font-subtitel font-[number:var(--subtitel-font-weight)] text-graye text-[length:var(--subtitel-font-size)] tracking-[var(--subtitel-letter-spacing)] leading-[var(--subtitel-line-height)] [font-style:var(--subtitel-font-style)]"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                className="border-0 border-b border-graye rounded-none bg-transparent h-10 px-0 focus-visible:ring-0 focus-visible:border-praimery"
              />
            </div>

            <Button className="w-full bg-praimery hover:bg-praimery/90 text-withe text-2xl font-['IRANSansXFaNum-Regular',Helvetica] py-6">
              login
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
