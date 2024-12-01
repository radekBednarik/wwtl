/**
 * Process tailwind classes strings to single valid `<element>.classList.add()` argument.
 */
export function ptc(...args: string[]) {
  return args
    .map((str) => {
      return str
        .trim()
        .split(" ")
        .map((str) => {
          return str.trim();
        });
    })
    .reduce((acc, arr) => {
      return (acc += arr.join(" ")) + " ";
    }, "")
    .trim()
    .split(" ");
}
