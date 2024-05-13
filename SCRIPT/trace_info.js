$(document).ready(function() {
  // 監聽查詢按鈕點擊事件
  $('#returnButton').on('click', function() {
      // 導向指定頁面（假設是 /results.html）
      window.location.href = '/PAGES/search.html';
  });
});