import SiteNav, { useWorkLineOffset } from "@/components/SiteNav";

// Base type and spacing for the new design. _app.js already renders <main>,
// so this is a div. Below md the content stacks two lines (gap-10) under the
// nav at full width; from md up it sits beside the nav, its first line level
// with the top of the nav's Work / About / Contact section (the Work line) on
// every page. The whole site (padding included) is at most max-w-screen-xl
// wide, centered in the viewport (matching WorkOverlay), so wider screens
// look like a 1280px one.
export default function Layout({ children, slide, setSlide, setHoveredSlide }) {
  const workLine = useWorkLineOffset();
  return (
    <div className="font-[Arial] text-[15px] leading-[20px] text-[green] p-6 flex flex-col gap-10 md:flex-row md:gap-6 md:max-w-screen-xl md:mx-auto">
      <SiteNav
        slide={slide}
        setSlide={setSlide}
        setHoveredSlide={setHoveredSlide}
      />
      <div
        className="relative w-full md:flex-1 md:pt-[var(--work-line)]"
        style={{ "--work-line": `${workLine}px` }}
      >
        {children}
      </div>
    </div>
  );
}
