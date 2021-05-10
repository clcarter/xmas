export type Start = number
export type End = number
export type Range = [Start, End]

export type X = number
export type Y = number
export type Area = [X, Y]

type Hexibit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 | 'a' | 'b' | 'c' | 'd' | 'e' | 'f'
type Hexibyte = `${Hexibit}${Hexibit}`
type HexColor = [Hexibyte, Hexibyte, Hexibyte, Hexibyte?]

// eslint-disable-next-line @typescript-eslint/prefer-namespace-keyword, @typescript-eslint/no-namespace
export module Color {
  type Red = number // 0 - 255
  type Green = number // 0 - 255
  type Blue = number // 0 - 255
  type Opacity = number // 0 - 1
  export type RGBA = [Red, Green, Blue, Opacity?]
  export type Hex = HexColor
}

class Color {
  rgb: Color.RGBA
  hex: Color.Hex
  constructor(color: Color.Hex | Color.RGBA) {
    try {
      Color.assertHex(color)
      this.rgb = [
        parseInt(color[0] as string, 16),
        parseInt(color[1] as string, 16),
        parseInt(color[2] as string, 16),
      ]
      this.hex = color as Color.Hex
    } catch {
      Color.assertRGB(color)
      this.rgb = color as Color.RGBA
      const toHex = (i: number) => i.toString(16).padStart(2, '0') as unknown as Hexibyte
      const alphaChannel: [Hexibyte?] = color[3]
      ? [toHex(this.rgb[3] ?? 0)]
      : []
      this.hex =
        [toHex(this.rgb[0]), toHex(this.rgb[1]), toHex(this.rgb[2]), ...alphaChannel]
    }
  }
  static hex(color: Color.Hex): Color {
    Color.assertHex(color)

    return new Color(color)
  }

  static assertHex(color: any): void {
    // asserts color is Color.Hex {
    Color.assert(
      color.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i),
      'Color is not a valid Hex color'
    )
  }

  static assertRGB(color: any): void {
    // asserts color is Color.RGBA {
    const [r, g, b] = color
    Color.assert(
      r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255,
      'Provided color is not a valid rgb color'
    )
  }

  static rgba(...rgb: Color.RGBA): Color {
    Color.assertRGB(rgb)
    return new Color(rgb)
  }

  private static assert(condition: any, msg?: string): void {
    // asserts condition {
    if (!condition) {
      throw new Error(msg || 'Bad Color Value)')
    }
  }
}

export interface Snow {
  maxFlakes: number
  baseSize: Area
  zRange: Range
  windowWidth: number // if the worker can determine this, then don't pass it.
  windowHeight: number
  color: Color.RGBA | Color.Hex
  maxFlakeStems: number //  use a value < 2 for a circle. The higher this value, the more rendering time required per flake
  minFlakeStems: number //  use a value < 2 to allow simple circle flakes
}
