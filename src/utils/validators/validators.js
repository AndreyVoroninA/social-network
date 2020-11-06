export const requiredField = value => {
   if (value) return undefined;

   return 'Text missing in field';
}

export const maxLengthCreator = (maxLength) => (value) => {
   if (value.length > maxLength) return `Max lenght ${maxLength} symbols`;
   return undefined;
}