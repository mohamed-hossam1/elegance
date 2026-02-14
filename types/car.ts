export interface Car {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  condition: "new" | "used";
  transmission: "automatic" | "manual";
  fuelType: "petrol" | "diesel" | "electric" | "hybrid";
  mileage: number;
  paymentType: "cash" | "installment" | "both";
  image: string;
}

export interface CarFilters {
  search: string;
  brand: string;
  condition: string;
  transmission: string;
  fuelType: string;
  paymentType: string;
  sortBy: string;
}