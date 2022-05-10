import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Contact</h4>
            <ui className="list-unstyled">
              <li>22-83-57-88-06 </li>
              <li>Veracruz, Mexico</li>
              <li>Xalapa</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>

            <iframe
              className="list-unstyled-d"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d664.7511924770806!2d-96.91036177326684!3d19.524407244737173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x31dddf110d4540e9!2sSETMAV!5e0!3m2!1ses-419!2smx!4v1651699937653!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              title={"mapa"}
              /* allowfullscreen */
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Sergio Dario Moreno Sosa | All
            rights reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
