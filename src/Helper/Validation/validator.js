
export const required = value => value ? undefined : 'Field is required';

export const maxLengthThunk = (maxLength) => (value) => {

  return value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;
}