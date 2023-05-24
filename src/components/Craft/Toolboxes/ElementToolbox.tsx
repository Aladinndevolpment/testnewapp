import { Element, useEditor } from "@craftjs/core";
import { Button } from "../widgets/Button";
import { Text } from "../widgets/Text";
import Container from "../widgets/Container";
import { Card } from "../widgets/Card";
import { BuilderImage } from "../widgets/Image";
import { Grid } from "../widgets/Grid";

export default function ElementToolbox() {
  const { connectors, query } = useEditor();

  return (
    <div className="mt-3">
      <div className="flex flex-wrap gap-3 mb-3">
        <div>
          <button
            className="btn"
            ref={(ref: any) =>
              connectors.create(ref, <Button text="Click Me" />)
            }
          >
            Button
          </button>
        </div>
        <div>
          <button
            className="btn"
            ref={(ref: any) => connectors.create(ref, <Text text="Hi world" />)}
          >
            Text
          </button>
        </div>
        <div>
          <button
            className="btn"
            ref={(ref: any) =>
              connectors.create(
                ref,
                <Element is={Container} canvas>
                  My Container
                </Element>
              )
            }
          >
            Container
          </button>
        </div>
        <div>
          <button
            className="btn"
            ref={(ref: any) => connectors.create(ref, <Card />)}
          >
            Card
          </button>
        </div>

        <div>
          <button
            className="btn"
            ref={(ref: any) => connectors.create(ref, <BuilderImage />)}
          >
            Image
          </button>
        </div>
      </div>

      <div>
        Grid
        <div className="flex flex-wrap gap-2">
          <div>
            <button
              ref={(ref: any) => connectors.create(ref, <Grid col={4} />)}
              className="btn"
            >
              4
            </button>
          </div>
          <div>
            <button
              ref={(ref: any) => connectors.create(ref, <Grid col={3} />)}
              className="btn"
            >
              3
            </button>
          </div>

          <div>
            <button
              ref={(ref: any) => connectors.create(ref, <Grid col={2} />)}
              className="btn"
            >
              2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
