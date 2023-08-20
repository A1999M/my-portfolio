// import useMousePosition from "../../utils/useMousePosition";
import "./Home.scss";

export default function HeroHeader() {
  return (
    <>
      <div className="container-fluid heroHeader">
        <div className="row p-0">
          <div className="col-6">
            <div className="wrapperName">
              <p className="NameOfMe">Ali</p>
              <p className="lastNameOfMe">Molaei</p>
              <p className="descHeroHeader">
                hello, my name is ali molaei. nice to meet you I would like to
                welcome you with my personal portfolio
              </p>
            </div>
          </div>
          <div className="col-6">
            <div data-hover="true" className="wrapperHeroHeader"></div>
          </div>
        </div>
      </div>
    </>
  );
}
