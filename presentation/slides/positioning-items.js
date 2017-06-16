import React from 'react';
import {
  Heading,
  Slide,
} from 'spectacle';

import { CodeAscii, CodePen } from '../components';

export const positioningItemsSlides = [
  <Slide bgColor="pink" textColor="tertiary">
    <svg
      className="dib center"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="12rem" height="12rem"
    >
      <path fill="#5a5ae6" d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" />
    </svg>
    <Heading size="1">Positioning Items</Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Heading size="6" textAlign="left">Positioning Grid Items</Heading>
    <CodeAscii
      size={5}
      code=""
      diagram={`
                      1     2      3      4     5
                      +----+-+----+-+----+-+----+ 1
                      |    | |    | |    | |    |
                      |    | |    | |    | |    |
                      |    | |    | |    | |    |
   grid-row-start (2)-------------> o-----------o <-----(5) grid-column-end
grid-column-start (3) |    | |    | |xxxxxxxxxxx|
                      |    | |    | |xxxxxxxxxxx|
                      |    | |    | |xxxxxxxxxxx|
                      +----+ +----+ |xxxxxxxxxxx|
                      |    | |    | |xxxxxxxxxxx|
                      |    | |    | |xxxxxxxxxxx|
                      |    | |    | |xxxxxxxxxxx|
grid-row-end (4)------------------> o-----------o 4
                      |    | |    | |    | |    |
                      |    | |    | |    | |    |
                      |    | |    | |    | |    |
                      +----+ +----+ +----+ +----+ 5
                      |    | |    | |    | |    |
                      |    | |    | |    | |    |
                      |    | |    | |    | |    |
                      +----+-+----+-+----+-+----+ 6`}
    />
  </Slide>,
  <Slide>
    <CodePen
      height={600}
      user="winkerVSbecks"
      id="pPKBqB"
      bgColor="#fff"
      type="css,result"
      themeId="26435"
    />
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Heading size="6" textAlign="left">🤖 Automating the Layout</Heading>
    <CodeAscii
      size={5}
      code=""
      diagram={`+-----------+ +-----------+ +----+ +----+
|  wide 2   | |           | |    | |    |
|           | |           | |    | |    |
+-----------+ |   wide 2  | +----+ +----+
+----+ +----+ |   tall 2  | +----+ +----+
|    | |    | |           | |    | |    |
|    | |    | |           | |    | |    |
+----+ +----+ +-----------+ +----+ +----+
+----+ +----+ +----+ +----+ +-----------+
|    | |    | |    | |    | |           |
|    | |    | |    | |    | |           |
+----+ +----+ +----+ +----+ |  wide 2   |
+-----------+ +----+ +----+ |  tall 2   |
|           | |    | |    | |           |
|           | |    | |    | |           |
|  wide 2   | +----+ +----+ +-----------+
|  tall 2   | +----+ +----+ +----+ +----+
|           | |    | |    | |    | |    |
|           | |    | |    | |    | |    |
+-----------+ +----+ +----+ +----+ +----+`}
    />
  </Slide>,
  <Slide>
    <CodePen
      height={600}
      user="winkerVSbecks"
      id="owYoYE"
      bgColor="#fff"
      type="html,result"
      themeId="26435"
      editable
    />
  </Slide>,
  <Slide>
    <Heading size="6" textAlign="left" margin="0 0 2rem 0">Or Control Using Breakpoints</Heading>
    <div className="flex justify-around">
      <pre className="tl mv0 f6 lh-solid code">{`Large-Breakpoint

+-----------+ +-----------+
|  wide 2   | |           |
|           | |           |
+-----------+ |   wide 2  |
+----+ +----+ |   tall 2  |
|    | |    | |           |
|    | |    | |           |
+----+ +----+ +-----------+
+----+ +----+ +----+ +----+
|    | |    | |    | |    |
|    | |    | |    | |    |
+----+ +----+ +----+ +----+
+-----------+ +----+ +----+
|           | |    | |    |
|           | |    | |    |
|  wide 2   | +----+ +----+
|  tall 2   | +----+ +----+
|           | |    | |    |
|           | |    | |    |
+-----------+ +----+ +----+`}</pre>

      <pre className="tl mv0 f6 lh-solid code">{`Medium-Breakpoint

+------------------+
|      wide 3      |
|                  |
+------------------+
+-----------+ +----+
|           | |    |
|           | |    |
|  wide 2   | +----+
|  tall 2   | +----+
|           | |    |
|           | |    |
+-----------+ +----+
+----+ +----+ +----+
|    | |    | |    |
|    | |    | |    |
+----+ +----+ +----+
+-----------+ +----+
|           | |    |
|           | |    |
|  wide 2   | +----+
|  tall 2   | +----+
|           | |    |
|           | |    |
+-----------+ +----+
+----+ +----+ +----+
|    | |    | |    |
|    | |    | |    |
+----+ +----+ +----+`}</pre>
      <pre className="tl mv0 f6 lh-solid code">{`Small-Breakpoint

+-----------+
|  wide 2   |
|           |
+-----------+
+-----------+
|           |
|           |
|  wide 2   |
|  tall 2   |
|           |
|           |
+-----------+
+----+ +----+
|    | |    |
|    | |    |
+----+ +----+
+----+ +----+
|    | |    |
|    | |    |
+----+ +----+
+----+ +----+
|    | |    |
|    | |    |
+----+ +----+
+-----------+
|           |
|           |
|  wide 2   |
|  tall 2   |
|           |
|           |
+-----------+
+----+ +----+
|    | |    |
|    | |    |
+----+ +----+
+----+ +----+
|    | |    |
|    | |    |
+----+ +----+`}</pre>
    </div>
  </Slide>,
  <Slide>
    <CodePen
      height={600}
      user="winkerVSbecks"
      id="Gmdwxj"
      bgColor="#fff"
      themeId="26435"
    />
  </Slide>,
];
