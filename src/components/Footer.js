import logo from "../assets/images/logo2.svg";
import phone from "../assets/images/icon-phone.svg";
import email from "../assets/images/icon-email.svg";
import facebook from "../assets/images/fb.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";

export const Footer = () => {
  return (
    <footer class="footer">
      <section class="footer__container container">
        <div class="footer__newsletter">
          <h3 class="footer__title">Newsletter</h3>
          <p class="footer__paragraph">
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </p>

          <form class="footer__form">
            <input type="text" class="footer__input" />
            <input type="submit" value="Suscribe" class="footer__submit" />
          </form>
        </div>

        <div class="footer__social">
          <figure class="footer__figure">
            <img src={logo} alt="" />
          </figure>
          <p class="footer__paragraph footer__paragraph--social">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            alias mollitia natus perspiciatis numquam. Quod dicta iusto dolor
            quia earum aperiam perferendis vitae qui explicabo?
          </p>

          <div class="footer__media">
            <img src={phone} class="footer__svg" />

            <p class="footer__paragraph">Phone: +1-543-123-4567</p>
          </div>

          <div class="footer__media">
            <img src={email} class="footer__svg" />

            <p class="footer__paragraph"> example@huddle.com</p>
          </div>

          <div class="footer__media">
            <img src={facebook} class="footer__svg" />
            <img src={instagram} class="footer__svg" />
            <img src={twitter} class="footer__svg" />
          </div>
        </div>
      </section>
    </footer>
  );
};
