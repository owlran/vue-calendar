// eslint-disable-next-line import/prefer-default-export
export const extractDateObjectFromDateString = (dateString) => {
  const [YYYY, mm, dd] = dateString.split('-');
  return new Date(YYYY, mm, dd);
};
