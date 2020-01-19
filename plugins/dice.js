export default function rollDie(faces = 6) {
  faces = Math.floor(faces);
  return Math.floor(Math.random() * faces) + 1;
}
