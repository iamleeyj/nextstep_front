import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

// Define cryptocurrency data for mapping
const cryptoData = [
  {
    symbol: "BTCUSDT",
    name: "Bitcoin",
    price: "$23,495",
    change: "+23.4%",
    positive: true,
  },
  {
    symbol: "AUSUDT",
    name: "Axie Infini",
    price: "$15.95",
    change: "-8.9%",
    positive: false,
  },
  {
    symbol: "ETHUSDT",
    name: "Ethereum",
    price: "$12.950",
    change: "+1.5%",
    positive: true,
  },
  {
    symbol: "SOLUSDT",
    name: "Solana",
    price: "$15.95",
    change: "-4.5%",
    positive: false,
  },
  {
    symbol: "BNBUSD",
    name: "Binance",
    price: "$15.95",
    change: "+8.9%",
    positive: true,
  },
  {
    symbol: "ADAUSFT",
    name: "Cardano",
    price: "$15.95",
    change: "-12.2%",
    positive: false,
  },
  {
    symbol: "AUSUDT",
    name: "Axie Infini",
    price: "$15.95",
    change: "-9.8%",
    positive: false,
  },
  {
    symbol: "ETHUSDT",
    name: "Ethereum",
    price: "$12.950",
    change: "+1.5%",
    positive: true,
  },
];

export const MarketDataSection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[325px] shadow-[0px_1px_4px_#0000001a] bg-lightgray-11 rounded-lg">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-title-poppins-medium font-[number:var(--title-poppins-medium-font-weight)] text-lightgray-0 text-[length:var(--title-poppins-medium-font-size)] tracking-[var(--title-poppins-medium-letter-spacing)] leading-[var(--title-poppins-medium-line-height)]">
            거래량
          </h3>

          <Tabs defaultValue="all" className="w-auto">
            <TabsList className="bg-transparent p-0 h-7 space-x-1.5">
              <TabsTrigger
                value="all"
                className="px-3 py-0.5 h-7 text-[10px] data-[state=active]:bg-lightgray-0 data-[state=active]:text-primary-05 data-[state=inactive]:bg-lightgray-7 data-[state=inactive]:text-darkgray-9 rounded-md"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="meta"
                className="px-3 py-0.5 h-7 text-[10px] data-[state=active]:bg-lightgray-0 data-[state=active]:text-primary-05 data-[state=inactive]:bg-lightgray-7 data-[state=inactive]:text-darkgray-9 rounded-md"
              >
                Meta
              </TabsTrigger>
              <TabsTrigger
                value="gaming"
                className="px-3 py-0.5 h-7 text-[10px] data-[state=active]:bg-lightgray-0 data-[state=active]:text-primary-05 data-[state=inactive]:bg-lightgray-7 data-[state=inactive]:text-darkgray-9 rounded-md"
              >
                Gaming
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="space-y-2">
          {cryptoData.map((crypto, index) => (
            <div key={index} className="flex items-center justify-between py-1">
              <div className="w-[65px] text-[length:var(--title-poppins-small-font-size)] leading-[var(--title-poppins-small-line-height)] font-title-poppins-small font-[number:var(--title-poppins-small-font-weight)] text-darkgray-11 tracking-[var(--title-poppins-small-letter-spacing)]">
                {crypto.symbol}
              </div>

              <div className="w-16 text-darkgray-7 font-body-small font-[number:var(--body-small-font-weight)] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)]">
                {crypto.name}
              </div>

              <div className="w-[54px] text-right font-body-small font-[number:var(--body-small-font-weight)] text-darkgray-11 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)]">
                {crypto.price}
              </div>

              <Badge
                className={`rounded-[70.42px] px-2 py-0 h-[16.3px] font-normal text-[12.2px] tracking-[0.41px] leading-[16.3px] ${
                  crypto.positive
                    ? "bg-darkbg-2 text-darkcolor-2"
                    : "bg-darkbg-3 text-darkcolor-1"
                }`}
              >
                {crypto.change}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
