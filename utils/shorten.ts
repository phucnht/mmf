export const shorten = (address: string | null, fromEnd = 10, fromStart = 2): string | null => {
  if (!address) {
    return null;
  }
  const n = address.length;
  return address.substring(0, fromStart) + '...' + address.substring(n - fromEnd);
};
