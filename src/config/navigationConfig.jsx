export const homeNavigation = {
  labelCode: "navigation.home.title",
  to: "/",
  showInHeader: true,
  showInFooter: true,
};

export const servicesNavigation = {
  labelCode: "navigation.services.title",
  to: "/services",
  showInHeader: true,
  showInFooter: true,
};

export const portfolioNavigation = {
  labelCode: "navigation.portfolio.title",
  to: "/portfolio",
  showInHeader: true,
  showInFooter: true,
};

export const aboutNavigation = {
  labelCode: "navigation.about.title",
  to: "/about",
  showInHeader: false,
  showInFooter: false,
};

export const contactNavigation = {
  labelCode: "navigation.contact.title",
  to: "/contact",
  showInHeader: true,
  showInFooter: true,
};

export const careersNavigation = {
  labelCode: "navigation.carees.title",
  to: "/carees",
  showInHeader: false,
  showInFooter: true,
};

const navigationArray = [
  homeNavigation,
  servicesNavigation,
  portfolioNavigation,
  aboutNavigation,
  contactNavigation,
  careersNavigation,
];

export const getHeaderNavigation = () => {
  return navigationArray.filter((navigation) => navigation.showInHeader);
};

export const getFooterNavigation = () => {
  return navigationArray.filter((navigation) => navigation.showInFooter);
};
