import * as React from "react";
import * as Types from "./types";

declare function GrabMetadataFromAnIpfsMetadataHashCode(props: {
  as?: React.ElementType;
  sendRequest?: Types.Devlink.RuntimeProps;
  ouput?: React.ReactNode;
}): React.JSX.Element;
