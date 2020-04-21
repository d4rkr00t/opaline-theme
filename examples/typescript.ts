// @ts-ignore
import { names } from "./names";

// @ts-ignore
import EventEmitter from "events";

const names = ["Alice", "Bob", "Eve"];

export function* makeIdGenerator(): Iterator<number> {
  let id = -1;
  while (true) {
    id = id + 1;
    yield id;
  }
}

export class Foo {
  static prop: any;
}

interface Person {
  id: number;
  age: number;
  longName: boolean;
  name: string;
  online: boolean;
}

export type Person2 = {
  id: number;
  age: number;
  longName: boolean;
  name: string;
  online: boolean;
};

/**
 * Some important comment about this function
 */
function makeCreatePerson(idGenerator: Iterator<number>) {
  return (name: string): Person => ({
    id: idGenerator.next().value,
    age: 42,
    longName: name.length >= 9,
    name,
    online: false,
  });
}

export function castToNumber(str: any): number {
  return str as number;
}

const createPerson = makeCreatePerson(makeIdGenerator());

export const persons = names.map(createPerson);

export const emitter = new EventEmitter();

if (persons !== emitter) {
  console.log("No luck!");
}
