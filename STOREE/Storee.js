// ストーリーセゾン　出しわけ

// モーダルエリアがクリックされた時、ローカルストレージ(modal_clicked)にクリック＝Trueを格納し、以降モーダルを出力しなくする。
var script1 = document.createElement('script');
script1.innerHTML = 'function img_clicked(){localStorage.setItem("modal_clicked", "true")}';
document.body.appendChild(script1);

// モーダルエリアのバッテンマークがクリックされた回数をカウントし、４回以上の場合、以降モーダルを出力しなくする。
var script2 = document.createElement('script');
script2.innerHTML = 'function closeModal_clicked(){var close_clicked_num =　 Number(localStorage.getItem("closeModal_clicked")); localStorage.setItem("closeModal_clicked", close_clicked_num + 1); document.getElementById("modalArea").style.display = "none";}';
document.body.appendChild(script2);

// 変数定義
var body = document.body;
var timeLimit = 60 * 60 * 24; // 24時間

// ModalのDOMを定義
var modal_DOM = '<section id="modalArea" class="modalArea"> <div id="modalBg" class="modalBg" onclick="closeModal_clicked()"></div><div class="modalWrapper"> <div class="modalContents"> <img src="https://storee.saisoncard.co.jp/img/usr/lp_pointexchange/id21_pc_modal_banner.png" usemap="#image_map"><map name="image_map"> <area alt="対象アイテム" onclick="img_clicked()" title="対象アイテム" href="https://storee.saisoncard.co.jp/shop/pages/cp-2020pl.aspx" coords="74,348,469,430" shape="rect"></map> <div id="closeModal" class="closeModal" onclick="closeModal_clicked()"> <span>×</span> </div></div></div></section>';


// 次の場合にモーダルを必ず出力
// 1)初回ログイン　かつ　2)モーダルがクリックされたことがない　かつ　3)モーダルクローズボタンが４回以上押された場合
if (!localStorage.getItem('last_login') && !localStorage.getItem('modal_clicked') && Number(localStorage.getItem("closeModal_clicked")) < 3) {
  localStorage['last_login'] = JSON.stringify({
    timestamp: new Date().getTime()
  });
  console.log('Set localStorage item for last_login for the first time.');
  body.insertAdjacentHTML('beforeend', modal_DOM);
  
    // mapのエリアを更新する
  function updateImageMap() {
    var myImg = document.querySelector("#modalArea > div.modalWrapper > div > img");
    var imageMap = document.querySelector(".modalContents area");
    var currWidth = myImg.clientWidth;
    var currHeight = myImg.clientHeight;
    var imageMapCoords = [];
    imageMapCoords[0] = currWidth * 0.14;
    imageMapCoords[2] = currWidth * 0.86;
    imageMapCoords[1] = currHeight * 0.76;
    imageMapCoords[3] = currHeight * 0.94;

    imageMap.setAttribute("coords", imageMapCoords.join(','));
  }
  
  // 画像が読み込まれたらエリアのmapのエリアを更新する
  document.querySelector('#modalArea > div.modalWrapper > div > img').addEventListener('load', updateImageMap);

  window.onresize = updateImageMap;
}

// ログイン後24時間以上経過していた場合は、モーダルを出力する。但し、上記２）、３）に該当しない場合のみ
var _jsonStoreObj = JSON.parse(localStorage.getItem('last_login'));
if (_jsonStoreObj != undefined && _jsonStoreObj.timestamp) {
  var oBjTime = _jsonStoreObj.timestamp;
  var nowTime = new Date().getTime();
  var diffTime = (nowTime - oBjTime) / 1000;
  console.log('TimeStamp for localStorage last_login :' + oBjTime);
  console.log('TimeStamp for client browser :' + nowTime);
  console.log('The time elapsed :' + diffTime);
  console.log('The time limit for purge localStorage last_login :' + timeLimit);

  if (diffTime > timeLimit && !localStorage.getItem('modal_clicked') && Number(localStorage.getItem("closeModal_clicked")) < 3) {
    localStorage.removeItem('last_login');
    console.log('localStorage Item last_login removed.');
    localStorage['last_login'] = JSON.stringify({
      timestamp: new Date().getTime()
    });
    body.insertAdjacentHTML('beforeend', modal_DOM);
  }
}

// モーダル閉じるボタン回数判断用ローカルストレージの定義
if (!localStorage.getItem('closeModal_clicked')) {
  localStorage.setItem("closeModal_clicked", 0);
}