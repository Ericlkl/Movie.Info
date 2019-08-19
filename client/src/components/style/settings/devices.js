const size = {
  mobile: '370px',
  tablet: '800px',
  laptop: '1500px'
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`
};
