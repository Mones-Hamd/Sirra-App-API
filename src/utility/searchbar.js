//search reusable function
let searchTimeoutToken = 0;
export const searchBar = (element, initResult) => {
  element.onkeyup = (e) => {
    clearTimeout(searchTimeoutToken);

    if (element.value.trim().length === 0) {
      return;
    }
    searchTimeoutToken = setTimeout(() => {
      initResult(element.value);
    }, 850);
  };
};
