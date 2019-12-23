// @flow
import React from "react";
import { Container, Description, Icons } from "./style";
import Icon from "../Icon";

export default function Footer() {
  return (
    <Container data-cy="footer">
      <Icons>
        <a
          href="https://github.com/hameds/security-checklist-fa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon glyph="github" />
        </a>
      </Icons>

      <Description>
        این چک لیست یک پروژه&nbsp;
        <a
          href="https://github.com/hameds/security-checklist-fa"
          target="_blank"
          rel="noopener noreferrer"
        >
          اپن‌سورس
        </a>
        است.
      </Description>
    </Container>
  );
}
