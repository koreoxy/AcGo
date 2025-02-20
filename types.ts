import { Database } from "./database.types";

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
export type Enums<T extends keyof Database["public"]["Enums"]> =
  Database["public"]["Enums"][T];

export type Event = {
  id: number;
  image: string | null;
  title: string;
  description: string;
  date: string;
  location: string;
  city: string;
  category: string;
};
