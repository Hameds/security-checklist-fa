// @flow
import React from "react";
import Card from "../Card";
import ShareButtons from "../ShareButtons";
import { CardContent, TopBorder } from "./style";
import { SmallHeading, SmallSubheading } from "../Page/style";

const BottomShare = () => (
  <Card style={{ width: "100%", marginTop: "48px" }}>
    <TopBorder />
    <CardContent>
      <SmallHeading>احساس امنیت بیشتری می‌کنید؟</SmallHeading>
      <SmallSubheading>
        با بازنشر این چک لیست، به افزایش امنیت و حریم شخصی آنلاین کمک کنید
      </SmallSubheading>
      <ShareButtons />
    </CardContent>
  </Card>
);

export default BottomShare;
