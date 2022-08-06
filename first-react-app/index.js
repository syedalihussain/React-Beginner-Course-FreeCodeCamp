// ReactDOM.render(<ul><li>Item 1</li><li>Item 2</li></ul>, document.getElementById('root'));

const h1 = document.createElement('h1');
h1.textContent = 'This is an imperative way of creating dom elements!';
h1.className = 'header';
document.getElementById('root').appendChild(h1);