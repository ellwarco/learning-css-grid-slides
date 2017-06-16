import React from 'react';
import {
  Heading,
  Slide,
  CodePane,
} from 'spectacle';

import { CodeAscii, CodePen } from '../components';
import { s, f } from '../styles';

export const templateAreasSlides = [
  <Slide bgColor="pink" textColor="tertiary">
    <svg
      className="dib center"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="12rem" height="12rem"
    >
      <path fill="#5a5ae6" d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z" />
    </svg>
    <Heading size="2" textColor="tertiary">Grid Template Areas</Heading>
  </Slide>,
  <Slide>
    <CodePen
      height={600}
      user="winkerVSbecks"
      id="KmoxJp"
      bgColor="#fff"
      themeId="26435"
    />
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Heading size="6" textColor="secondary" textAlign="left" margin={s.b3}>
      Article Layout
    </Heading>
    <CodePane
      lang="css"
      textSize={f[5]}
      style={{ overflow: 'scroll', height: 500 }}
      source={`.layout {
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 1em;
}

@media screen and (min-width: 60em) {
  .layout {
    grid-template-areas:
      "meta   title  title  title  copy2  copy2"
      "copy1  copy1  copy1  copy1  copy2  copy2"
      "copy1  copy1  copy1  copy1  copy2  copy2"
      "media  media  media  media  media  media"
      "aside  aside  copy3  copy3  copy3  copy3";
  }
}

@media screen and (min-width: 30em) and (max-width: 60em) {
  .layout {
    grid-template-areas:
      "meta    meta  title  title  title  title"
      "copy1  copy1  copy1  copy1  copy1  copy1"
      "copy2  copy2  copy2  copy2  copy2  copy2"
      "media  media  media  media  media  media"
      "aside  aside  aside  aside  aside  aside"
      "copy3  copy3  copy3  copy3  copy3  copy3";
  }
}

.layout {
  grid-template-areas:
    "title  title  title  title  title  title"
    "meta    meta   meta   meta   meta   meta"
    "copy1  copy1  copy1  copy1  copy1  copy1"
    "copy2  copy2  copy2  copy2  copy2  copy2"
    "media  media  media  media  media  media"
    "aside  aside  aside  aside  aside  aside"
    "copy3  copy3  copy3  copy3  copy3  copy3";
}`}
    />
  </Slide>,
  <Slide>
    <CodePen
      height={600}
      user="winkerVSbecks"
      id="RgRomv"
      bgColor="#fff"
      themeId="26435"
    />
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Heading size="6" textAlign="left">BBC Live Layout – with Emojis 🙌🏽</Heading>
    <CodeAscii
      size={4}
      code={`grid-template-areas:
  "✈️ ✈️ ✈️ ✈️ ✈️"
  "⚽️ ⚽️ ⚽️ ⚽️ ⚽️"
  "🖼 🖼 🖼 🖼 🖼"
  ".  👀 📻 📊  ."
  ".  👀 📻 🤼  .";

/*
  ✈️: Navigation
  ⚽️: Match Score
  🖼: Media
  👀: Summary
  📻: Live Reporting
  📊: Stats
  🤼: Line-ups
*/
`}
      diagram={`
+-------------------------------------+
|              Navigation             |
+-------------------------------------+
|             Match Score             |
+-------------------------------------+
|                                     |
|               Media                 |
|                                     |
+--+------+-+-------------+-+------+--+
|  |  su  | |             | |      |  |
|  |  mm  | |             | |      |  |
|  |  ar  | |   Live      | | stats|  |
|  |  y   | |   Reporting | |      |  |
|  +------+ |             | +------+  |
|           |             | |      |  |
|           |             | | line |  |
|           |             | | -ups |  |
|           |             | |      |  |
|           |             | |      |  |
|           |             | |      |  |
+-------------------------------------+
`}
    />
  </Slide>,
];
