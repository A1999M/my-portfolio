import WhatIDo2Items from "./WhatIDo2Items";

export default function WhatIDo2({ mask }) {
  return (
    <div className="container-fluid WhatIDo2">
      <div className="row">
        {/*  */}
        <WhatIDo2Items
          mask={mask}
          title="visual"
          desc={`I search the internet for visual references and then combine
                them to create my own work`}
        />
        {/*  */}
        <WhatIDo2Items
          mask={mask}
          title="coding"
          desc={`take web designs created by UX/UI designers and
           turn them into a functional website or web application.`}
        />
        {/*  */}

        <WhatIDo2Items
          mask={mask}
          title="motion"
          desc={`Using different animation libraries to create more user interaction`}
        />
        {/*  */}
        <WhatIDo2Items
          mask={mask}
          title="responsive"
          desc={`responsive websites and applications with
           css frameworks.`}
        />
        {/*  */}
      </div>
    </div>
  );
}
