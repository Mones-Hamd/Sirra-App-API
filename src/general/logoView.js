export const createLogoELement = () => {
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logo';
  logoDiv.innerHTML = String.raw`
  <img id="logo-png" src=public/img/siraLogo.png>
  <p><span>SI</span>RRA<p>
`;
  return logoDiv;
};
