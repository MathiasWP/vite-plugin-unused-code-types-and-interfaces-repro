import { Planet } from "./lib/interface";
import { Foo } from "./lib/type";

/**
 * Type is used, but is marked as unused
 */
const myFoo: Foo = 'foo';

/**
 * Interface is used, but is marked as unused
 */
class Earth implements Planet {
  constructor(readonly name: string) {
    console.log(`Hello ${name}`);
  }
}
const earth = new Earth('My earth')

/**
 * "Using" the variables so they are not treeshaken away
 */
console.log(myFoo, earth);