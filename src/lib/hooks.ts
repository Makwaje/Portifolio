import { useActiveSectionContext } from "@/context/active-sections";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import type { SectionName } from "./types";

type useSectionInViewProps = {
  sectionName: SectionName;
};

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(
    function () {
      if (inView && Date.now() - timeOfLastClick > 1000)
        setActiveSection(sectionName);
    },
    [inView, setActiveSection, timeOfLastClick, sectionName],
  );

  return { ref, inView };
}
