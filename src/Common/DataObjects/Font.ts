import { IXmlElement } from "../FileIO/Xml";

/**
 * Holds font settings.
 */
export class Font {
  private family: string;
  private size: number;
  private style: string;
  private weight: string;

  constructor (
    family: string,
    size: number,
    style: string,
    weight: string,
  ) {
    this.family = family;
    this.size = size;
    this.style = style;
    this.weight = weight;
  }

  public get Family(): string {
    return this.family;
  }

  public get Size(): number {
    return this.size;
  }

  public set Size(value: number) {
    this.size = value;
  }

  public get Style(): string {
    return this.style;
  }

  public get Weight(): string {
    return this.weight;
  }

  /**
   * If `node` contains any font-related attributes, it returns corresponding
   * font object, `null` otherwise.
   * @param node XML node.
   * @returns Font instance.
   */
  public static Read(node: IXmlElement): Font {
    const family: string = node.getAttributeValue("font-family");

    const sizeStr: string = node.getAttributeValue("font-size");
    const size: number = sizeStr && (Number(sizeStr) / 10);

    const style: string = node.getAttributeValue("font-style");
    const weight: string = node.getAttributeValue("font-weight");
    return new Font(family, size, style, weight);
  }
}
