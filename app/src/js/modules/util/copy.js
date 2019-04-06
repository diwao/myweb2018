'use strict';

export default (val) => {
  const temp = document.createElement('div');
  temp.appendChild(document.createElement('pre')).textContent = val;
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(temp);

  document.getSelection().selectAllChildren(temp);
  const ret = document.execCommand('copy');
  body.removeChild(temp);
  // 処理結果を返却
  return ret;
};
