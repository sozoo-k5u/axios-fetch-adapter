// Sources:\
//   - https://github.com/axios/axios/blob/v1.x/lib/core/buildFullPath.js
//   - https://github.com/axios/axios/blob/v1.x/lib/helpers/isAbsoluteURL.js
//   - https://github.com/axios/axios/blob/v1.x/lib/helpers/combineURLs.js
// Accessed: 2022-12-11

// Axios License Text:
/*
# Copyright (c) 2014-present Matt Zabriskie & Collaborators

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
export function buildFullPath(requestedURL: string, baseURL?: string): string {
  if (requestedURL && baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  if (!requestedURL && baseURL) {
    return baseURL;
  }
  return requestedURL;
}

export function combineURLs(baseURL: string, relativeURL: string): string {
  return baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "");
}

export function isAbsoluteURL(url: string): boolean {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
