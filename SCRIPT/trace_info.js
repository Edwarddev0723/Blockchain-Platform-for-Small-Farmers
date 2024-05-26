$(document).ready(function() {
  // 監聽查詢按鈕點擊事件
  $('#returnButton').on('click', function() {
      // 導向指定頁面（假設是 /results.html）
      window.location.href = '/PAGES/search.html';
  });
});

$(document).ready(function() {
  // 平滑滾動效果
  $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
          if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
              location.hostname == this.hostname
          ) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  event.preventDefault();
                  $('html, body').animate({
                      scrollTop: target.offset().top
                  }, 1000, function() {
                      var $target = $(target);
                      $target.focus();
                      if ($target.is(":focus")) {
                          return false;
                      } else {
                          $target.attr('tabindex', '-1');
                          $target.focus();
                      }
                  });
              }
          }
      });
});