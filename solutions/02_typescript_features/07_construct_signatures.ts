import { assertEqual } from "../../helpers";

interface AnimalConstructor {
  new (name: string): { name: string };
}

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
