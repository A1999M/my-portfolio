import "./Home.scss";

export default function MaskHeroHeader({ setIsHover, setMixStatus }) {
  return (
    <>
      <div className="container-fluid maskHeroHeader">
        <div className="row p-0">
          <div className="col-6">
            <div className="wrapperName">
              <p
                onMouseEnter={() => {
                  setMixStatus(false);
                  setIsHover(true);
                }}
                onMouseLeave={() => {
                  setMixStatus(true);
                  setIsHover(false);
                }}
                className="NameOfMe"
              >
                front
              </p>
              <p
                onMouseEnter={() => {
                  setMixStatus(false);
                  setIsHover(true);
                }}
                onMouseLeave={() => {
                  setMixStatus(true);
                  setIsHover(false);
                }}
                className="lastNameOfMe"
              >
                developer
              </p>
              <p className="descHeroHeader">
                hello, my name is ali molaei. nice to meet you I would like to
                welcome you with my personal portfolio
                {/* With each project, I push my work to new horizons, always
                putting quality first. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
