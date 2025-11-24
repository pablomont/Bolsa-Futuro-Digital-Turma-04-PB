export function getImageUrl(imageId: string, size: string = "s"): string {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}
