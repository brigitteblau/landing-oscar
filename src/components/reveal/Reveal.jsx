import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export default function Reveal({
children,
once = true,
delay = 0,
y = 24,
duration = 0.8,
viewport = 0.85,
as: Tag = "div",
className = "",
staggerChildren = false,
}) {
const ref = useRef(null);


useEffect(() => {
const el = ref.current;
if (!el) return;


const targets = staggerChildren ? Array.from(el.children) : [el];


const ctx = gsap.context(() => {
gsap.set(targets, { opacity: 0, y });


targets.forEach((t, i) => {
gsap.to(t, {
opacity: 1,
y: 0,
duration,
delay: delay + (staggerChildren ? i * 0.08 : 0),
ease: "power3.out",
scrollTrigger: {
trigger: t,
start: "top 80%",
toggleActions: once ? "play none none none" : "play none none reset",
},
});
});
}, el);


return () => ctx.revert();
}, [once, delay, y, duration, viewport, staggerChildren]);


const Comp = Tag;
return <Comp ref={ref} className={className}>{children}</Comp>;
}