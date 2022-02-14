import { Typescard } from "../Enum/typescard";

export interface Category {
  id: number;
  title: string;
  typescard: Typescard;
  description: string;
  photo: string;
}