import React from "react";
import { Title } from "@/components";
import { YouTubeLite } from "react-youtube-lite";
interface SectionTitleVideoProps {
  title: string;
  url: string;
}

const SectionTitleVideo: React.FC<SectionTitleVideoProps> = ({
  title,
  url,
}) => {
  return (
    <>
      <Title title={title} />
      <YouTubeLite url={url} className="mb-20" />
    </>
  );
};

export default SectionTitleVideo;
