/**
 * Utility functions for gallery operations
 */

/**
 * Converts a gallery slug to a proper title
 * Example: "hingol-flood-relief-2007" -> "Hingol Flood Relief 2007"
 */
export function formatGalleryTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Gets the display title for a gallery, preferring the index file title
 * but falling back to formatted slug
 */
export function getGalleryDisplayTitle(galleryIndex: any, slug: string): string {
  if (galleryIndex?.data?.title) {
    return galleryIndex.data.title;
  }
  return formatGalleryTitle(slug);
}
