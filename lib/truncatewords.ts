// utils/truncateWords.ts

/**
 * Memangkas teks sehingga hanya menampilkan sejumlah kata tertentu,
 * dan menambahkan elipsis ("...") jika jumlah kata melebihi batas.
 *
 * @param text - Teks yang akan dipangkas.
 * @param wordLimit - Batas jumlah kata yang ditampilkan (default: 10).
 * @returns Teks yang telah dipangkas.
 */
export function truncateWords(text: string, wordLimit: number = 10): string {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}
