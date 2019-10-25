document.addEventListener('DOMContentLoaded', () => {
    // トリガークラス'.js-accordion-trigger'を持つ要素を取得
    const accordionTrigger = document.querySelectorAll('.js-accordion-trigger');

    for (let i = 0; i < accordionTrigger.length; i++) {

        // '.is-opened'がついていて展開している要素に高さを付加
        if(accordionTrigger[i].classList.contains('is-opened')) {
            // scrollHeightプロパティはpaddingを含む表示されていない要素の高さを取得
            accordionTrigger[i].nextElementSibling.style.height = accordionTrigger[i].nextElementSibling.scrollHeight + 'px';
        }

        // トリガーを押した時のアクション
        accordionTrigger[i].addEventListener('click', (e) => {

            // クリックされた要素（トリガー要素）を取得
            let currentElement = e.currentTarget;

            // 同じ親要素を持つ隣接した次の要素'.js-accordion-target'（展開対象の要素）を取得
            let accordionTarget = currentElement.nextElementSibling;

            if (accordionTarget.style.height) {

                //トリガーの'is-opened'クラスを削除
                currentElement.classList.remove('is-opened');
                //
                accordionTarget.style.height = null;

            } else {
                //トリガーの'is-opened'クラスを追加
                currentElement.classList.add('is-opened');

                // scrollHeightプロパティはpaddingを含む表示されていない要素の高さを取得
                accordionTarget.style.height = accordionTarget.scrollHeight + 'px';
            }
        });
    }
});
