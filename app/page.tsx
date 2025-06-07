import Link from 'next/link';

export default function Home() {
  return (
    <div className="animate__animated animate__fadeIn animate__faster pt-16 max-w-7xl mx-auto space-y-28 md:space-y-20 mb-16">
        <div className="px-4 text-center md:px-8 space-y-8">
            <h1 className="animate__animated animate__jackInTheBox text-5xl md:text-7xl font font-extrabold tracking-tight text-gray-900">พิชิต<span className="text-red-500">สามร้อย</span></h1>
            <p className="text-2xl md:text-3xl tracking-tight text-gray-500 space-y-6">
                เว็บไซต์ที่รวบรวมโจทย์ที่เป็นประโยชน์ในการสอบวิชา CS300
            </p>
            <div className="animate__animated animate__pulse animate__infinite">
                <Link href="/tasks" className="a-teal-700">เริ่มทำโจทย์</Link>
            </div>
        </div>
        <div className="grid-data-3-1">
            <div className="space-y-6">
                <span className="font-bold text-3xl">ระบบตรวจอัตโนมัติ</span>
                <p className="text-xl text-gray-500">สามารถรู้ผลลัพธ์ของคำตอบได้ทันที พร้อมแสดง Test Case ที่ใช้ในการทดสอบเพื่อสามารถตรวจสอบความถูกต้องได้</p>
            </div>
            <div className="space-y-6">
                <span className="font-bold text-3xl">มีโจทย์ทุกระดับ</span>
                <p className="text-xl text-gray-500">มีโจทย์ให้ฝึกทำตั้งแต่ง่ายไปจนถึงยากมาก และครอบคลุมทุกเรื่องที่จำเป็นต้องเรียนรู้ และเป็นประโยชน์ในการฝึกเขียนโปรแกรม</p>
            </div>
            <div className="space-y-6">
                <span className="font-bold text-3xl">ศึกษาโค้ดและวิธีคิดของคนอื่น</span>
                <p className="text-xl text-gray-500">เมื่อคุณผ่านโจทย์ข้อนั้นแล้ว สามารถดูโค้ดคนอื่นที่ผ่านโจทย์นั้นได้ด้วยเหมือนกัน ระบบรองรับแค่ภาษา C, C++, Java</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 px-6 md:px-8">
            <div className="space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">จะทำโจทย์ไหนดีนะ ?</h1>
                <p className="text-xl text-gray-500 indent-16">
                    คิดไม่ออกใช่ไหมว่าจะทำโจทย์ข้อไหน ลองกดสุ่มทำสักข้อสิ เราจะเลือกข้อที่เหมาะกับคุณให้เอง
                </p>
                <div className="text-center">
                    <a href="task.html" className="inline-block text-center bg-white border-2 border-teal-700 rounded-md py-3 px-8 font-medium text-teal-700 hover:bg-teal-700 hover:text-white">สุ่มทำสักข้อ</a>
                </div>
            </div>
            <div className="space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">อย่าพึ่งยอมแพ้</h1>
                <p className="text-xl text-gray-500 indent-16">
                    ลองอ่านบทความทำความเข้าใจเกี่ยวกับภาษาโปรแกรมดูไหม
                </p>
                <div className="text-center">
                    <a href="rank.html" className="a-teal-700">ดูบทความ</a>
                </div>
            </div>
        </div>
        {/* <div className="px-4 md:px-8 space-y-6">
            <h1 className="text-xl font font-extrabold tracking-tight text-gray-900 md:text-2xl">แจ้งปัญหาการใช้งาน</h1>
            <p className="mt-4 text-xl text-gray-700 indent-16">
                พบปัญหาการใช้งานใช่ไหม? 
            </p>
        </div> */}
    </div>)
}