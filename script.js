/*
Author: Nody Peng
Email: ablecck12@gmail.com
License: This code is free to use without authorization. Attribution would be appreciated.
*/

// 固定的商品條碼清單
const allowedBarcodes = [
  "A001", "A002", "A003", "A004", "A005", "A006", "A007", "A008", "A009", "A010",
  "A101", "A102", "A103", "A104", "A105", "A106", "A107", "A108", "A109", "A110",
  "B001", "B002", "B003", "B004", "B101", "B102", "B103", "B104", "B201", "B202", 
  "B203", "B204", "B301", "B302", "B303", "B304", "B305", "B306", "B401", "B402", 
  "B403", "B404", "B405", "B406", "B407", "C001", "C002", "C003", "C004", "C005", 
  "C006", "C007", "C008", "C009", "C010", "C101", "C102", "C103", "C104", "C105", 
  "C106", "C107", "C108", "C109", "C110", "C201", "C202", "C203", "C204", "C205", 
  "C301", "C302", "C303", "C304", "C305", "C401", "C402", "C403", "C404", "C405", 
  "D001", "D002", "D101", "D102", "D201", "D301", "D401", "D501", "E001", "E002", 
  "E003", "E004", "E005", "E006", "E007", "E008", "E009", "E010", "F001", "F002", 
  "F003", "F004", "F005", "F006", "F007", "F008", "F009", "F010", "F011", "F012", 
  "F013", "F014", "F015", "F016", "F017", "F018", "F019", "F020", "F021", "F022", 
  "F023", "F024", "F025", "F026", "F027", "F028", "F029", "F030", "G001", "G002", 
  "G003", "G004", "G005", "G006", "H001", "H002", "H003", "H004", "H005"
];





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
    barcodes.push(barcodeDivs[i].textContent); // 收集所有條碼
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



// 維持其他代碼不變
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
  // 確保這裡收集數據的代碼是正確的，特別是你之前新增的條碼輸入部分
  var barcodeDivs = document.getElementById("returnBarcodeList").children;
  var barcodes = [];
  for (var i = 0; i < barcodeDivs.length; i++) {
    barcodes.push(barcodeDivs[i].textContent);
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
	alert(text)
	location.reload(); // 提交完成後重新整理頁面
	}) // 確保這個響應是可以看見的
    .catch((error) => console.error("Error:", error));
};

function addBarcode(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // 防止表單提交
    var input = document.getElementById("barcode");
    var list = document.getElementById("barcodeList");
    var barcode = input.value.trim(); // 去除可能的前後空白

    // 檢查條碼是否在允許的清單中
    if (!allowedBarcodes.includes(barcode)) {
      //alert("此條碼無效，請輸入有效的商品條碼！");
	  alert("你是白癡嗎?");
      input.value = ""; // 清空輸入框
      return; // 中斷函數執行
    }

    // 檢查條碼是否已經在列表中
    var existingBarcodes = Array.from(list.children).map(function (div) {
      return div.textContent; // 忽略圖標按鈕的文本
    });
    if (existingBarcodes.includes(barcode)) {
      alert("此條碼已經輸入，請不要重複輸入！");
      input.value = ""; // 清空輸入框以便再次輸入
      return; // 中斷函數執行
    }

    if (barcode !== "") {
      var newBarcodeDiv = document.createElement("div");
      newBarcodeDiv.textContent = barcode;

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
    if (!allowedBarcodes.includes(barcode)) {
      alert("此條碼無效，請輸入有效的商品條碼！");
      input.value = ""; // 清空輸入框
      return; // 中斷函數執行
    }

    // 檢查條碼是否已經在列表中
    var existingBarcodes = Array.from(list.children).map(function (div) {
      return div.textContent.replace(" X", ""); // 忽略 "X" 按鈕的文本
    });
    if (existingBarcodes.includes(barcode)) {
      alert("此條碼已經輸入，請不要重複輸入！");
      input.value = ""; // 清空輸入框以便再次輸入
      return; // 中斷函數執行
    }

    if (barcode !== "") {
      var newBarcodeDiv = document.createElement("div");
      newBarcodeDiv.textContent = barcode;

      // 創建一個垃圾桶圖示按鈕
      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // 使用 Font Awesome 垃圾桶圖示
      deleteButton.style.marginLeft = "10px"; // 添加一點間距
      deleteButton.style.cursor = "pointer"; // 添加指針樣式
      deleteButton.onclick = function () {
        list.removeChild(newBarcodeDiv); // 移除該條碼
      };

      newBarcodeDiv.appendChild(deleteButton); // 添加 "X" 按鈕到條碼 Div
      list.appendChild(newBarcodeDiv); // 添加條碼到列表
    }
    input.value = ""; // 清空輸入框以便輸入下一個條碼
  }
}


