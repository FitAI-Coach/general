# General

[![Java](https://img.shields.io/badge/language-Java-brightgreen)](https://www.oracle.com/java/)

## 專案簡介tm-my-image-model.zip

本專案會根據「攝影機」和「手機感測器」所收集的數據，實時回饋學員的運動表現，並提供專業的健身建議。
- 攝影機：使用 Teachable Machine 進行動作捕捉與關卡切換
- 感測器：透過 Android 應用程式監控細節
- 系統運作情境：
- 首先，利用攝影機捕捉學員的主要動作，作為關卡切換的依據；接著，透過感測器進行細部動作的評分與判斷。

## 功能

- Web Camera: 負責捕捉受測者肢體動作，動作正確即可前往下一個關卡
- Android APP: 在 Camera 捕捉動作之後，針對關節或身體細節進行細部評分


## 系統架構 (AIoT)
<kbd>![image](https://github.com/user-attachments/assets/3ba0ad99-bea0-49e2-be56-f13eac5172da)</kbd>


## 安裝與使用

### 環境要求
- Java 版本：11+
- React latest
- Android 手機

## 貢獻指南

歡迎任何貢獻！如果你想參與，請遵循以下步驟：

1. Fork 此專案
2. 創建你的分支 (`git checkout -b feature/新的功能`)
3. 提交修改 (`git commit -m '增加了某個功能'`)
4. 推送到分支 (`git push origin feature/新的功能`)
5. 提交 Pull Request

## 授權

此專案依照 [MIT License](LICENSE) 授權。

## 聯繫方式

如果有任何問題或建議，歡迎通過以下方式聯繫我：

- Email: yillkid@example.com
- GitHub Issues: [點此提交](https://github.com/FitAI-Coach/genera/issues)

## 測試用資料

#### Label : pose-1
![1](https://github.com/user-attachments/assets/85eec8b1-e4bf-4cee-a577-ebb49682ea16)

#### Label : pose-2
![2](https://github.com/user-attachments/assets/2b76266d-fdd7-45a6-a446-4bc41b1a3ac5)
