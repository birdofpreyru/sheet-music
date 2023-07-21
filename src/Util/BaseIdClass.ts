//import {nanoid} from "nanoid";

/**
 * Support for the unique id generator.
 */
export abstract class BaseIdClass {

    protected instanceId: string;

    constructor() {
        //this.instanceId = nanoid(8);
    }

    public toString(): string {
        return this.instanceId;
    }

}
