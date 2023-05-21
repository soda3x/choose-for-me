/**
 * Fetch file and return contents as a string
 * @param url to fetch file from
 * @returns string contents of file
 */
export async function fetchFileContents(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  } catch (error) {
    return `Failed to fetch from ${url}.`;
  }
}

/**
 * Given a string, tokenise and choose a value at random and return it
 * @param choices string containing the values to choose from
 * @param delim delimiter to split the `choices` string on
 * @returns a random string value from the `choices` string
 */
export function choose(choices: string, delim: string): string {
  const choicesCollection: string[] = choices.split(delim);
  const randomIndex = Math.floor(Math.random() * choicesCollection.length);
  return choicesCollection[randomIndex];
}
