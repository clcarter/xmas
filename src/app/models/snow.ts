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
  export type Hex = string;

}

class Color {
  rgb: Color.RGBA;
  hex: Color.Hex;
  constructor(color: Color.Hex | Color.RGBA) {
    try {
      Color.assertHex(color)
      this.rgb = [parseInt(color.slice(1, 3) as string, 16),
                  parseInt(color.slice(3, 5) as string, 16),
        parseInt(color.slice(5, 7) as string, 16)];
      this.hex = color as Color.Hex

    } catch {
      Color.assertRGB(color);
      this.rgb = color as Color.RGBA;
      const toHex = (i: number) => i.toString(16).padStart(2, '0');
      this.hex = `#${toHex(this.rgb[0])}${toHex(this.rgb[1])}${toHex(this.rgb[2])}` + color[3] ? toHex(this.rgb[3]) : ''
    }
  }
  static hex(color: Color.Hex): Color {
    Color.assertHex(color);

    return new Color(color);
  }

  static assertHex(color: any): void { // asserts color is Color.Hex {
    Color.assert(color.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i), 'Color is not a valid Hex color')
  }

  static assertRGB(color: any): void { // asserts color is Color.RGBA {
    const [r, g, b] = color;
    Color.assert(
      ((r >= 0 && r <= 255) &&
      (g >= 0 && g <= 255) &&
      (b >= 0 && b <= 255)),
      'Provided color is not a valid rgb color'
    )
  }

  private static assert(condition: any, msg?: string): void { // asserts condition {
    if (!condition) {
      throw new Error(msg || 'Bad Color Value)');
    }
  }

  static rgba(...rgb: Color.RGBA): Color {
    Color.assertRGB(rgb);
    return new Color(rgb);
  }
}



export interface Snow {
  maxFlakes: number;
  baseSize: Area
  zRange: Range;
  windowWidth: number; // if the worker can determine this, then don't pass it.
  windowHeight: number;
  color: Color.RGBA | Color.Hex
  maxFlakeStems: number; //  use a value < 2 for a circle. The higher this value, the more rendering time required per flake
  minFlakeStems: number; //  use a value < 2 to allow simple circle flakes
}
