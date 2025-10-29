import React from "react";
import Reveal from "./Reveal";


export function withReveal(Component, options = {}) {
const Wrapped = (props) => (
<Reveal {...options}>
<Component {...props} />
</Reveal>
);
return Wrapped;
}