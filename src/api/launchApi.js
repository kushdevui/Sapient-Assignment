
function getQuery(params){

let query = Object.keys(params)
    .filter(k=>params[k]!==null)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
    return query
}

export function launchApi(http) {
  return {
    all: (data={}) => {
      data.limit=100;
      return http.get('launches?'+ getQuery(data));
    },
  };
}
