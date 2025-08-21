# 開發計畫 (Development Plan)

本文件旨在為基於 Firebase Boilerplate 的專案提供一個標準化的開發流程和計畫。

---

## 階段一：專案初始化與設定 (Project Initialization & Setup)

1.  **環境準備**:
    - [ ] 確認已安裝 Node.js (v14+), npm, 和 Firebase CLI。
    - [ ] 透過 `firebase login` 登入您的 Firebase 帳號。

2.  **專案連結**:
    - [ ] 使用 `firebase use --add` 指令將此 boilerplate 連結到您的 Firebase 專案。
    - [ ] 設定 `dev` (開發) 和 `prod` (正式) 兩個環境別名。

3.  **安裝依賴**:
    - [ ] 在 `functions` 目錄下執行 `npm install` 來安裝 Cloud Functions 所需的套件。

---

## 階段二：後端開發 (Backend Development)

1.  **資料庫設計 (Firestore)**:
    - [ ] 根據專案需求，設計 Firestore 的資料集合 (Collections) 與文件 (Documents) 結構。
    - [ ] 在 `firestore.rules` 中定義資料庫的讀寫安全規則，確保資料安全。

2.  **雲端函式開發 (Cloud Functions)**:
    - [ ] 在 `functions/src` 目錄下，使用 TypeScript 開發後端商業邏輯。
    - [ ] 遵循模組化原則，將不同功能的函式分開管理。
    - [ ] 進行本地測試：使用 `npm run serve` 在本地模擬環境中測試 Functions。

---

## 階段三：前端開發 (Frontend Development)

1.  **靜態網站部署 (Firebase Hosting)**:
    - [ ] 將前端應用程式（例如 React, Vue, Angular 或靜態 HTML/CSS/JS）放置在 `public` 目錄下。
    - [ ] 進行本地測試：使用 `firebase serve --only hosting` 預覽前端頁面。

2.  **前後端整合**:
    - [ ] 開發前端邏輯，使其能夠呼叫部署好的 Cloud Functions API。
    - [ ] 確保前端能夠正確地與 Firestore 互動。

---

## 階段四：測試與品質保證 (Testing & QA)

1.  **單元測試**:
    - [ ] 為核心的 Cloud Functions 編寫單元測試。

2.  **整合測試**:
    - [ ] 在 `dev` 環境中進行完整的功能測試，確保前後端協作正常。

3.  **使用者驗收測試 (UAT)**:
    - [ ] (可選) 提供測試版本給相關人員進行使用者測試。

---

## 階段五：部署 (Deployment)

1.  **部署到開發環境**:
    - [ ] 使用 `firebase deploy -P dev` 將所有服務部署到開發環境，進行最終確認。

2.  **部署到正式環境**:
    - [ ] 確認 `dev` 環境穩定後，使用 `firebase deploy -P prod` 將專案部署到正式環境。

3.  **版本控制**:
    - [ ] 使用 Git 進行版本控制，每次部署前都建立一個新的 tag。
