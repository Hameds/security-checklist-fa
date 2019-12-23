// @flow
import React from "react";
import { Title, Uncollapse } from "./style";
import type { ChecklistResource } from "../../types";

type Props = {
  resource: ChecklistResource,
  isCollapsed: boolean,
  handleCollapse: Function
};

export const Heading = ({ resource, isCollapsed, handleCollapse }: Props) => (
  <React.Fragment>
    <Title>
      {resource.title}
      <Uncollapse
        onClick={handleCollapse}
        aria-controls={`content_${resource.id}`}
        aria-expanded={!isCollapsed}
        type="button"
      >
        {isCollapsed ? "نمایش توضیحات" : "پنهان کردن توضیحات"}
      </Uncollapse>
    </Title>
  </React.Fragment>
);
