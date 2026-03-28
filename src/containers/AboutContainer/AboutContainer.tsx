import ReactMarkdown from "react-markdown";
import classes from "./AboutContainer.module.scss";
import AboutText from "./About.md";
import { useEffect, useState } from "react";

export const AboutContainer = () => {
  const [aboutContent, setAboutContent] = useState("");

  useEffect(() => {
    fetch(AboutText)
      .then((response) => response.text())
      .then((content) => {
        setAboutContent(content);
      });
  }, []);

  return <ReactMarkdown>{aboutContent}</ReactMarkdown>;
};
