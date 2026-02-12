import type { StaticImageData } from "next/image";

export interface Property {
  id: string;
  title: string;
  location: string;
  type: "apartment" | "villa";
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: number;
  paymentType: "cash" | "installment" | "both";
  image: StaticImageData;
}

export interface PropertyFilters {
  search: string;
  location: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  paymentType: string;
  sortBy: string;
}
