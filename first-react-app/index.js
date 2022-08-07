// ReactDOM.render(<ul><li>Item 1</li><li>Item 2</li></ul>, document.getElementById('root'));

function Page () {
    return (
        <div>
            <h1>Reason's why I love react</h1>
            <ol>
                <li>It is more popular than Angular</li>
                <li>It teaches so much about frontend</li>
                <li>It is pays well</li>
            </ol>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'))
