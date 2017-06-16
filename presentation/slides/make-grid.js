import React from 'react';
import {
  Heading,
  Slide,
  Image,
  Link,
  Text,
} from 'spectacle';

import { CodeAscii } from '../components';
import images from '../images';
import { s, f } from '../styles';

export const makeGridSlides = [
  <Slide bgColor="pink" textColor="tertiary">
    <svg
      className="dib center"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="12rem" height="12rem"
    >
      <path fill="#5a5ae6" d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z" />
    </svg>
    <Heading size="1">Defining Grids</Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Heading size="6" textAlign="left">Fixed Grid</Heading>
    <CodeAscii
      size={5}
      code={`.my-fixed-grid-container {

  display: grid;
  grid-template-columns: 20px 20px 20px 20px;
  grid-template-rows: 20px 20px 20px 20px 20px;

}`}
      diagram={`.my-fixed-grid-container


+----+----+----+----+-------------+
|    |    |    |    |             |
|    |    |    |    |             |
+----+----+----+----+             |
|    |    |    |    |             |
|    |    |    |    |             |
+----+----+----+----+             |
|    |    |    |    |             |
|    |    |    |    |             |
+----+----+----+----+             |
|    |    |    |    |             |
|    |    |    |    |             |
+----+----+----+----+             |
|    |    |    |    |             |
|    |    |    |    |             |
+----+----+----+----+             |
|                                 |
|                                 |
|                                 |
|                                 |
+---------------------------------+`}
    />
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Heading size="6" textAlign="left">Flexible Grids</Heading>
    <CodeAscii
      size={5}
      code={`.my-weird-but-flexible-grid {

  display: grid;
  grid-template-columns: 20px 5% 80px 40%;
  grid-template-rows: 4rem 2vh 12% 80px 20em;

}`}
      diagram={`.my-weird-but-flexible-grid


+-+--+----+-----------------+----+
| |  |    |                 |    |
+-+--+----+-----------------+    |
+-+--+----+-----------------+    |
| |  |    |                 |    |
| |  |    |                 |    |
+-+--+----+-----------------+    |
| |  |    |                 |    |
+-+--+----+-----------------+    |
| |  |    |                 |    |
| |  |    |                 |    |
| |  |    |                 |    |
| |  |    |                 |    |
| |  |    |                 |    |
+-+--+----+-----------------+    |
|                                |
|                                |
|                                |
|                                |
|                                |
+--------------------------------+`}
    />
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Heading size="6" textAlign="left">The fr Unit ↔️</Heading>
    <Text textSize={f[5]} textAlign="left" margin={s.v3}>
      kind of like <span className="code">flex: 1</span>
    </Text>
    <CodeAscii
      code={`.my-grid {

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;


  /*
  The above can also be written as:
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  */

}`}
      diagram={`.my-grid


+------+------+------+------+
|      |      |      |      |
|      |      |      |      |
|      |      |      |      |
+------+------+------+------+
|      |      |      |      |
|      |      |      |      |
|      |      |      |      |
+------+------+------+------+
|      |      |      |      |
|      |      |      |      |
|      |      |      |      |
+------+------+------+------+
|      |      |      |      |
|      |      |      |      |
|      |      |      |      |
+------+------+------+------+
|      |      |      |      |
|      |      |      |      |
|      |      |      |      |
+------+------+------+------+`}
    />
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Heading size="6" textAlign="left">Gutters</Heading>
    <CodeAscii
      code={`.my-grid {

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;

}`}
      diagram={`.my-grid


1     2      3      4     5
+----+-+----+-+----+-+----+ 1
|    | |    | |    | |    |
|    | |    | |    | |    |
+----+ +----+ +----+ +----+
+----+ +----+ +----+ +----+ 2
|    | |    | |    | |    |
|    | |    | |    | |    |
+----+ +----+ +----+ +----+
+----+ +----+ +----+ +----+ 3
|    | |    | |    | |    |
|    | |    | |    | |    |
+----+ +----+ +----+ +----+
+----+ +----+ +----+ +----+ 4
|    | |    | |    | |    |
|    | |    | |    | |    |
+----+ +----+ +----+ +----+
+----+ +----+ +----+ +----+ 5
|    | |    | |    | |    |
|    | |    | |    | |    |
+----+-+----+-+----+-+----+ 6`}
    />
    <Text textAlign="left" textSize={f[5]} margin={s.t3}>⚠️ Still only one grid line between tracks</Text>
  </Slide>,
  <Slide>
    <Heading size="4" textColor="secondary">Firefox Grid Inspector</Heading>
    <Image width="75%" src={images.inspector} />
    <Text>
      <Link
        href="https://www.mozilla.org/en-US/developer/css-grid/"
        textSize={f[5]}
        textColor="tertiary"
      >
        mozilla.org/en-US/developer/css-grid
      </Link>
    </Text>
  </Slide>,
];
