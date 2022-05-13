/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import git from "../../helpers/Img/gitmuñaño-removebg-preview.png";
import link from "../../helpers/Img/linke-removebg-preview.png";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <div className="box">
            <h2>Sobre mi</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="box">
          <h2>Contacto</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="box">
          <h2>sigueme</h2>
          <div className="red-social">
            <a href="https://github.com/RunyShark">
              <img src={git} alt="git" />
            </a>
            <a href="#">
              <img src={link} alt="git" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="grupo-2">
        <small>
          <p>
            &copy;{new Date().getFullYear()} Sergio Dario Moreno Sosa | All
            rights reserved | Terms Of Service | Privacy
          </p>
        </small>
      </div>
    </footer>

    // <div className="main-footer">
    //   <div className="footer-conteiner">
    //     <div className="footer-colum">
    //       {/* Column1 */}
    //       <div>
    //         <h4>Contact</h4>
    //         <ui>
    //           <li>22-83-57-88-06 </li>
    //           <li>Veracruz, Mexico</li>
    //           <li>Xalapa</li>
    //         </ui>
    //       </div>

    //       {/* Column2 */}
    //       <div className="footer-colum">
    //         <h4>Contacto</h4>
    //         <ui>
    //           <li>
    //             <a target="_blank" href="https://github.com/RunyShark">
    //               Git
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               target="_blank"
    //               href="https://www.linkedin.com/in/sergio-dario-moreno-sosa-aa204022a/"
    //             >
    //               Likend
    //             </a>
    //           </li>
    //         </ui>
    //       </div>

    //       {/* Column3 */}
    //       <div className="footer-colum">
    //         <h4>WELL ANOTHER COLUMN</h4>

    //         <iframe
    //           className="list-unstyled-d"
    //           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d664.7511924770806!2d-96.91036177326684!3d19.524407244737173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x31dddf110d4540e9!2sSETMAV!5e0!3m2!1ses-419!2smx!4v1651699937653!5m2!1ses-419!2smx"
    //           width="100%"
    //           height="100%"
    //           style={{ border: "0" }}
    //           title={"mapa"}
    //           /* allowfullscreen */
    //           loading="lazy"
    //           referrerpolicy="no-referrer-when-downgrade"
    //         ></iframe>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="footer-final">
    //     <hr />
    //     <div>
    //       <p>
    //         &copy;{new Date().getFullYear()} Sergio Dario Moreno Sosa | All
    //         rights reserved | Terms Of Service | Privacy
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Footer;
