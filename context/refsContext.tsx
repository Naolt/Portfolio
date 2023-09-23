import React, {
  createContext,
  useRef,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface SectionRefs {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

interface SectionContextValue extends SectionRefs {
  activeRef: React.RefObject<string>;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  updateActiveSection: () => void; // Add this line
}

const SectionRefsContext = createContext<SectionContextValue | null>(null);

interface Props {
  children: ReactNode;
}

const SectionRefsProvider: React.FC<Props> = ({ children }) => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef("Home");

  const [activeSection, setActiveSection] = useState<string>("Home");

  const updateActiveSection = () => {
    const sections = [homeRef, aboutRef, projectsRef, contactRef];
    const offsets = sections.map((ref) => ref.current?.offsetTop || 0);

    let current = "Home";

    for (let i = 0; i < offsets.length; i++) {
      if (sections[i].current) {
        const rect = sections[i].current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          current = sections[i].current.id;
        }
      }
    }

    activeRef.current = current;
  };

  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  return (
    <SectionRefsContext.Provider
      value={{
        homeRef,
        aboutRef,
        projectsRef,
        contactRef,
        activeRef,
        setActiveSection,
        updateActiveSection,
      }}
    >
      {children}
    </SectionRefsContext.Provider>
  );
};

export { SectionRefsProvider, SectionRefsContext };
