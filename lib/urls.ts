interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const query = new URLSearchParams(params);
  query.set(key, value);
  const queryString = query.toString();
  return queryString
    ? `${window.location.pathname}?${queryString}`
    : window.location.pathname;
};

export const removeKeysFromUrlQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const query = new URLSearchParams(params);
  keysToRemove.forEach((key) => query.delete(key));
  const queryString = query.toString();
  return queryString
    ? `${window.location.pathname}?${queryString}`
    : window.location.pathname;
};

