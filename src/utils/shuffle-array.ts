export default function shuffleArray<T> (array: T[]): T[] {
  let currentIndex = array.length
  let randomIndex: number
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex--);
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }
  return array
}
