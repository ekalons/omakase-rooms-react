import "./Etiquette.css";
import Header from "../Header/Header";

const Etiquette = () => {
  return (
    <div>
      <Header />
      <div className="HeaderBackground"></div>
      <div className="Etiquette">
        <div className="EtiquetteItemContainer">
          <div>
            <h2>General</h2>
            <ul className="EtiquetteUL">
              <li>
                <p>
                  <strong>Be early: </strong>Being on time is considered late,
                  get there 10 minutes early
                </p>
              </li>
              <li>
                <p>
                  <strong>Avoid perfume or cologne: </strong>The perfume can
                  mask the scent of the food and affect your experience, as well
                  as the experience of those around you
                </p>
              </li>
              <li>
                <p>
                  <strong>There are no strict dress codes: </strong>Smart casual
                  is generally appropriate, but it could vary
                </p>
              </li>
              <li>
                <p>
                  <strong>Don't be loud: </strong>Omakase rooms are generally
                  quiet places, so be sure to put your phone in silent mode and
                  avoid loud talking if you are bringing someone
                </p>
              </li>
              <li>
                <p>
                  <strong>Put your phone away: </strong>The small counter is
                  only for food and it is considered rude to have the phone
                  taking space
                </p>
              </li>
            </ul>
            <h2>Dining</h2>
            <ul className="EtiquetteUL">
              <li>
                <p>
                  <strong>Eat right away: </strong>The temperature of the food
                  is fundamental to the flavor, so skip the pictures and eat the
                  food as soon as the chef hands it to you
                </p>
              </li>
              <li>
                <p>
                  <strong>Eat it in one bite: </strong>Balance is lost if you
                  eat things in multiple bites
                </p>
              </li>
              <li>
                <p>
                  <strong>Careful with the soy sauce: </strong>Don't drown the
                  nigiri/rolls in soy sauce, just lightly dip it (fish side
                  down). After dipping, don't shake the nigiri/rolls, it can be
                  considered rude
                </p>
              </li>
              <li>
                <p>
                  <strong>Use ginger to cleanse the palate: </strong>Ginger
                  should only be eaten by itself and between different kinds of
                  nigiri/rolls. It's a way to reset and cleanse your palate
                  between different tastes
                </p>
              </li>
            </ul>
            <h2>Manners</h2>
            <ul className="EtiquetteUL">
              <li>
                <p>
                  <strong>It's ok to use your hands: </strong>Both chopsticks
                  and hands are ok, and some chefs will even encourage you to
                  grab the food using your hands
                </p>
              </li>
              <li>
                <p>
                  <strong>Ask before taking photos: </strong>Some chefs don't
                  like photos, because they find them distracting, so just ask
                  before taking one
                </p>
              </li>
            </ul>
            <h2>Tips</h2>
            <ul className="EtiquetteUL">
              <li>
                <p>
                  <a
                    id="VideoLink"
                    href="https://www.youtube.com/watch?v=pzAYPLetuPE"
                    target="blank"
                  >
                    <strong>Naomichi Yasuda video:</strong>
                  </a>{" "}
                  Watch this video for an ilustration of some of the above
                  points
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Etiquette;
