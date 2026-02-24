export function tHandler<T extends object>(
  item: T,
  field: string,
  locale: string
): string {
  const localeKey = `${field}_${locale}` as keyof T;
  const fallbackKey = `${field}_en` as keyof T;
  return (item[localeKey] ?? item[fallbackKey] ?? "") as string;
}
