import React from "react";
import Slider from "react-animated-slider";
import { Card } from "semantic-ui-react";
import GoOpen from "../composer/Modal";
import VarCap from "./VariableCap";
import "../style/slider-animations.css";
import "../style/styles.css";
import "normalize.css/normalize.css";
import "react-animated-slider/build/vertical.css";
import "semantic-ui-css/semantic.min.css";







const CreatedVarCA = () => {
  return (
    <div>
      <Slider className="slider-wrapper">
        {VarCap.map((item, index) => (
          <div
            key={index}
            className="slider-content"
          >
            <div className="inner">
              <Card>
                <Card.Content header={item.termOne} />
                <pre>
                  <Card.Content meta={item.hds} />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflowY: "auto", maxHeight: 200 }}
                    description={item.hdsAT1}
                    className="TL"
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflowY: "auto", maxHeight: 200 }}
                    description={item.hdsAT2}
                    className="TL"
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflowY: "auto", maxHeight: 200 }}
                    description={item.hdsAT3}
                    className="TL"
                  />
                </pre>
                <Card.Content meta={item.hds2} />
                <pre>
                  <Card.Content
                    style={{ overflowY: "auto", maxHeight: 200 }}
                    description={item.hds2AT1}
                    className="TL"
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
                    style={{ overflowY: "auto", maxHeight: 200 }}
                    description={item.hds3AT1}
                    className="TL"
                  />
                </pre>
                <pre>
                  <Card.Content meta={item.hds4} />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflowY: "auto", maxHeight: 200 }}
                    description={item.hds4AT1}
                    className="TL"
                  />
                </pre>
              </Card>
              <Card>
                <Card.Content header={item.termTwo} />
                <Card.Content meta={item.hds5} />
                <pre>
                  <Card.Content
                    style={{ overflowY: "auto", maxHeight: 200 }}
                    description={item.hds5AT1}
                    className="TL"
                  />
                </pre>
                <Card.Content meta={item.hds6} />
                <pre>
                  <Card.Content
                    style={{ overflowY: "auto", maxHeight: 400 }}
                    className="TL"
                    meta={item.hds6AT1}
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflowY: "auto", maxHeight: 400 }}
                    meta={item.hds6AT2}
                  />
                </pre>
                <pre>
                  <Card.Content
                    style={{ overflowY: "auto", maxHeight: 400 }}
                    meta={item.hds6AT3}
                  />
                </pre>
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

export default CreatedVarCA;
