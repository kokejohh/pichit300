import Image from "next/image";

export default function Login() {
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-6 sm:px-8">
            <div className="max-w-sm w-full space-y-8 divide-y divide-slate-200">
                <div>
                    <div className="mx-auto h-24 w-24 relative">
                        <Image fill alt="Logo_TU" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Emblem_of_Thammasat_University.svg/1024px-Emblem_of_Thammasat_University.svg.png" />
                    </div>
                    <img className="mx-auto h-16 w-auto" src="../img/logo_CS.png" alt="Logo_TU" />
                    <h2 className="mt-4 text-center text-3xl font-extrabold text-teal-700">พิชิต<span className="text-red-500">สามร้อย</span></h2>
                </div>
                <form className="mt-8 space-y-8" action="#" method="post">
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm space-y-4">
                        <div id="alert_noti" className="flex items-center border border-red-700 bg-red-500 text-white text-sm rounded px-4 py-3 hidden" role="alert">
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                            <p></p>
                        </div>
                        <div className="">
                            <label htmlFor="username" className="sr-only">username</label>
                            <input id="username" name="username" type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-teal-700 focus:z-10 sm:text-sm" placeholder="เลขทะเบียนนักศึกษา" />
                        </div>
                        <div className="">
                            <label htmlFor="password" className="sr-only">password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-teal-700 focus:z-10 sm:text-sm" placeholder="รหัสผ่าน" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> จดจำฉัน </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-gray-600 hover:text-gray-500"> จำรหัสผ่านไม่ได้? </a>
                        </div>
                    </div>
                    <button type="button" id="btn_login" className="w-full btn-teal-700 btn-ring-teal-700">
                        เข้าสู่ระบบ
                    </button>
                </form>
            </div>
        </div>
    )
}