# ds-smooth-scroll ( Don't Need jQuery )


ds-smooth-scroll.jsは、jQueryを必要としないスムーススクロール機能のライブラリです。
- Target browser : IE9+

___

# Install

```
npm i ds-smooth-scroll -S
```

___

# Import

```
import DsSmoothScroll from 'ds-smooth-scroll';
```

___

# Constructor

```
new DsSmoothScroll(element [, option]);
```
|Argument|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|speed|Number|800|スクロールスピードを指定できます。|
|easing|String|"linear"|下記からイージングを指定できます。<br>"linear"<br>"easeInCubic"<br>"easeOutCubic"<br>"easeInOutCubic"<br>"easeInQuart"<br>"easeOutQuart"<br>"easeInOutQuart"<br>"easeInQuint"<br>"easeOutQuint"<br>"easeInOutQuint"|
|posFix|Number|0|ヘッダー分のマイナス値を指定できます。|
|ignore|String|-|イベントを除外する要素を指定できます。|
|blank|Boolean|false|ページ遷移ありのアンカーリンク。|
|customAnchor|String|"#/"|blank: trueの時有効 "?anchor="、"?id=" などを指定します。|
___

# Method

|Method|Argument|Descroption|
|:-------|:--------|:------|
|SmoothScroll( Number )|-|引数に指定した位置にスクロールします。|
|ScrollEnd = function(){};|-|スクロール完了後に実行されます。|

___

# Demo

[https://dsflon.github.io/ds-smooth-scroll/](https://dsflon.github.io/ds-smooth-scroll/)

```
import DsSmoothScroll from 'ds-smooth-scroll';

let dsScroll = new DsSmoothScroll(
    "a",
    {
        easing: "easeOutQuint",
        ignore: ".ignore",
        posFix: 60,
        blank: true,
    }
);

dsScroll.ScrollEnd = function(){
    console.log("ScrollEnd")
};
```
