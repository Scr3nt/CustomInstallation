/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";

type Children = { children: React.ReactElement | React.ReactElement[] };
type Props = Children & {
  isError: boolean;
  isLoading: boolean;
  isEmpty: boolean;
  isSuccess?: boolean;
};

function StateManager(props: Props) {
  const searchChildrenOfType = (
    componentType: (props: Children) => JSX.Element
  ) => {
    const childrenToShow: [] | React.ReactElement[] = [<></>];

    React.Children.forEach(props.children, (child) => {
      if (child.type === componentType) {
        childrenToShow.pop();
        childrenToShow.push(child);
      }
    });
    return childrenToShow;
  };

  const loadingChildren = useMemo(
    () => searchChildrenOfType(Loading),
    [props.children]
  );
  const emptyChildren = useMemo(
    () => searchChildrenOfType(Empty),
    [props.children]
  );
  const errorChildren = useMemo(
    () => searchChildrenOfType(Error),
    [props.children]
  );
  const successChildren = useMemo(
    () => searchChildrenOfType(Success),
    [props.children]
  );

  if (props.isLoading) {
    return <>{loadingChildren}</>;
  }

  if (props.isError) {
    return <>{errorChildren}</>;
  }

  if (props.isEmpty) {
    return <>{emptyChildren}</>;
  }

  if (props.isSuccess ?? true) {
    return <>{successChildren}</>;
  }

  return <>{loadingChildren}</>;
}

export const Manager = StateManager;
export const Loading = (props: Children) => <>{props?.children}</>;
export const Empty = (props: Children) => <>{props?.children}</>;
export const Error = (props: Children) => <>{props?.children}</>;
export const Success = (props: Children) => <>{props?.children}</>;
