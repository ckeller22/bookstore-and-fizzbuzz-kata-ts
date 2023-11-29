import { generateRandomBook } from "./__tests__/helpers/testHelpers";
import { Inventory } from "./inventory";

const inventory = new Inventory(Array.from({ length: 10 }, generateRandomBook));

console.log(inventory.getBooks());
