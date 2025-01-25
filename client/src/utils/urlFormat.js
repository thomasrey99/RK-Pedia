"use server"
export const urlFormat =async  (url, queries = []) => {
  let urlQuery = url;
  if (queries.length > 0) {
    urlQuery += urlQuery.includes("?") ? "" : "?";

    queries.forEach(({ name, value }, index) => {
      if (index > 0) {
        urlQuery += "&";
      }
      if (value) {
        urlQuery += `${name}=${value}`;
      }
    });
  }

  return urlQuery;
};
