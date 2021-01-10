import Fetch from 'isomorphic-unfetch';

function Hoge({ stars }) {
    const foo = 'bar'
    const arr = ['first', 'second', 'third']
    const numberList = []

    for (let a of arr) {
        numberList.push(<li key={a}>{a}</li>)
    }
    return (
        <div>
            <h2>Hello Hoge</h2>
            <p>foo: {foo}</p>
            <div>
                <p>配列をループで表示させてるよ</p>
                <ul>
                    {numberList}
                </ul>
            </div>
            <p>APIから取得したデータ: {stars}</p>
        </div>
    )
}

Hoge.getInitialProps = async ({ req }) => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

export default Hoge