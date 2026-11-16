// Numbers the images of the individuals groups 1…n in order, across groups,
// so /work and the individuals overlay show the same numbers.
export function numberIndividuals(groups) {
  let n = 0;
  return groups.map((group) => ({
    id: group._key,
    year: group.year ?? null,
    images: group.images,
    numbers: group.images.map(() => ++n),
  }));
}
