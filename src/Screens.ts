const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;
export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1200),
  tablet: customMediaQuery(1025),
  phone: customMediaQuery(700),
};
