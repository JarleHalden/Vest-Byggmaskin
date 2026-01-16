import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
};

export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const selector = 'meta[name="description"]';
    let meta = document.head.querySelector(selector);

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, [title, description]);

  return null;
}
