export default (value) => {
  if (typeof value !== 'number') {
    return false;
  }
  const arr = value.toString().split('.');
  arr[0] = arr[0].toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  return arr.join('.');
}
