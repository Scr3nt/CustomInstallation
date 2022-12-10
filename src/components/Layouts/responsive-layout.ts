import React, { ReactElement } from "react";
import { useEffect } from "react";

import useMedia from "../../hooks/useMedia";

type Props = {
  renderOnTablet?: () => ReactElement;
  renderOnPhone?: () => ReactElement;
  onLayoutChange?: (layout: "tablet" | "phone") => unknown;
};

export default function ResponsiveLayout(props: Props) {
  const { isTablet } = useMedia();

  let children: React.ReactElement | null = null;

  if (isTablet === true && props.renderOnTablet) {
    children = props.renderOnTablet();
  } else if (isTablet === false && props.renderOnPhone) {
    children = props.renderOnPhone();
  }

  useEffect(() => {
    props.onLayoutChange &&
      props.onLayoutChange(isTablet === true ? "tablet" : "phone");
  }, [isTablet, props]);

  return children;
}
