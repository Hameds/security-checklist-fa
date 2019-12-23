// @flow
import * as React from "react";
import Page, { SectionHeading, Heading, Subheading } from "../components/Page";
import Checklist from "../components/Checklist";
import ShareButtons from "../components/ShareButtons";
import BottomShare from "../components/BottomShare";

class Index extends React.Component<{}> {
  render() {
    return (
      <Page displayProgress>
        <SectionHeading>
          <Heading>در اینترنت، ایمن باشید.</Heading>
          <Subheading>
            چک لیستی برای افزایش امنیت و حریم خصوصی آنلاین شما.
            <br />
            لطفاً مواردی که مطالعه و تکمیل کردید را تیک بزنید.
          </Subheading>
        </SectionHeading>

        <div style={{ marginTop: "40px" }} />

        <ShareButtons />

        <Checklist />

        <BottomShare />
      </Page>
    );
  }
}

export default Index;
