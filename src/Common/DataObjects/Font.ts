import { IXmlElement } from "../FileIO/Xml";

/**
 * Holds font settings.
 */
export class Font {
  private family: string;
  private size: number;
  private weight: string;
  private italic: boolean;
  private underlined: boolean;

  /* Undefined values mean to take these from the context where the font is
   * used. */
  constructor (
    family: string = undefined,
    size: number = undefined,
    weight: string = undefined,
    italic: boolean = undefined,
    underlined: boolean = undefined,
  ) {
    this.family = family;
    this.size = size;
    this.weight = weight;
    this.italic = italic;
    this.underlined = underlined;
  }

  public get Family(): string {
    return this.family;
  }

  public set Family(value: string) {
    this.family = value;
  }

  public get Size(): number {
    return this.size;
  }

  public set Size(value: number) {
    this.size = value;
  }

  public get Weight(): string {
    return this.weight;
  }

  public set Weight(value: string) {
    this.weight = value;
  }

  public get Italic(): boolean {
    return this.italic;
  }

  public set Italic(value: boolean) {
    this.italic = value;
  }

  public get Underlined(): boolean {
    return this.underlined;
  }

  /**
   * Creates a deep copy of this font.
   */
  public clone(): Font {
    return new Font(
      this.family,
      this.size,
      this.weight,
      this.italic,
      this.underlined,
    );
  }

  /**
   * For undefined fields of this font, picks up their values from the given
   * source.
   * @param src
   * @returns This font for chaining.
   */
  public mergeDefaults(src: Font): Font {
    if (this.family === undefined) {
      this.family = src.family;
    }
    if (this.size === undefined) {
      this.size = src.size;
    }
    if (this.weight === undefined) {
      this.weight = src.weight;
    }
    if (this.italic === undefined) {
      this.italic = src.italic;
    }
    if (this.underlined === undefined) {
      this.underlined = src.underlined;
    }
    return this;
  }

  /**
   * If `node` contains any font-related attributes, it returns corresponding
   * font object, `null` otherwise.
   * @param node XML node.
   * @returns Font instance.
   */
  public static Read(node: IXmlElement): Font {
    const family: string = node.getAttributeValue("font-family");

    /* TODO: Here 10.0 is the EngravingRules.UnitToPix value.
     * to avoid circular dependencies, something should be refactored.
     * For now just placing it hardcoded right here. */
    const sizeStr: string = node.getAttributeValue("font-size");
    const size: number = sizeStr && (Number(sizeStr) / 10);

    const style: string = node.getAttributeValue("font-style");
    const weight: string = node.getAttributeValue("font-weight");

    return new Font(
      family,
      size,
      weight,
      style === "italic",
    );
  }
}
