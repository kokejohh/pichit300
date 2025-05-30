export default function Navbar() {
    return (<nav className="flex items-center justify-between flex-wrap bg-teal-700 py-4 px-8 sm:px-16">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a href="index.html"><span className="font-semibold text-xl tracking-tight">พิชิต<span className="text-red-500">สามร้อย</span></span></a>
        </div>
        <div id="btn_menu" className="block sm:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
        </div>
        <div id="menu" className="w-full flex-grow hidden sm:flex sm:items-center sm:w-auto transition  duration-100">
            <div id="nav" className="text-sm sm:flex-grow ">
                <a href="index.html" className="block mt-4 sm:inline-block sm:mt-0 text-white hover:font-semibold rounded px-4 py-2">
                    หน้าหลัก
                </a>
                <a href="task.html" className="block mt-4 sm:inline-block sm:mt-0 text-white hover:font-semibold rounded px-4 py-2">
                    โจทย์
                </a>
                <a href="rank.html" className="block mt-4 sm:inline-block sm:mt-0 text-white hover:font-semibold rounded px-4 py-2">
                    อันดับ
                </a>
            </div>
            <div className="text-end">
                <a href="login.html" id="create" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-red-500 border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 sm:mt-0">สร้างโจทย์</a>
                <a href="login.html" id="login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-700 hover:bg-white mt-4 sm:mt-0">เข้าสู่ระบบ</a>
                <a href="login.html" id="logout" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-700 hover:bg-white mt-4 sm:mt-0">ออกจากระบบ</a>
            </div>

        </div>
    </nav>)
}