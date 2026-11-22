import SiteNav, { useActivePageLineOffset } from "@/components/SiteNav";

// Base type and spacing for the new design. _app.js already renders <main>,
// so this is a div. Below md the content stacks two lines (gap-10) under the
// nav at full width; from md up it sits beside the nav, left-aligned at
// max-w-screen-xl, its first line on the line of the active nav item
// (Work, About or Contact).
export default function Layout({ children, slide, setSlide, setHoveredSlide }) {
  const pageLine = useActivePageLineOffset();
  return (
    <div className="font-[Arial] text-[15px] leading-[20px] text-[green] p-6 flex flex-col gap-10 md:flex-row md:gap-6">
      <SiteNav
        slide={slide}
        setSlide={setSlide}
        setHoveredSlide={setHoveredSlide}
      />
      <div
        className="relative w-full md:flex-1 md:pt-[var(--page-line)] md:max-w-screen-xl"
        style={{ "--page-line": `${pageLine}px` }}
      >
        {children}
      </div>
    </div>
  );
}
