// BEWARE: `shortid` is deprecated, and removed from the library's dependencies;
// the alternative `nanoid` is distributed as an ES module, thus breaks this
// library (because it is compiled into CommonJS module, which cannot import
// an ES module).
//import shortid from "shortid";

/**
 * Support for the unique id generator.
 */
export abstract class BaseIdClass {

    protected instanceId: string;

    constructor() {
        //this.instanceId = shortid.generate();
    }

    public toString(): string {
        return this.instanceId;
    }

}
