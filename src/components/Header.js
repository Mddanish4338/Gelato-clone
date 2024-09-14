import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <a  className="Header_text" href="https://auth.gelato.com/auth/realms/gelato-api/protocol/openid-connect/auth?client_id=api-dashboard&redirect_uri=https%3A%2F%2Fdashboard.gelato.com%2Fcatalogue%2Fcategories%3F_gl%3D1*1spyapo*_gcl_au*NDc0ODE2ODguMTcyNjAyNDA5MQ..*_ga*MjAyMTg4NzYzNC4xNzI2MDI0MDcz*_ga_XBMT9WLLHR*MTcyNjA4MDMwOS4zLjAuMTcyNjA4MDMwOS42MC4wLjEzNjUxNDg0MzU.&state=d4b172d9-6abc-435e-a661-6460d995b885&response_mode=fragment&response_type=code&scope=openid&nonce=cafe8959-834c-47d7-84ef-0a8a0ae44477&prompt=login&ui_locales=en">
        FREE SHIPPING for orders over $300. Order today
      </a>
    </div>
  );
};

export default Header;
