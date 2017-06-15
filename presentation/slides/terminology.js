import React from 'react';
import {
  Heading,
  Slide,
} from 'spectacle';

import { CodeAscii, CodePen } from '../components';

export const terminologySlides = [
  <Slide bgColor="pink" textColor="tertiary">
    <svg
      className="mb5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="12rem" height="12rem"
    >
      <path fill="#5a5ae6" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z" />
    </svg>
    <Heading size="1" style={{ display: 'inline' }} margin="0 0 0 -5rem">Terminology</Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Heading size="6" textAlign="left">Grid Container & Items</Heading>
    <CodeAscii
      code={`.my-grid-container {
  display: grid;
}`}
      diagram={`+--------------------------------+
|                                |
|                                |
|                                |
|                                |
|                                |
|                                |
|                                |
|                                |
|                                |
|                                |
|                                |
|                                |
+--------------------------------+`}
    />
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Heading size="6" textAlign="left">Grid Tracks</Heading>
    <CodeAscii
      code={`6 Columns
3 rows`}
      diagram={`Row Tracks                      Column Tracks


+---+---+---+---+---+---+       +---+---+---+---+---+---+
|xxxxxxxxxxxxxxxxxxxxxxx|       |xxx|   |   |   |   |   |
|xxxxxxxxxxxxxxxxxxxxxxx|       |xxx|   |   |   |   |   |
|xxxxxxxxxxxxxxxxxxxxxxx|       |xxx|   |   |   |   |   |
+-----------------------+       +xxx--------------------+
|   |   |   |   |   |   |       |xxx|   |   |   |   |   |
|   |   |   |   |   |   |       |xxx|   |   |   |   |   |
|   |   |   |   |   |   |       |xxx|   |   |   |   |   |
+-----------------------+       +xxx--------------------+
|   |   |   |   |   |   |       |xxx|   |   |   |   |   |
|   |   |   |   |   |   |       |xxx|   |   |   |   |   |
|   |   |   |   |   |   |       |xxx|   |   |   |   |   |
+---+---+---+---+---+---+       +---+---+---+---+---+---+
`}
    />
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Heading size="6" textAlign="left">Grid Lines & Cells</Heading>
    <CodeAscii
      code={`.my-grid-container {
  display: grid;
}

/* 6 Columns & 3 rows */`}
      diagram={`+---+---+---+---+---+---+ 1
|   |   |   |   |   |   |
|   |   |   |   |   |   |
|   |   |   |   |   |   |
+-------+---+-----------+ 2
|   |xxx|   |   |   |   |
|   |xxx|<-- Grid Cell  |
|   |xxx|   |   |   |   |
+-----------------------+ 3
|   |   |   |   |   |   |
|   |   |   |   |   |   |
|   |   |   |   |   |   |
+---+---+---+---+---+---+ 4
1   2   3   4   5   6   7`}
    />
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Heading size="6" textAlign="left">Grid Area</Heading>
    <CodeAscii
      code={`Space created by the
intersection of 4 grid lines

🚫 Can not be T- or L-shaped`}
      diagram={`+---+---+---+---+---+---+
|   |   |   |   |   |   |
|   |   |   |   |   |   |
|   |   |   |   |   |   |
+---+---+-----------+---+
|   |   |xxxxxxxxxxx|   |
|   |   |xxxxxxxxxxx|   |
|   |   |xxxxxxxxxxx|   |
+---+---|xxxxxxxxxxx|---+
|   |   |xxxxxxxxxxx|   |
|   |   |xxxxxxxxxxx|   |
|   |   |xxxxxxxxxxx|   |
+---+---+-----------+---+`}
    />
  </Slide>,
  <Slide>
    <CodePen id="ObmjeZ" themeId="26435" bgColor="#fff" height={600} />
  </Slide>,
];
