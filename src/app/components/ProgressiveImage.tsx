import Image from "next/image";
import { useState, useEffect } from "react";

const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    // update the image
  }, []);

  return (
    <Image
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className="image"
    />
  );
};