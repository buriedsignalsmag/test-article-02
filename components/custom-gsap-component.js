const React = require('react');
import { gsap } from "gsap";
const { useEffect, useRef, forwardRef } = React;


function Box({ children }) {
  return <div className="gsap-example-box">{children}</div>;
}

function Container({ children }) {
  return <div><Box>Nested Box</Box></div>;
}


export default function MyGSAPComponent() {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {

    // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
    gsap.to(q(".gsap-example-box"), {
      x: 100,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    });
  }, []);

  return (
    <div className="gsap-example-app" ref={el}>
      <Box>Box</Box>
      <Container/>
      <Box>Box</Box>
    </div>
  );
 }