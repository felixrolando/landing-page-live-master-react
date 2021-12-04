import together from "../assets/images/illustration-grow-together.svg";
import conversation from "../assets/images/illustration-flowing-conversation.svg";
import users from "../assets/images/illustration-your-users.svg";

export const SectionTogether = () => {
  return (
    <main>
      <section className="section">
        <div className="section__container container">
          <figure className="section__figure">
            <img src={together} className="section__img" />
          </figure>

          <div className="section__texts">
            <h2 className="subtitle">Grow Together</h2>
            <p className="section__paragraph">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="wave wave--bottom"></div>
        <div className="wave"></div>

        <div className="section__container container">
          <figure className="section__figure">
            <img src={conversation} className="section__img" />
          </figure>
          <div className="section__texts">
            <h2 className="subtitle">Grow Together</h2>
            <p className="section__paragraph">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--last">
        <div className="section__container container">
          <figure className="section__figure">
            <img src={users} className="section__img" />
          </figure>
          <div className="section__texts">
            <h2 className="subtitle">Grow Together</h2>
            <p className="section__paragraph">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
