// 多言語切り替え
function switchLang(lang) {
    document.body.className = 'lang-' + lang;
    localStorage.setItem('pref-lang', lang);
}

// 保存された言語を読み込み
const savedLang = localStorage.getItem('pref-lang') || 'ja';
switchLang(savedLang);

// ソース保護機能 (右クリック・F12・Ctrl+U禁止)
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || (e.ctrlKey && e.keyCode == 85)) {
        return false;
    }
};
console.log("%cSecurity: Enabled", "color: blue; font-weight: bold;");
