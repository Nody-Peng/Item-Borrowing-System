/*
Author: Nody Peng
Email: ablecck12@gmail.com
License: This code is free to use without authorization. Attribution would be appreciated.
*/

// 固定的商品條碼清單，改為字典形式
const allowedBarcodesDict = {
  "A001": "筆電-01",
  "A002": "筆電-02",
  "A003": "筆電-03",
  "A004": "筆電-04",
  "A005": "筆電-05",
  "A006": "筆電-06",
  "A007": "筆電-07",
  "A008": "筆電-08",
  "A009": "筆電-09",
  "A010": "筆電-10",
  "A101": "電競筆電-01",
  "A102": "電競筆電-02",
  "A103": "電競筆電-03",
  "A104": "電競筆電-04",
  "A105": "電競筆電-05",
  "A106": "電競筆電-06",
  "A107": "電競筆電-07",
  "A108": "電競筆電-08",
  "A109": "電競筆電-09",
  "A110": "電競筆電-10",
  "B001": "製圖二麥克風01",
  "B002": "製圖二麥克風02",
  "B003": "製圖一麥克風01",
  "B004": "製圖一麥克風02",
  "B101": "617遙控器",
  "B102": "622遙控器",
  "B103": "製圖二遙控器",
  "B104": "製圖一遙控器",
  "B201": "簡報筆 - 01",
  "B202": "簡報筆 - 02",
  "B203": "簡報筆 - 03",
  "B204": "簡報筆 - 04",
  "B301": "錄音筆 - 01",
  "B302": "錄音筆 - 02",
  "B303": "錄音筆 - 03",
  "B304": "錄音筆 - 04",
  "B305": "錄音筆 - 05",
  "B306": "錄音筆 - 06",
  "B401": "鈴鐺 - 01",
  "B402": "鈴鐺 - 02",
  "B403": "鈴鐺 - 03",
  "B404": "鈴鐺 - 04",
  "B405": "鈴鐺 - 05",
  "B406": "鈴鐺 - 06",
  "B407": "鈴鐺 - 07",
  "C001": "HDMI - 長1",
  "C002": "HDMI - 長2",
  "C003": "HDMI - 長3",
  "C004": "HDMI - 長4",
  "C005": "HDMI - 長5",
  "C006": "HDMI - 短1",
  "C007": "HDMI - 短2",
  "C008": "HDMI - 短3",
  "C009": "HDMI - 短4",
  "C010": "HDMI - 短5",
  "C101": "VGA - 長1",
  "C102": "VGA - 長2",
  "C103": "VGA - 長3",
  "C104": "VGA - 長4",
  "C105": "VGA - 長5",
  "C106": "VGA - 短1",
  "C107": "VGA - 短2",
  "C108": "VGA - 短3",
  "C109": "VGA - 短4",
  "C110": "VGA - 短5",
  "C201": "typeC擴充埠 - 01",
  "C202": "typeC擴充埠 - 02",
  "C203": "typeC擴充埠 - 03",
  "C204": "typeC擴充埠 - 04",
  "C205": "typeC擴充埠 - 05",
  "C301": "typeC轉HDMI - 01",
  "C302": "typeC轉HDMI - 02",
  "C303": "typeC轉HDMI - 03",
  "C304": "typeC轉HDMI - 04",
  "C305": "typeC轉HDMI - 05",
  "C401": "VGA轉HDMI - 01",
  "C402": "VGA轉HDMI - 02",
  "C403": "VGA轉HDMI - 03",
  "C404": "VGA轉HDMI - 04",
  "C405": "VGA轉HDMI - 05",
  "D001": "大黑 - 01",
  "D002": "大黑 - 02",
  "D101": "推車 - 小",
  "D102": "推車 - 大",
  "D201": "護貝機",
  "D301": "投影機 - 1",
  "D401": "視訊會議鏡頭 - 1",
  "D501": "裁紙機",
  "E001": "延長線 - 01",
  "E002": "延長線 - 02",
  "E003": "延長線 - 03",
  "E004": "延長線 - 04",
  "E005": "延長線 - 05",
  "E006": "延長線 - 06",
  "E007": "延長線 - 07",
  "E008": "延長線 - 08",
  "E009": "延長線 - 09",
  "E010": "延長線 - 10",
  "F001": "iPad - 01",
  "F002": "iPad - 02",
  "F003": "iPad - 03",
  "F004": "iPad - 04",
  "F005": "iPad - 05",
  "F006": "iPad - 06",
  "F007": "iPad - 07",
  "F008": "iPad - 08",
  "F009": "iPad - 09",
  "F010": "iPad - 10",
  "F011": "iPad - 11",
  "F012": "iPad - 12",
  "F013": "iPad - 13",
  "F014": "iPad - 14",
  "F015": "iPad - 15",
  "F016": "iPad - 16",
  "F017": "iPad - 17",
  "F018": "iPad - 18",
  "F019": "iPad - 19",
  "F020": "iPad - 20",
  "F021": "iPad - 21",
  "F022": "iPad - 22",
  "F023": "iPad - 23",
  "F024": "iPad - 24",
  "F025": "iPad - 25",
  "F026": "iPad - 26",
  "F027": "iPad - 27",
  "F028": "iPad - 28",
  "F029": "iPad - 29",
  "F030": "iPad - 30",
  "G001": "601鑰匙",
  "G002": "GIS門禁卡",
  "G003": "622會議室門禁卡",
  "G004": "製圖二門禁卡",
  "G005": "617研討室門禁卡",
  "G006": "製圖一門禁卡",
  "H001": "其他 - 01",
  "H002": "其他 - 02",
  "H003": "其他 - 03",
  "H004": "其他 - 04",
  "H005": "其他 - 05"
};

document.getElementById("loanForm").onsubmit = function (event) {
  event.preventDefault(); // 防止表單的默認提交行為

  // 檢查條碼輸入框是否為空
  var barcodeInput = document.getElementById("barcode");
  if (barcodeInput.value.trim() !== "") {
    alert("請按下 Enter 鍵來添加條碼！");
    return; // 若條碼輸入框不為空，阻止提交表單
  }

  // 檢查借用物品條碼列表是否為空
  var barcodeDivs = document.getElementById("barcodeList").children;
  if (barcodeDivs.length === 0) {
    alert("借用物品條碼不可為空白！");
    return; // 若條碼列表為空，阻止提交表單
  }

  // 創建一個新的 FormData 對象
  var formData = new FormData(document.getElementById("loanForm"));
  var barcodes = [];
  for (var i = 0; i < barcodeDivs.length; i++) {
    barcodes.push(barcodeDivs[i].dataset.barcode); // 收集所有條碼
  }
  formData.append("barcodes", JSON.stringify(barcodes)); // 將條碼數組添加到表單數據中

  // 發送數據
  fetch(
    "https://script.google.com/macros/s/AKfycbyJ4TPeoq2tzLiX12rO1VHfyy_zFlT_ZHHhbPvoUAElFiOB4WWYraLlbPdygWASN9E3/exec",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => response.text())
    .then((text) => {
      alert(text);
      location.reload(); // 提交完成後重新整理頁面
    })
    .catch((error) => console.error("Error:", error));
};

window.onload = function () {
  // 設定出借時間
  var loanTimeInput = document.getElementById("loanTime");
  var returnTimeInput = document.getElementById("returnTime"); // 獲取歸還時間的input元素
  var now = new Date();
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var day = ("0" + now.getDate()).slice(-2);
  var hours = ("0" + now.getHours()).slice(-2);
  var minutes = ("0" + now.getMinutes()).slice(-2);
  var formattedDateTime =
    now.getFullYear() + "-" + month + "-" + day + "T" + hours + ":" + minutes;

  loanTimeInput.value = formattedDateTime;
  returnTimeInput.value = formattedDateTime; // 設定歸還時間為當前時間
};

document.getElementById("returnForm").onsubmit = function (event) {
  event.preventDefault(); // 正確阻止默認行為

  // 檢查歸還物品條碼輸入框是否為空
  var returnBarcodeInput = document.getElementById("returnBarcode");
  if (returnBarcodeInput.value.trim() !== "") {
    alert("請按下 Enter 鍵來添加條碼！");
    return; // 若條碼輸入框不為空，阻止提交表單
  }

  // 檢查歸還物品條碼列表是否為空
  var barcodeDivs = document.getElementById("returnBarcodeList").children;
  if (barcodeDivs.length === 0) {
    alert("歸還物品條碼不可為空白！");
    return; // 若條碼列表為空，阻止提交表單
  }

  var formData = new FormData(document.getElementById("returnForm"));
  var barcodes = [];
  for (var i = 0; i < barcodeDivs.length; i++) {
    barcodes.push(barcodeDivs[i].dataset.barcode);
  }
  formData.append("returnBarcodes", JSON.stringify(barcodes));

  fetch(
    "https://script.google.com/macros/s/AKfycbyJ4TPeoq2tzLiX12rO1VHfyy_zFlT_ZHHhbPvoUAElFiOB4WWYraLlbPdygWASN9E3/exec",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => response.text())
    .then((text) => {
      alert(text);
      location.reload(); // 提交完成後重新整理頁面
    })
    .catch((error) => console.error("Error:", error));
};

function addBarcode(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // 防止表單提交
    var input = document.getElementById("barcode");
    var list = document.getElementById("barcodeList");
    var barcode = input.value.trim(); // 去除可能的前後空白

    // 檢查條碼是否在允許的清單中
    if (!(barcode in allowedBarcodesDict)) {
      alert("此條碼無效，請輸入有效的商品條碼！");
      input.value = ""; // 清空輸入框
      return; // 中斷函數執行
    }

    // 檢查條碼是否已經在列表中
    var existingBarcodes = Array.from(list.children).map(function (div) {
      return div.dataset.barcode; // 從數據屬性中獲取條碼
    });
    if (existingBarcodes.includes(barcode)) {
      alert("此條碼已經輸入，請不要重複輸入！");
      input.value = ""; // 清空輸入框以便再次輸入
      return; // 中斷函數執行
    }

    if (barcode !== "") {
      var description = allowedBarcodesDict[barcode];

      var newBarcodeDiv = document.createElement("div");
      newBarcodeDiv.textContent = barcode + " - " + description;
      newBarcodeDiv.dataset.barcode = barcode; // 將條碼存儲在數據屬性中

      // 創建一個垃圾桶圖示按鈕
      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // 使用 Font Awesome 垃圾桶圖示
      deleteButton.style.marginLeft = "10px"; // 添加一點間距
      deleteButton.style.cursor = "pointer"; // 添加指針樣式
      deleteButton.onclick = function () {
        list.removeChild(newBarcodeDiv); // 移除該條碼
      };

      newBarcodeDiv.appendChild(deleteButton); // 添加垃圾桶圖示按鈕到條碼 Div
      list.appendChild(newBarcodeDiv); // 添加條碼到列表
    }
    input.value = ""; // 清空輸入框以便輸入下一個條碼
  }
}

function addReturnBarcode(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // 防止表單提交
    var input = document.getElementById("returnBarcode");
    var list = document.getElementById("returnBarcodeList");
    var barcode = input.value.trim(); // 去除可能的前後空白

    // 檢查條碼是否在允許的清單中
    if (!(barcode in allowedBarcodesDict)) {
      alert("此條碼無效，請輸入有效的商品條碼！");
      input.value = ""; // 清空輸入框
      return; // 中斷函數執行
    }

    // 檢查條碼是否已經在列表中
    var existingBarcodes = Array.from(list.children).map(function (div) {
      return div.dataset.barcode; // 從數據屬性中獲取條碼
    });
    if (existingBarcodes.includes(barcode)) {
      alert("此條碼已經輸入，請不要重複輸入！");
      input.value = ""; // 清空輸入框以便再次輸入
      return; // 中斷函數執行
    }

    if (barcode !== "") {
      var description = allowedBarcodesDict[barcode];

      var newBarcodeDiv = document.createElement("div");
      newBarcodeDiv.textContent = barcode + " - " + description;
      newBarcodeDiv.dataset.barcode = barcode; // 將條碼存儲在數據屬性中

      // 創建一個垃圾桶圖示按鈕
      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // 使用 Font Awesome 垃圾桶圖示
      deleteButton.style.marginLeft = "10px"; // 添加一點間距
      deleteButton.style.cursor = "pointer"; // 添加指針樣式
      deleteButton.onclick = function () {
        list.removeChild(newBarcodeDiv); // 移除該條碼
      };

      newBarcodeDiv.appendChild(deleteButton); // 添加垃圾桶圖示按鈕到條碼 Div
      list.appendChild(newBarcodeDiv); // 添加條碼到列表
    }
    input.value = ""; // 清空輸入框以便輸入下一個條碼
  }
}



