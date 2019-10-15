# d-front

フロントエンド開発用のテンプレートです。

* pug
* scss
* TypeScript

が使えます。

## 使い方

```
$ npm install
$ npm run build
$ npm run start
```

ここまでやるとローカルにサーバが起動します。
src内のファイルをいじってサイトを作っていきましょう。

```
$ npm run release
```

でリリース用のファイルを生成します。

### static

`src`直下の`static`ディレクトリに配置したファイルはそのままdistに出力されます。

### バリデーション

```
$ npm run validate
```

でTypeScriptとdist内のHTMLをチェックできます。

## テスト

jestが使えます。テストファイルはの置き場所はroot直下の`test`ディレクトリです。


## 推奨環境

|    | version  |
| ---- | ---- |
|  node.js  | v10.15.1  |
|  npm  | v6.11.2  |
