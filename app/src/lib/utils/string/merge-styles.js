export function mergeStyles(...input) {
  const output = [];
  input.forEach((blockOfClasses) => {
    if (!blockOfClasses) return;
    blockOfClasses.split(/\s/g).forEach((className) => {
      if (className.length > 0) output.push(className);
    });
  });

  return output.join(' ');
}