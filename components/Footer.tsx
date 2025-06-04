export default function Footer() {
    return (
        <footer className="bg-gray-200 text-center">
            <div className="text-gray-500 p-4">
                © {new Date().getFullYear()} Copyright:
                <a className="text-gray-600" href="https://github.com/kokejohh/"> Pitchakorn Thiprangsi</a>
            </div>
        </footer>
    )
}