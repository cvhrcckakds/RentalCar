import { MouseEventHandler } from "react";

export type ButtonPropsType = {
    disabled?: boolean;
   designs?: string;
   btnType?: "submit" | "reset" | "button";
   title: string;
rIcon?:string;
   //tıklama olayında çalışan fonksiyon
  handleClick:MouseEventHandler <HTMLButtonElement>;
  };

//Apiden geşen araç verisi
export interface CarType{
     city_mpg:number;
     class: string;
     combination_mpg: number;
     cylinders: number;
     displacemenet: number;
     drive: 'fwd'| 'rwd'|'awd'| '4wd';
     fuel_type: 'gas' | 'diesel' | 'electricity';
     highway_mpg: number;
     make: string;
     model: string;
     transmission: 'a'| 'm';
    year: number;
 }

 export type OptionType = {
   label: string;
   value: string;
 };