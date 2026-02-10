export const ROUTES = {
  LABDING_PAGE: "/",
  LOGIN: "/login",
  REAL_ESTATE: "/real-estate",
  CARS: "/cars",
  CAR_DETAILS: (id: string) => `/cars/${id}`,
  REAL_ESTATE_DETAILS: (id: string) => `/real-estate/${id}`,
};
