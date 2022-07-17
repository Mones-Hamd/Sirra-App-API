import { USER_INTERFACE_ID } from '../constant.js';

export const initNewPage = (content) => {
  const interfaceElement = document.getElementById(USER_INTERFACE_ID);
  interfaceElement.innerHTML = '';
  const contentElement = content;
  interfaceElement.append(contentElement);
  return interfaceElement;
};
