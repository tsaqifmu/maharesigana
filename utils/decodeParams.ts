// Fungsi untuk mengubah encoded URL params menjadi teks biasa
export function decodeUrlParams(encodedUrl: string): string {
  try {
    // Menggunakan decodeURIComponent untuk decode URL params
    const decodedText = decodeURIComponent(encodedUrl);
    return decodedText;
  } catch (error) {
    console.error("Error decoding URL:", error);
    return encodedUrl; // Mengembalikan teks asli jika terjadi error
  }
}
