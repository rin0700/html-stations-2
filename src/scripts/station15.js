function displayList() {
  // fruits div内の全てのp要素を取得
  const fruitsDiv = document.getElementById('fruits');
  const fruitItems = fruitsDiv.getElementsByTagName('p');

  // 新しいul要素を作成
  const ul = document.createElement('ul');

  // 各p要素をli要素に変換してulに追加
  for (let i = 0; i < fruitItems.length; i++) {
      const li = document.createElement('li');
      li.textContent = fruitItems[i].textContent;
      ul.appendChild(li);
  }

  // fruits divの内容をul要素に置き換え
  fruitsDiv.innerHTML = '';
  fruitsDiv.appendChild(ul);
}