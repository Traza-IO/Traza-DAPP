
import { backend } from "../declarations/backend";

export const fetchImage = async (name: string) : Promise<string> => {
  const bytes = await backend.getImage(name);
  if (!bytes || !Array.isArray(bytes) || bytes.length === 0) return '';
  const imageUrl = URL.createObjectURL(new Blob([new Uint8Array(bytes[0])], { type: 'image/jpeg' }));
  return imageUrl;
};