import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div>Libarary management system</div>
        <div className="button"> Login </div>
        <button type="reset" className="button">
          {" "}
          Add book
        </button>
      </div>

      <div className="books">
        <div className="Avail">
          <img src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608873869/the-hobbit-9781608873869_hr.jpg"></img>
          Hobbit
        </div>
        <div className="Avail">
          <img src="https://assets-prd.ignimgs.com/2022/05/16/lotrfellowship-1652740286087.jpg?width=300&crop=1%3A1%2Csmart&dpr=2"></img>
          Lords of ring
        </div>
        <div className="Avail">
          <img src="https://cdn.kobo.com/book-images/80641257-1c06-49c2-9c97-cacfd2294802/353/569/90/False/a-wizard-of-earthsea-1.jpg"></img>
          A Wizard of Earthsea
        </div>
        <div className="Avail">
          <img src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781683835332/the-art-of-game-of-thrones-the-official-book-of-design-from-season-1-to-season-8-9781683835332_xlg.jpg"></img>
          Games of throne
        </div>
        <div className="Avail">
          <img src="https://images.8tracks.com/cover/i/012/291/646/lies-of-locke-lamora-banner500-3039.jpg?rect=0,0,500,500&q=98&fm=jpg&fit=max"></img>
          The Lies of Locke Lamora
        </div>
        <div className="Avail">
          <img src="https://cdn.kobo.com/book-images/e9b62cfc-f209-46fd-9dd4-0ce006dbf850/353/569/90/False/stardust-5.jpg"></img>
          stardust
        </div>
      </div>

      <div className="footer">
        Libarary managenment system created by baljap singh
      </div>
    </div>
  );
};

export default Home;
