export const isEmpty = (value: string): boolean => value.length === 0;
export const notEmpty = (value: string): boolean => value.length > 0;
export const isNumberString = (value: string) => /^[0-9]*$/.test(value);
