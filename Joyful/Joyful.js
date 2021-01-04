//ジョイフルマルヤマ

// クリックされた地域に応じてクッキー設定（name:area, value:各地域のアルファベット, expires:1固定）
vwo_$('.zenkoku').live('click touch touchstart', function(){
  setCookie1('area', 'zenkoku', 1);
});
vwo_$('.kita').live('click touch touchstart', function() {
  setCookie1('area', 'kita', 1);
});
vwo_$('.kanto').live('click touch touchstart', function() {
  setCookie1('area', 'kanto', 1);
});
vwo_$('.tokyo').live('click touch touchstart', function() {
  setCookie1('area', 'tokyo', 1);
});
vwo_$('.chubu').live('click touch touchstart', function() {
  setCookie1('area', 'chubu', 1);
});
vwo_$('.kinki').live('click touch touchstart', function() {
  setCookie1('area', 'kinki', 1);
});
vwo_$('.nishi').live('click touch touchstart', function() {
  setCookie1('area', 'nishi', 1);
});
vwo_$('.kyusyu').live('click touch touchstart', function() {
  setCookie1('area', 'kyusyu', 1);
});
//　一覧ページクラス付与
$('body > div:nth-child(13).event-guide').addClass('event_and_campaign');
$('body > div:nth-child(16).event-guide').addClass('done_event');
$('.event_and_campaign .mb_20:nth-child(n + 3):not(:nth-child(n + 6))').addClass('hide-img');
$('.hide-img').hide();
$('.done_event').hide();
$('.event_and_campaign').insertBefore('.f_copyright');
$('body > div.bg_event > div.inner > div:nth-child(5), body > div.bg_event > div.inner > div:nth-child(6), body > div.bg_event > div.inner > div:nth-child(7)').hide();
// areaクッキーの値取得
var area = getCookie1('area');
if(area === 'zenkoku') {
  var titleHtml = '<span class="add_text">' + '全国のイベント一覧' + '</span>';
  console.log(titleHtml);
    $('.event-info > .content2').append(titleHtml);
}
if(area === 'kita') {
  var titleHtml = '<span class="add_text">' + '北海道/東北/甲信越のイベント一覧' + '</span>';
    $('.event-info > .content2').append(titleHtml);
}
if(area === 'kanto') {
  var titleHtml = '<span class="add_text">' + '関東のイベント一覧' + '</span>';
    $('.event-info > .content2').append(titleHtml);
}
if(area === 'tokyo') {
  var titleHtml = '<span class="add_text">' + '東京のイベント一覧' + '</span>';
    $('.event-info > .content2').append(titleHtml);
}
if(area === 'chubu') {
  var titleHtml = '<span class="add_text">' + '中部のイベント一覧' + '</span>';
    $('.event-info > .content2').append(titleHtml);
}
if(area === 'kinki') {
  var titleHtml = '<span class="add_text">' + '近畿のイベント一覧' + '</span>';
    $('.event-info > .content2').append(titleHtml);
}
if(area === 'nishi') {
  var titleHtml = '<span class="add_text">' + '中国/四国のイベント一覧' + '</span>';
    $('.event-info > .content2').append(titleHtml);
}
if(area === 'kyusyu') {
  var titleHtml = '<span class="add_text">' + '九州/沖縄のイベント一覧' + '</span>';
    $('.event-info > .content2').append(titleHtml);
}
// 地域に応じた画像のみを表示
if(document.URL.indexOf('https://furisode.joyful-eli.com/event/') > -1) {
  $('.box-receipt .event_list li img').each(function() {
    var areas = $(this).attr('src').split('_')[2].split('.')[0];
    $(this).parent().parent().addClass(areas);
    if(area !== 'zenkoku'){
      if(area !== areas){
        $('.' + areas).hide();
      } 
    }
  });  
}