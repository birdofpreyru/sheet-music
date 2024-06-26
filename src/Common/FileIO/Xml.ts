/**
 * IXmlAttribute is just the standard Attr
 */
export type IXmlAttribute = Attr;

/**
 * Just a wrapper for an XML Element object.
 * It facilitates handling of XML elements by OSMD
 */
export class IXmlElement {
    public name: string;
    public value: string;
    public hasAttributes: boolean = false;
    public firstAttribute: IXmlAttribute;
    public hasElements: boolean;

    private attrs: IXmlAttribute[];
    private elem: Element;

    /**
     * Wraps 'elem' Element in a IXmlElement
     * @param elem
     */
    constructor(elem: Element) {
        if (!elem) {
            throw new Error("IXmlElement: expected Element, got undefined");
        }
        this.elem = elem;
        this.name = elem.nodeName.toLowerCase();

        if (elem.hasAttributes()) {
            this.hasAttributes = true;
            this.firstAttribute = elem.attributes[0];
        }
        this.hasElements = elem.hasChildNodes();
        // Look for a value
        if (elem.childNodes.length === 1 && elem.childNodes[0].nodeType === Node.TEXT_NODE) {
            this.value = elem.childNodes[0].nodeValue;
        } else {
            this.value = "";
        }
    }

    /**
     * Get the attribute with the given name
     * @param attributeName
     * @returns {Attr}
     */
    public attribute(attributeName: string): IXmlAttribute {
        return this.elem.attributes.getNamedItem(attributeName);
    }

    /**
     * Get all attributes
     * @returns {IXmlAttribute[]}
     */
    public attributes(): IXmlAttribute[] {
        if (!this.attrs) {
            const attributes: NamedNodeMap = this.elem.attributes;
            const attrs: IXmlAttribute[] = [];
            for (let i: number = 0; i < attributes.length; i += 1) {
                attrs.push(attributes[i]);
            }
            this.attrs = attrs;
        }
        return this.attrs;
    }

    /**
     * Get the first child element with the given node name
     * @param elementName
     * @returns {IXmlElement}
     */
    public element(elementName: string): IXmlElement {
        const nodes: NodeList = this.elem.childNodes;
        for (let i: number = 0, length: number = nodes.length; i < length; i += 1) {
            const node: Node = nodes[i];
            if (node.nodeType === Node.ELEMENT_NODE && node.nodeName.toLowerCase() === elementName) {
                return new IXmlElement(node as Element);
            }
        }
    }

    /**
     * Get the children with the given node name (if given, otherwise all child elements)
     * @param nodeName
     * @returns {IXmlElement[]}
     */
    public elements(nodeName?: string): IXmlElement[] {
        const nodes: NodeList = this.elem.childNodes;
        const ret: IXmlElement[] = [];
        const nameUnset: boolean = !nodeName;
        if (!nameUnset) {
            nodeName = nodeName.toLowerCase();
        }
        for (let i: number = 0; i < nodes.length; i += 1) {
            const node: Node = nodes[i];
            if (node.nodeType === Node.ELEMENT_NODE &&
                (nameUnset || node.nodeName.toLowerCase() === nodeName)
            ) {
                ret.push(new IXmlElement(node as Element));
            }
        }
        return ret;
    }

    /**
     * Gets the attribute value.
     * @param name Attribute name.
     * @param [defaultValue] The value if the attribute is undefined.
     * @returns Attribute value.
     */
    public getAttributeValue(
      name: string,
      defaultValue: string = undefined,
    ): string {
      const attr: IXmlAttribute = this.attribute(name);
      return attr ? attr.value : defaultValue;
    }

    /**
     * Get the first child element with the given node name
     * with all the children of consequent child elements with the same node name.
     * for example two <notations> tags will be combined for better processing
     * @param elementName
     * @returns {IXmlElement}
     */
    public combinedElement(elementName: string): IXmlElement {
        const nodes: NodeList = this.elem.childNodes;
        if (nodes.length > 0) {
            let firstNode: Node;
            for (let i: number = 0, length: number = nodes.length; i < length; i += 1) {
                const otherNode: Node = nodes[i];
                if (otherNode.nodeType === Node.ELEMENT_NODE && otherNode.nodeName.toLowerCase() === elementName) {
                    if (firstNode) {
                        const childNodes: NodeList = otherNode.childNodes;
                        for (let j: number = 0, numChildNodes: number = childNodes.length; j < numChildNodes; j += 1) {
                            const childNode: Node = childNodes[j];
                            firstNode.appendChild(childNode.cloneNode(true));
                        }
                    } else {
                        firstNode = otherNode;
                    }
                }
            }
            if (firstNode) {
                return new IXmlElement(firstNode as Element);
            }
        }
    }
}
