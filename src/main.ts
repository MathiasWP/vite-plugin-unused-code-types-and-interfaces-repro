
import { Planet } from "./interface";
import { Foo } from "./type";

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


console.log(myFoo, earth);