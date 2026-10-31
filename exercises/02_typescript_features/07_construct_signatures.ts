// Construct signatures
//
// For something you call with `new`, put `new` in front of the signature:
//   interface AnimalConstructor { new (name: string): Dog }
//
// TODO: write `interface AnimalConstructor` so `createAnimal` can take any
//       class whose constructor accepts a name and builds something with a `name`.
import { assertEqual } from "../../helpers";

// I AM NOT DONE

class Dog {
  constructor(public name: string) {}
  speak() { return `${this.name} says woof`; }
}

class Cat {
  constructor(public name: string) {}
}

function createAnimal(ctor: AnimalConstructor, name: string) {
  return new ctor(name);
}

assertEqual(createAnimal(Dog, "Buddy").name, "Buddy", "dog");
assertEqual(createAnimal(Cat, "Tom").name, "Tom", "cat");
