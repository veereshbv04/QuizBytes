export default function Header(){
    return (
        <nav>
            <h1>Quiz bytes</h1>
            <img src={process.env.PUBLIC_URL + "theme.jpg"} alt="theme mode"/>
        </nav>
    )
}