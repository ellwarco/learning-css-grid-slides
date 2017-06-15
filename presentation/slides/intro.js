import React from 'react';
import {
  Heading,
  Link,
  Image,
  Slide,
  Text,
} from 'spectacle';

import { CodePen } from '../components';
import { s, f } from '../styles';

export const introSlides = [
  <Slide bgColor="pink" textColor="tertiary">
    <pre className="f1 mv0 lh-solid code b">{`+-------------------------+ +---+
|                         | |   |
|  Learning               | |   |
|  CSS Grid               | |   |
|                         | |   |
+-------------------------+ |   |
+----+ +------------------+ |   |
|    | |                  | |   |
|    | |                  | |   |
|    | +------------------+ +---+
|    | +------+ +---------------+
|    | |      | | Varun Vachhar |
+----+ +------+ +---------------+`}</pre>
  </Slide>,
  <Slide bgColor="primary">
    <Heading size={6} textColor="secondary">
      Box Layout Module (Floats)
    </Heading>
    <CodePen
      height={600}
      user="winkerVSbecks" id="YQGBYr"
      bgColor="#fff"
    />
  </Slide>,
  <Slide bgColor="primary">
    <Heading size={6} textColor="secondary">
      Flexbox Layout Module
    </Heading>
    <CodePen
      height={400}
      user="winkerVSbecks" id="xrEBpW"
      bgColor="#fff"
    />
  </Slide>,
  <Slide bgColor="pink">
    <Heading size={1} textColor="tertiary">
      CSS Grid
    </Heading>
    <Heading size={4} textColor="secondary">
      Two Dimensional<br />Grid Based Layout System
    </Heading>
  </Slide>,
  <Slide bgColor="primary">
    <Heading size={6} textColor="secondary">
      CSS Grid Layout Module
    </Heading>
    <CodePen
      height={400}
      user="winkerVSbecks" id="vZyLPK"
      bgColor="#fff"
    />
  </Slide>,
  <Slide bgColor="primary">
    <Image src="https://www.w3.org/TR/css-grid-1/images/flex-layout.png" />
    <Text textSize={f[5]} margin={s.b5}>Exemplary Flex Layout Example</Text>

    <Image src="https://www.w3.org/TR/css-grid-1/images/grid-layout.png" />
    <Text textSize={f[5]} margin={s.b5}>Exemplary Grid Layout Example</Text>

    <Text textSize={f[7]} textColor="secondary">
      from <Link
        textColor="tertiary"
        href="https://www.w3.org/TR/css-grid-1/#intro"
      >
        www.w3.org/TR/css-grid-1
      </Link>
    </Text>
  </Slide>,
];
