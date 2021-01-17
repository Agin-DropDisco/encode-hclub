import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";
import "normalize.css/normalize.css";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import GoOpen from "../composer/Modal";
import ContentDevelopmentPolka from "./DevelopmentPolka";
import "../style/slider-animations.css";
import "../style/styles.css";

const LaunchedDevelopmentPolka = () => {
  return (
    <div>
      <Slider className="slider-wrapper">
        {ContentDevelopmentPolka.map((item, index) => (
          <div key={index} className="slider-content">
            <div className="inner">
              <Card>
                <Card.Content header={item.termOne} />
                <pre>
                  <Card.Content meta={item.hds} />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    meta={item.hdsAT1}
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    meta={item.hdsAT2}
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    meta={item.hdsAT3}
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    meta={item.hds2}
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    meta={item.hds2AT1}
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    meta={item.hds2AT2}
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    meta={item.hds2AT3}
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    meta={item.hds2AT4}
                  />
                </pre>
              </Card>
              <Card>
                <Card.Content header={item.termTwo} />
                <pre>
                  <Card.Content meta={item.hds3} />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    description={item.hds3AT1}
                    className="TL"
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    description={item.hds4}
                    className="TL"
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    description={item.hds4AT1}
                    className="TL"
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    description={item.hds5}
                    className="TL"
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    description={item.hds5AT1}
                    className="TL"
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    description={item.hds6}
                    className="TL"
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    description={item.hds6AT1}
                    className="TL"
                  />
                </pre>
              </Card>
              <Card>
                <Card.Content header={item.termTwo} />
                <Card.Content meta={item.hds6AT2} />
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    description={item.hds6AT3}
                    className="TL"
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    description={item.hds6AT4}
                    className="TL"
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    description={item.hds6AT5}
                    className="TL"
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    description={item.hds6AT6}
                    className="TL"
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflow: "auto", maxHeight: 200 }}
                    description={item.hds6AT7}
                    className="TL"
                  />
                </pre>
                <Card.Content meta={item.hds6ATss} />
                <Card.Content meta={item.hds6ATss1} />
                <Card.Content meta={item.hds6ATss2} />
                <Card.Content meta={item.hds6ATssFile} />
                <Card.Content meta={item.hds6ATss3} />
              </Card>
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Hii.. im Groot <strong>{item.user}</strong>
              </span>
            </section>
            <GoOpen />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LaunchedDevelopmentPolka;
