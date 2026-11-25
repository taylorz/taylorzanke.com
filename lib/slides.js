import { numberIndividuals } from "@/lib/individuals";

// Resolves each Home slide to {image, title, href}:
// - image: the live image from its work or individuals group, falling back
//   to the copy stored when it was picked (e.g. if the source image was since
//   removed). Slides with no image are dropped.
// - title: the work's title, or an individuals group's running numbers,
//   e.g. "(5, 6)".
// - href: the work's page, or the individuals group's overlay.
export function resolveSlides(slides, groups) {
  const numbered = numberIndividuals(groups);
  return slides
    .map((slide) => {
      const group = slide.groupKey
        ? numbered.find((g) => g.id === slide.groupKey)
        : null;
      const fromGroup = group?.images?.find((i) => i._key === slide.imageKey);
      return {
        image: slide.workImage ?? fromGroup ?? slide.image ?? null,
        title:
          slide.workTitle ??
          (group ? `(${group.numbers.join(", ")})` : null),
        href: slide.workSlug
          ? `/work/${slide.workSlug}`
          : group
            ? `/work/individuals/${group.id}`
            : null,
      };
    })
    .filter((s) => s.image?.asset);
}
