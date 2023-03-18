import React from 'react';
import './mashalEvent.css';
// import img1 from './images/img1.jpg';
// import img2 from './images/img2.jpg';
// import img3 from './images/img3.jpg';
// import img4 from './images/img4.jpg';
import basket from './images/basket.jpg';
import badminton from './images/badminton.jpg';
import football from './images/football.jpg';
import chess from './images/chess.jpg';
import Run from './images/Run.jpg';
import tennis from './images/tennis.jpg';
import images from './images/images.jpg';
import cycle from './images/cycle.jpg';
import tt from './images/tt.jpg';
import cricket from './images/cricket.jpg';
import vollyball from './images/vollyball.jpg';
import athe from './images/athe.jpg';
import tug from './images/tug.jpg';
import kho from './images/kho.jpg';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsGlobe } from 'react-icons/bs';
import lg from './images/mashalLogo.svg';
import Mashnav from '../Mashnav/mashnav';

const MashalEvent = () => {
  return (
    <>
      <div className="mashnavxxx">
        <Mashnav></Mashnav>
      </div>
      <div className="event-section">
        <div className="heading-mashal">
          <h1>EVENTS</h1>
        </div>

        <div className="container1">
          <div className="mashal-card">
            <div className="card">
              <figure className="card__thumb">
                <img src={badminton} alt="Picture by Kyle Cottrell" className="card__image" />
                <figcaption className="card__caption">
                  <h2 className="card__title">BADMINTON</h2>
                  <p className="card__snippet">Match: Singles Only Best of 3 Games:Knockouts,Quarter Finals,Semi-Finals,Finals</p>
                  <a href="#" className="card__button">
                    Coming Soon
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="card">
              <figure className="card__thumb">
                <img src={Run} alt="Picture by Kyle Cottrell" className="card__image" />
                <figcaption className="card__caption">
                  <h2 className="card__title">
                    5-KM RUN <span id="livenow">Live</span>
                  </h2>
                  <p className="card__snippet">Track: 5 km running track Track: 5 km running track, Inside IIT BHU Campus</p>
                  <a href="https://docs.google.com/forms/d/1tzb4yvLkVRlJsKWVUhtCMXnle894ImQMZL5lGfF17j0/viewform?edit_requested=true" className="card__button">
                    Register
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="card">
              <figure className="card__thumb">
                <img src={chess} alt="Picture by Kyle Cottrell" className="card__image" />
                <figcaption className="card__caption">
                  <h2 className="card__title">
                    CHESS <span id="livenow">Live</span>
                  </h2>
                  <p className="card__snippet">Participation: Individual , 3 Rounds: Lichess Arena, Swiss Tournament, Offline Boards</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7m0oJo7SCBTkHmU0aCcXrClotG7FdLBswknxI7tOwm6sNaA/closedform" target="__blank" className="card__button">
                    Register
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="card">
              <figure className="card__thumb">
                <img src={basket} alt="Picture by Kyle Cottrell" className="card__image" />
                <figcaption className="card__caption">
                  <h2 className="card__title">BASKETBALL</h2>
                  <p className="card__snippet">Team Size: 7 Players , Match:10mins x 4 quarters</p>
                  <a href="#" className="card__button">
                    Coming Soon
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="card">
              <figure className="card__thumb">
                <img src={kho} alt="Picture by Kyle Cottrell" className="card__image" />
                <figcaption className="card__caption">
                  <h2 className="card__title">
                    KHO-KHO <span id="livenow">Live</span>
                  </h2>
                  <p className="card__snippet">Team Size: 12 players , Only 9 players take the field, Match: 9 mins x 2 innings</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSciFs1FM-9L0ASPrTIsYNcHrngih1XivQ5M8WFO5ORzOML8DA/viewform" target="__blank" className="card__button">
                    Register
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="card">
              <figure className="card__thumb">
                <img src={football} alt="Picture by Kyle Cottrell" className="card__image" />
                <figcaption className="card__caption">
                  <h2 className="card__title">FOOTBALL</h2>
                  <p className="card__snippet">Team Size: 7 players, Maximum registered players: 10, Match: 15 mins x 2, Rolling Substitutions allowed</p>
                  <a href="#" className="card__button">
                    Coming Soon
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="card">
              <figure className="card__thumb">
                <img src={tennis} alt="Picture by Kyle Cottrell" className="card__image" />
                <figcaption className="card__caption">
                  <h2 className="card__title">LAWN TENNIS</h2>
                  <p className="card__snippet">Match : Singles Only, Round Robin / Knockout, Format: AITA Rules</p>
                  <a href="#" className="card__button">
                    Coming Soon
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="card">
              <figure className="card__thumb">
                <img src={images} alt="Picture by Kyle Cottrell" className="card__image" />
                <figcaption className="card__caption">
                  <h2 className="card__title">KABADDI</h2>
                  <p className="card__snippet">Team Size: 10-14 Players, 7 Players on the field, rest extra, Match:20mins x 2 halves</p>
                  <a href="#" className="card__button">
                    Coming Soon
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="card">
              <figure className="card__thumb">
                <img src={cycle} alt="Picture by Kyle Cottrell" className="card__image" />
                <figcaption className="card__caption">
                  <h2 className="card__title">
                    CYCLING <span id="livenow">Live</span>
                  </h2>
                  <p className="card__snippet">Duration: 5-day event, Participation: Individual , Categories: Men’s and Women’s, Platform: Strava</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfV77ZaVMmLT5INZQbcg6NJAfPJDaDMqfWAmisxqOWv7CPgKg/viewform" className="card__button">
                    Register
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="card">
              <figure className="card__thumb">
                <img src={tt} alt="Picture by Kyle Cottrell" className="card__image" />
                <figcaption className="card__caption">
                  <h2 className="card__title">
                    TABLE TENNIS <span id="livenow">Live</span>
                  </h2>
                  <p className="card__snippet">Team Size: 3 (for boys) , 2 (for girls), Matches: 3 singles (for boys), 2 singles, 1 doubles (for girls)</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSclYUMm1gN-VumVBwqM80p1WG80SMlJvw3nlq2N5YTIRJDcbg/viewform" className="card__button">
                    Register
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="card">
              <figure className="card__thumb">
                <img src={cricket} alt="Picture by Kyle Cottrell" className="card__image" />
                <figcaption className="card__caption">
                  <h2 className="card__title">CRICKET</h2>
                  <p className="card__snippet">Team Size: 11 players, Maximum Registered players: 16, Match: 10 - 10 overs, Format: ICC Rules </p>
                  <a href="#" className="card__button">
                    Coming Soon
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="card">
              <figure className="card__thumb">
                <img src={vollyball} alt="Picture by Kyle Cottrell" className="card__image" />
                <figcaption className="card__caption">
                  <h2 className="card__title">VOLLEYBALL</h2>
                  <p className="card__snippet">Team Size: 6 - 12 players, Match: Best of 3 sets x 15 points, Finals: Best of 5 sets x 15 points</p>
                  <a href="#" className="card__button">
                    Coming Soon
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="card">
              <figure className="card__thumb">
                <img src={athe} alt="Picture by Kyle Cottrell" className="card__image" />
                <figcaption className="card__caption">
                  <h2 className="card__title">ATHLETICS</h2>
                  <p className="card__snippet">Races: 100m, 200m, 400m, Jumps: Long Jump, High Jump, Shot-Put</p>
                  <a href="#" className="card__button">
                    Coming Soon
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="card">
              <figure className="card__thumb">
                <img src={tug} alt="Picture by Kyle Cottrell" className="card__image" />
                <figcaption className="card__caption">
                  <h2 className="card__title">TUG OF WAR</h2>
                  <p className="card__snippet">Team Size: 8 players, Match: 3 pulls each match</p>
                  <a href="#" className="card__button">
                    Coming Soon
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="four">
            <img src={lg} alt="hw" />
            <div className="mashal-logos">
              <BsInstagram />
              <BsFacebook />
              <BsTwitter />
              <BsGlobe />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MashalEvent;
