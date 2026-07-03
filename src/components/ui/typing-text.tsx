"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  words: string[];
  className?: string;
}

export function TypingText({ words, className = "" }: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
          if (displayed.length === currentWord.length) {
            setTimeout(() => setDeleting(true), 1200);
          }
        } else {
          setDisplayed(currentWord.slice(0, displayed.length - 1));
          if (displayed.length === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 50 : 120,
    );

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return <span className={className}>{displayed}<span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-sky-400" /></span>;
}
