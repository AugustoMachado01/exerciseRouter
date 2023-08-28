import React, { useEffect } from "react";

export function Head({ title }) {
  useEffect(() => {
    document.title = "Renek | " + title;
  }, [title]);

  return null;
}
