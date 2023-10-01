import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GrabATokenNfTsMetadataCode.module.css";

export function GrabATokenNfTsMetadataCode({
  as: _Component = _Builtin.Section,
  sendRequest = {},
  output = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Heading className={_utils.cx(_styles, "heading-2")} tag="h1">
        {"Grab A Token/NFT's Metadata"}
        <br />
      </_Builtin.Heading>
      <_Builtin.Link
        className={_utils.cx(_styles, "button")}
        button={true}
        options={{
          href: "#",
        }}
        {...sendRequest}
      >
        {"SEND REQUEST"}
      </_Builtin.Link>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-2")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "", "text-block")}
          tag="div"
        >
          {"Output"}
        </_Builtin.Block>
        <_Builtin.Paragraph>{output}</_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
