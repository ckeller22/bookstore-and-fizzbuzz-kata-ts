import { Book } from "../../book";
import { Department } from "../../department";

export const generateRandomTitle = () => {
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
};

export const generateRandomPrice = () => {
  const price = Math.random() * 100;
  return Math.round(price * 100) / 100;
};

export const generateRandomDepartment = () => {
  const departments = Department.getAllDepartments();

  const randomIndex = Math.floor(Math.random() * departments.length);
  return departments[randomIndex];
};

export const generateRandomBook = () => {
  return new Book(
    generateRandomTitle(),
    generateRandomPrice(),
    generateRandomDepartment()
  );
};
