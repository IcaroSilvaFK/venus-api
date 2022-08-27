import { Content } from '@prisma/client';

export type Create = Omit<Content, 'id'>;

export function createContentValdiation({
  country,
  director,
  language,
  link,
  plot,
  poster,
  release,
  runtime,
  title,
}: Create) {
  if (
    !country ||
    !director ||
    !language ||
    !link ||
    !plot ||
    !poster ||
    !release ||
    !runtime ||
    !title
  ) {
    return;
  }

  return true;
}
