// @flow
import * as React from "react";
import { NextSeo } from "next-seo";
import Page, { SectionHeading, Heading, Subheading } from "../components/Page";

export default function About() {
  return (
    <Page showEmailCapture={false} displayProgress={false}>
      <NextSeo
        config={{
          title: "چک لیست امنیت اینترنتی · درباره",
          description: "چک لیستی برای افزایش امنیت و حریم شخصی در اینترنت",
          openGraph: {
            title: "چک لیست امنیت اینترنتی · درباره",
            description: "چک لیستی برای افزایش امنیت و حریم شخصی در اینترنت",
            url: "https://projects.hameds.net/security-checklist/about"
          }
        }}
      />

      <SectionHeading>
        <Heading>درباره</Heading>

        <Subheading>
          این پروژه، ترجمه و بومی‌سازی{" "}
          <a
            href="https://github.com/brianlovin/security-checklist"
            target="_blank"
            rel="noopener noreferrer"
          >
            این پروژه اپن‌سورس انگلیسی
          </a>{" "}
          است.
        </Subheading>

        <Subheading>
          شما می‌توانید با مراجعه به{" "}
          <a
            href="https://github.com/hameds/security-checklist-fa"
            target="_blank"
            rel="noopener noreferrer"
          >
            مخزن پروژه فارسی
          </a>{" "}
          چک لیست امنیت اینترنتی در گیت‌هاب، به ما در بهتر شدن محتوای این چک
          لیست و اضافه کردن منابع فارسی بیشتر کمک کنید.
        </Subheading>
      </SectionHeading>
    </Page>
  );
}
