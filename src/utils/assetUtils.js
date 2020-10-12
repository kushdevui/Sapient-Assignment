// We can use "process.env.VAR_NAME" on both the server and the client.
// See config/env.js and server/indexHtml.js
export function imagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/${assetName}`;
}

export function getQuery(params) {
  let query = Object.keys(params)
    .filter(k => params[k] !== null)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
  return query;
}

export const types = {
  launch_year: 'launch_year',
  launch_success: 'launch_success',
  land_success: 'land_success'
};
