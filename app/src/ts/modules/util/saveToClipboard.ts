'use strict';

interface result {
  val: string;
  success: boolean;
}

// 渡した値をクリップボードに保存する
export default (val: string): result => {
  const temp = document.createElement('div');
  temp.appendChild(document.createElement('pre')).textContent = val;
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(temp);

  document.getSelection().selectAllChildren(temp);
  const success = document.execCommand('copy');
  body.removeChild(temp);
  // 処理結果を返却
  return {val, success};
};
