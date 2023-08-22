import React, { useEffect } from "react";

const Paragraph = () => {
  const textAreaRef = React.useRef();

  useEffect(() => {
    textAreaRef.current.addEventListener("input", function () {
      console.log(this.scrollHeight);
      if (this.scrollHeight > 24) {
        this.style.height = "auto";
        this.style.height = this.scrollHeight - 18 + "px";
        this.style.height = this.scrollHeight + "px";
      } else {
        this.style.height = "1rem";
      }
    });
  }, []);

  return (
    <section className="long-answer">
      <span>
        {" "}
        Paragraph <b className="red">*</b>
      </span>
      <textarea name="paragraph" id="long-answer" ref={textAreaRef} />
    </section>
  );
};

export default Paragraph;
