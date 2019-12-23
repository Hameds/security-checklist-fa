// @flow
import * as React from "react";
import { FacebookButton, TwitterButton, CopyLinkButton } from "../Button";
import { Container } from "./style";

export default function ShareButtons() {
  return (
    <Container>
      <TwitterButton
        href="http://twitter.com/share?text=چک لیستی برای افزایش امنیت و حریم شخصی آنلاین به زبان فارسی&url=https://amn.rostambot.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        توییت
      </TwitterButton>

      <CopyLinkButton text="https://amn.rostambot.com">
        اشتراک‌گذاری لینک
      </CopyLinkButton>
    </Container>
  );
}
