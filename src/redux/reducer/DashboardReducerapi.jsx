let initialvalues = {
  dashboardgetapi: [],
};
export const dashboardReducer = (value = initialvalues, action) => {
  switch (action?.type) {
    case "Darshini_REQUEST":
      return { dashboardgetapi: action?.payload };
    case "SUCCESS":
      return { dashboardgetapi: action?.payload };
    case "ERROR":
      return { dashboardgetapi: action?.payload };
    default:
      return value;
  }
};