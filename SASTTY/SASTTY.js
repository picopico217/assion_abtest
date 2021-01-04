// SASTTY

// ボタン要素の追加
var add_btn = '<div class="add_btn_area" style="padding: 20px 0; background: #E4F2EF; margin-top: 5vw; width: 100vw; position:relative; left: 50%; transform: translateX(-50%); text-align: center;"><a href="#next_link"<div class="block-order-method--next"><div id="choice_payment" style="max-width: 70%;" class="block-btn-primary block-order-method--next-btn" >お支払い方法を選ぶ</div></div></a></div>';
var payment_info = document.querySelector ('.block-order-method--payment');
payment_info.insertAdjacentHTML('beforebegin', add_btn);
var add_btn_id = document.getElementById('choice_payment');

payment_info.id = 'next_link';
payment_info.style.display ="none";

// 特定の要素を取得し非表示にする
var comment_area = document.querySelector('.block-order-method--demand');
var estimate_area = document.querySelector('.block-order-estimate--procedure');
comment_area.style.display ="none";
estimate_area.style.display ="none";

// ボタンが押された時に要素を表示する
add_btn_id.addEventListener("click", event => {
    payment_info.style.display ="block";
    comment_area.style.display ="block";
    estimate_area.style.display ="block";
});