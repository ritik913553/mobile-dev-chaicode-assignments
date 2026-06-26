export const getTagIcon = (tag: string): any => {
  switch (tag) {
    case "Work":
      return "briefcase";
    case "Personal":
      return "user";
    case "Fitness":
      return "activity";
    case "Learning":
      return "book-open";
    default:
      return "tag";
  }
};

export const getFilterIcon = (filter: string): any => {
  switch (filter) {
    case "All":
      return "grid";
    case "Work":
      return "briefcase";
    case "Personal":
      return "user";
    case "Fitness":
      return "activity";
    case "Learning":
      return "book-open";
    default:
      return "circle";
  }
};
