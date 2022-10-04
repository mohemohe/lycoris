# Lycoris

外部データ通信無しで、リアルタイム音声認識で文字起こしを行う、デスクトップアプリケーションを作りました。

文字起こしと同じタイムライン上で、メモを残すこともできます。

<img width="802" alt="スクリーンショット 2022-09-17 18 31 40" src="https://user-images.githubusercontent.com/46414076/190865611-0e107efd-3112-4229-bab7-ea7e904718ee.png">

## 対応環境

- MacOS

## インストール

### 必要なライブラリを取得

```sh
sh ./setup.sh
```

### アプリケーションを取得

Releaseから最新のものをインストールしてください。

## 開発用設定

### 必要なモデルのダウンロード

```
VOSK_MODEL_VERSION=0.22
curl -LO https://alphacephei.com/vosk/models/vosk-model-ja-$VOSK_MODEL_VERSION.zip
mkdir ./src-tauri/resources
mv vosk-model-ja-$VOSK_MODEL_VERSION.zip ./src-tauri/resources
unzip ./src-tauri/resources/vosk-model-ja-$VOSK_MODEL_VERSION.zip
rm ./src-tauri/resources/vosk-model-ja-$VOSK_MODEL_VERSION.zip
```

### 開発者モードで起動

```
yarn tauri dev
```

### 開発者向けインストール

```
yarn tauri build
```

## ユースケース

### Zoomで議事録をとる

#### 仮想オーディオデバイスと、仮想ミキサーのインストール

1. [BlackHole](https://existential.audio/blackhole/)のインストール   
メール登録が必要ですが、無料で利用できます。

2. [LadioCast](https://apps.apple.com/jp/app/ladiocast/id411213048)のインストール

#### 設定

1. LadioCastで、下記画像のように設定   
外部マイク及び外部ヘッドフォンは、イヤホンを利用している場合の設定です。   
利用していない場合は、MacBook Pro（お使いのPCの種類）のマイク及びMacBook Proのスピーカーを指定ください。   
<img width="625" alt="スクリーンショット 2022-09-18 0 24 28" src="https://user-images.githubusercontent.com/46414076/190865290-9593f28b-5c83-4b5f-b605-ff95b598bbb7.png">

2. Zoomで、下記画像のように入出力をBlackHoleへと変更   
<img width="801" alt="スクリーンショット 2022-09-18 0 15 38" src="https://user-images.githubusercontent.com/46414076/190865345-82dcbdb0-b800-4b79-9f89-8567075913b6.png">

3. 本アプリ『Lycoris』のマイクを、BlackHoleへと変更
