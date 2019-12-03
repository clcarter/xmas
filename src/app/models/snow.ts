import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export type start = number;
export type end = number;
export type Range = [start, end];

export type x = number;
export type y = number;
export type Area = [x , y]

export namespace Color {

  type red = number; // 0 - 255
  type green = number; // 0 - 255
  type blue = number; // 0 - 255
  type opacity = number; // 0 - 1
  export type RGBA = [red, green, blue, opacity? ];

  type HexByte  = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
  export type Hex      = '#' & HexByte & HexByte & HexByte & HexByte & HexByte & HexByte;
  export type HexAlpha = '#' & HexByte & HexByte & HexByte & HexByte & HexByte & HexByte & HexByte & HexByte;

}



export interface Snow {
  maxFlakes: number;
  baseSize: Area
  zRange: Range;
  windowWidth: number; // if the worker can determine this, then don't pass it.
  windowHeight: number;
  color: Color.RGBA | Color.HexAlpha | Color.Hex
  maxFlakeStems: number; //  use a value < 2 for a circle. The higher this value, the more rendering time required per flake
  minFlakeStems: number; //  use a value < 2 to allow simple circle flakes
}
