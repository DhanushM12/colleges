import React from "react";
import College from "./College";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div>Colleges in North India</div>
      <div className="home_row">
        <College
          id="12321341"
          title="Hansraj-College-Delhi-University"
          price={5758}
          rating={5}
          image="https://getmyuni.azureedge.net/college-image/big/hans-raj-college-delhi-university.jpg"
        />
        <College
          id="12321341"
          title="Hansraj-College-Delhi-University"
          price={5758}
          rating={4}
          image="https://getmyuni.azureedge.net/college-image/big/hans-raj-college-delhi-university.jpg"
        />
      </div>
      <div className="home_row">
        <College
          id="12321341"
          title="Hansraj-College-Delhi-University"
          price={5758}
          rating={5}
          image="https://getmyuni.azureedge.net/college-image/big/hans-raj-college-delhi-university.jpg"
        />
        <College
          id="12321341"
          title="Hansraj-College-Delhi-University"
          price={5758}
          rating={4}
          image="https://getmyuni.azureedge.net/college-image/big/hans-raj-college-delhi-university.jpg"
        />
      </div>
      <div className="home_row">
        <College
          id="12321341"
          title="Hansraj-College-Delhi-University"
          price={5758}
          rating={5}
          image="https://getmyuni.azureedge.net/college-image/big/hans-raj-college-delhi-university.jpg"
        />
        <College
          id="12321341"
          title="Hansraj-College-Delhi-University"
          price={5758}
          rating={4}
          image="https://getmyuni.azureedge.net/college-image/big/hans-raj-college-delhi-university.jpg"
        />
      </div>
      <div className="home_row">
        <College
          id="12321341"
          title="Hansraj-College-Delhi-University"
          price={5758}
          rating={5}
          image="https://getmyuni.azureedge.net/college-image/big/hans-raj-college-delhi-university.jpg"
        />
        <College
          id="12321341"
          title="Hansraj-College-Delhi-University"
          price={5758}
          rating={4}
          image="https://getmyuni.azureedge.net/college-image/big/hans-raj-college-delhi-university.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
