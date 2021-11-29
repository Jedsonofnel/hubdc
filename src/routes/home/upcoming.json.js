export function get() {
  const url = 'http://www.api.hubdc.info/events/upcoming')
  await fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}
