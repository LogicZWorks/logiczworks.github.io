document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. 起動アニメーション (System Boot) ---
    console.log('System Boot: Sequence Complete.');

    // --- 2. ハンバーガーメニューの開閉制御 ---
    const menuBtn = document.querySelector('.menu-btn'); 
    const menuText = document.querySelector('.menu-text'); // 文字部分を取得
    const body = document.body; 

    if (!menuBtn) return;

    menuBtn.addEventListener('click', () => {
        // クラスの付け外し (開閉状態の切り替え)
        body.classList.toggle('menu-open');

        // ★追加: 文字の切り替え (SYS.MENU <-> CLOSE)
        if (body.classList.contains('menu-open')) {
            menuText.textContent = 'CLOSE';  // 開いたら CLOSE に
        } else {
            menuText.textContent = 'MENU'; // 閉じたら元通り
        }
    });

    // --- 3. メニュー内のリンクを押したら閉じる ---
    const menuLinks = document.querySelectorAll('.menu-item a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('menu-open');
            menuText.textContent = 'MENU'; // 文字も戻す
        });
    });

});