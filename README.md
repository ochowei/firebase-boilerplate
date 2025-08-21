# 🔥 Firebase Boilerplate 專案

這是一個用於快速啟動新專案的 Firebase boilerplate。它採用了模組化和可擴展的設計，並預先配置了常用的服務，如 Cloud Functions (使用 TypeScript)、Firestore 和 Hosting。

---

### ✨ 主要功能

* **後端邏輯**：使用 TypeScript 撰寫 Cloud Functions，確保程式碼品質和可維護性。
* **資料庫**：Firestore 資料庫配置，並包含可設定的讀寫安全規則。
* **靜態網站**：Firebase Hosting 用於託管前端應用程式。
* **環境分離**：支援開發 (dev) 和正式 (prod) 部署，確保不同環境的隔離。
* **程式碼組織**：清晰的目錄結構，將 Functions、Rules 和其他服務分開管理。
* **自動化腳本**：提供 npm 腳本，簡化開發、測試和部署流程。

---

### 🚀 快速開始

#### 1. 前置作業

請確保您的環境已安裝：
* **Node.js** (v14 或以上)
* **npm** (或 yarn)
* **Firebase CLI**：使用 `npm install -g firebase-tools` 安裝。

#### 2. 初始化專案

在專案根目錄執行以下指令：

```bash
# 登入 Firebase 帳號
firebase login

# 連結到您的 Firebase 專案，並設定環境別名
# (如果您已執行 firebase init，可跳過此步驟)
firebase use --add
