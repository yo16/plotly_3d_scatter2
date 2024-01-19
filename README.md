# plotly_3d_scatter2
node環境でplotlyを使って3D-Scatterを描く

- [Plotly node.js graphing library in Nodejs](https://plotly.com/nodejs/)

# server-app
## 作成
- グローバル環境にexpress-generatorを入れる
  - `npm install -g express-generator`
  - 一時的にローカルトップにnode環境を作って、次のコマンド実行したら物理削除してもよかったかも
- `express server-app`
- `npm install`
  - package.jsonをインストール
  - 試しに`npm start`
    - http://localhost:3000/ でExpressが出てきてOK
- /usersのパスを消す
  - `server-app/app.js`
    - http://localhost:3000/users でNot Found 404が出る
- エラー情報が出すぎなのでNotFoundのページを編集
  - `server-app/views/error.jade`
    - `pre #{error.stack}`の行を消す
    - 消してもいいけど、行コメントアウト
      - 行コメントアウトは`//`
    - 「Not Found 404」しか出なくなってOK
    - users以外も試しておく
    - あ！コメントもHTML化されちゃう
      - `//-`で完全に表に出ない
- 
