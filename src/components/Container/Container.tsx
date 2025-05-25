// import React from "react";
import styled from "./Container.module.css";
import type { Children } from "../../types/children";

export default function Container({ children }: Children ) {
  return <div className={styled.container}>{children}</div>;
}
