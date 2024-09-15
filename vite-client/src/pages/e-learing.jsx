import { useEffect } from "react";

export default function ELearning() {
  useEffect(() => {
    // Chuyển hướng đến YouTube
    window.location.href = "https://www.youtube.com";
  }, []);

  return null;
}
