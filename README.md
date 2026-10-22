# 拾數 · 數字卦手記

手機與電腦適用的靜態網頁，無須安裝套件。直接開啟 index.html 即可使用，也能放在 GitHub Pages。

## 起卦規則

輸入三個完整三位數（可含前導零）。第一組除以 8 取餘數為上卦，第二組除以 8 取餘數為下卦，餘零為坤（8）；第三組除以 6 取餘數為動爻，餘零為第六爻。動爻由下往上數，翻轉該爻陰陽得到變卦。

1 乾、2 兌、3 離、4 震、5 巽、6 坎、7 艮、8 坤。

範例：178 589 006 → 澤風大過（28），上六動 → 天風姤（44）。

卦義關鍵字為簡短現代語摘要，並未包含完整爻辭或針對問題的 AI 解讀。

## 發布到 GitHub Pages

1. 登入 GitHub 帳號 wf880180，建立名為 number-oracle 的新儲存庫。若要免費公開託管，可建立 Public 儲存庫。
2. 在儲存庫選擇 Add file → Upload files，把本資料夾內的 index.html、style.css、core.js、app.js、.nojekyll、README.md、test.cjs 上傳到儲存庫根目錄，按 Commit changes。不要只上傳外層資料夾。
3. 開啟 Settings → Pages。在 Build and deployment 選 Deploy from a branch；選 main 分支、/(root)，按 Save。
4. 等 GitHub 顯示網站發布成功後，使用 https://wf880180.github.io/number-oracle/ 。這個網址只有在你完成建立與發布後才會生效。

網頁計算使用 JavaScript，讓 GitHub Pages 可以直接託管，不需要 Python 伺服器。

## 紀錄與隱私

紀錄存在目前網站的瀏覽器 localStorage；沒有帳號同步、沒有上傳到 GitHub。不同裝置、不同瀏覽器及本機檔案與線上版本的紀錄互不相通。清除網站資料會刪除紀錄；請定期匯出 CSV 備份。CSV 供外部保存或 Notion 匯入，目前未提供還原匯入功能。

## 驗證

已安裝 Node.js 時可執行 `node test.cjs`，涵蓋64卦的384種動爻變換及輸入規則。
