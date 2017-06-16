import React from 'react';
import {
  Heading,
  Link,
  Slide,
  Text,
  List,
  ListItem,
} from 'spectacle';

import { s, f } from '../styles';

export const outroSlides = [
  <Slide bgColor="secondary" textColor="primary">
    <Heading textColor="primary" size={5} textAlign="left" margin={s.b5}>
      CSS Grid Spec Is Massive!
    </Heading>
    <Text textColor="pink" textAlign="left" lineHeight="1.5">
      Take little steps.<br />
      Build things. Experiment.<br />
      It’s okay to not understand everything at once.
    </Text>
  </Slide>,
  <Slide>
    <Heading textColor="tertiary" size={5} textAlign="left">
      What Next?
    </Heading>
    <List>
      <ListItem>
        <Link
          textColor="secondary"
          href="http://labs.jensimmons.com/"
        >
          Jen Simmons – Layout Lab
        </Link>
      </ListItem>
      <ListItem>
        <Link
          textColor="secondary"
          href="https://gridbyexample.com/"
        >
          Grid by Example
        </Link>
      </ListItem>
      <ListItem>
        <Link
          textColor="secondary"
          href="https://codepen.io/collection/nZBOPV/"
        >
          CSS Grid Experiments
        </Link>
      </ListItem>
      <ListItem>
        <Link
          textColor="secondary"
          href="http://learncssgrid.com/"
        >
          Learn CSS Grid
        </Link>
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="pink">
    <Heading size={1} textColor="tertiary">🌵 Thank You!</Heading>
    <Text
      margin={s.t5}
      textColor="secondary"
      textSize={f[4]}
      className="fw6"
      fit
    >
      <Link href="https://github.com/winkerVSbecks/learning-css-grid-slides" textColor="secondary">winkerVSbecks.github.io/learning-css-grid-slides</Link>
    </Text>
  </Slide>,
  <Slide>
    <Heading textColor="tertiary" size={5} textAlign="left">
      Icons and Images from
    </Heading>
    <List>
      <ListItem>
        <Link
          textColor="secondary"
          href="https://icon.now.sh/"
        >
          microicon
        </Link>
      </ListItem>
      <ListItem>
        <Link
          textColor="secondary"
          href="https://unsplash.com/@andrewjohnp"
        >
          Andrew Phillips
        </Link>
      </ListItem>
      <ListItem>
        <Link
          textColor="secondary"
          href="https://unsplash.com/@anniespratt"
        >
          Annie Spratt
        </Link>
      </ListItem>
    </List>
  </Slide>,
];
