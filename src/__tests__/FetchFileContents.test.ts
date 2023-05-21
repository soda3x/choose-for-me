import { fetchFileContents } from "..";

const TEST_FILE_CONTENTS: string = "totally an important file with totally important contents";
const FAILED_MSG: string = "Failed to fetch from http://not/a/real/file.";
const INTERNET_FILE_URL: string = "https://raw.githubusercontent.com/soda3x/choose-for-me/main/src/__tests__/test.txt"

test('Fetch invalid file contents', async () => {
    expect(await fetchFileContents("http://not/a/real/file")).toBe(FAILED_MSG);
});

test('Fetch file contents', async () => {
    expect(await fetchFileContents(INTERNET_FILE_URL)).toBe(TEST_FILE_CONTENTS);
});