![](https://i.imgur.com/19pqgpi.png)

# 六角 2024 React 作品實戰冬季班第二週作業 - RESTful API 串接

- [線上部署連結](http://hex2024-react-training-week2.worksbyaaron.com/)
- [作業範例](https://github.com/hexschool/react-training-chapter-2024)
- [註冊連結、測試管理平台](https://ec-course-api.hexschool.io/)
- [API 文件](https://hexschool.github.io/ec-courses-api-swaggerDoc/)

## 使用技術

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)

## 開發環境設置

建議使用 [VSCode](https://code.visualstudio.com/) 搭配 [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## 快速開始

**專案設置（Project setup）**

將專案複製到本地端

```sh
$ git clone https://github.com/happyloa/Hex2024-React-Training-Week2.git
```

套件安裝

```sh
$ cd hex2024-react-training-week2
$ npm install
```

**執行專案（Start the server）**

```sh
$ npm run dev
```

在瀏覽器上輸入

```
http://localhost:5173/
```

即可在本地端預覽專案

## 專案結構

位於 `src`

結構說明

```
src
├── App.jsx                          負責發出 http 請求並透過 props 傳遞結果給子元件的主要元件
├── books.js                         所有商品資料
└── main.jsx                         React 的主要元件
```

## 元件檔案（Components）

位於 `src/components` 與 `src/assets`

結構說明

```
src/components
├── LoginContainer.jsx               登入表單容器
├── LoginForm.jsx                    登入表單
├── MainView.jsx                     商品列表
└── ProductDetail.jsx                商品詳細資訊卡片
```

```
src/assets
└── style.css                        網站整體的樣式設定
```

## 靜態檔案

位於 `public`

結構說明

```
public
├── CNAME                            網站的 DNS CNAME 紀錄
└── favicon.ico                      網站 favicon
```

## 使用的套件 & 工具

- [axios](https://axios-http.com/)
- [gh-pages](https://www.npmjs.com/package/gh-pages)
- [ChatGPT 4o](https://openai.com/)