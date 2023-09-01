import "./Home.scss";

export default function MaskHeroHeader() {
  return (
    <>
      <div className="container-fluid maskHeroHeader">
        <div className="row p-0">
          <div className="col-6">
            <div className="wrapperName">
              <p className="NameOfMe">front</p>
              <p className="lastNameOfMe">developer</p>
              <p className="descHeroHeader">
                With each project, I push my work to new horizons, always
                putting quality first.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div
              data-hover="true"
              style={{ visibility: "hidden" }}
              className="wrapperHeroHeader"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
