# 王奕方作品集網站範本

這是一個不需要安裝任何程式的單頁作品集網站。

## 最快使用方式

1. 解壓縮檔案。
2. 雙擊 `index.html`，即可在瀏覽器預覽。
3. 使用記事本、VS Code 或其他文字編輯器開啟：
   `assets/content.js`
4. 修改姓名、自我介紹、作品、得獎紀錄與聯絡方式。
5. 將自己的作品照片放進：
   `assets/images/`
6. 在 `content.js` 中更新圖片路徑，例如：

```js
image: "assets/images/my-work.jpg"
```

## 建議圖片尺寸

- 首頁主視覺：1200 × 1500 px
- 作品圖片：1200 × 900 px
- 格式：JPG、PNG、WebP

## 新增作品

在 `assets/content.js` 的 `works` 陣列中複製一組作品資料：

```js
{
  title: "作品名稱",
  category: "篆刻",
  year: "2026",
  medium: "石材、印泥",
  description: "作品說明",
  image: "assets/images/你的圖片.jpg"
}
```

## 發布到網路

可將整個資料夾上傳到：

- GitHub Pages
- Netlify
- Cloudflare Pages
- 任一支援靜態網站的主機

## 主要檔案

- `index.html`：網站結構
- `assets/content.js`：文字、作品與聯絡資料
- `assets/style.css`：顏色、排版與版面
- `assets/script.js`：作品篩選與圖片放大功能
