import { Book } from "./book";
import { Inventory } from "./inventory";

const book1 = new Book("The Hobbit", 5);
const book2 = new Book("The Hobbit 2", 3);
const book3 = new Book("The Hobbit 3", 2);
const book4 = new Book("The Hobbit 4", 5);
const book5 = new Book("The Hobbit 5", 4);

const inventory = new Inventory([book1, book2, book3, book4, book5]);

console.log(inventory.getBooks());
