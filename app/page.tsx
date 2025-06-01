
export default function Home() {
  return (<div className="animate__animated animate__fadeIn animate__faster pt-16 sm:pt-24 max-w-7xl mx-auto space-y-28 sm:space-y-36 mb-16">
        <div className="px-4 text-center sm:px-8 space-y-8">
            <h1 className="animate__animated animate__jackInTheBox text-5xl sm:text-7xl font font-extrabold tracking-tight text-gray-900">พิชิต<span className="text-red-500">สามร้อย</span></h1>
            <p className="text-2xl sm:text-3xl tracking-tight text-gray-500 space-y-6">
                เว็บไซต์ที่รวบรวมโจทย์ที่เป็นประโยชน์ในการสอบวิชา CS300
            </p>
            <div className="animate__animated animate__pulse animate__infinite">
                <a href="task.html" className="a-teal-700">เริ่มทำโจทย์</a>
            </div>
        </div>
        <div className="grid-data-3-1">
            <div className="space-y-6">
                <span className="font-bold text-3xl">ระบบตรวจอัตโนมัติ</span>
                <p className="text-xl text-gray-500">สามารถรู้ผลลัพธ์ของคำตอบได้ทันที พร้อมแสดง Test Case ที่ใช้ในการทดสอบเพื่อสามารถตรวจสอบความถูกต้องได้</p>
            </div>
            {/* <div className="space-y-6">
                <span className="font-bold text-3xl">สร้างโจทย์ของตัวเอง</span>
                <p className="text-xl text-gray-500">สามารถสร้างโจทย์ของคุณเองและให้คนอื่นมาร่วมสนุกและท้าทายกับโจทย์นั้น ๆ ได้</p>
            </div>
            <div className="space-y-6">
                <span className="font-bold text-3xl">แบ่งปันวิธีและเทคนิคต่าง ๆ </span>
                <p className="text-xl text-gray-500">สามารถแสดงความคิดเห็นในโจทย์เพื่อแบ่งปันวิธี และเทคนิคต่าง ๆ หรือสอบถามคำใบ้ในการทำโจทย์ข้อนั้น</p>
            </div> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 px-6 sm:px-8">
            <div className="space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">อย่าพึ่งยอมแพ้</h1>
                <p className="text-xl text-gray-500 indent-16">
                    ทุกข้อมีคะแนนที่แตกต่างกัน ถ้าทำได้ 80% จะผ่านโจทย์ข้อนั้น แล้วจะสามารถดูโค้ดของคนอื่นได้ว่าพวกเขานั้นเขียนโค้ดอย่างไร
                </p>
                <div className="text-center">
                    <a href="task.html" className="inline-block text-center bg-white border-2 border-teal-700 rounded-md py-3 px-8 font-medium text-teal-700 hover:bg-teal-700 hover:text-white">สุ่มทำสักข้อ</a>
                </div>
            </div>
            {/* <div className="space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">ดูอันดับของคุณ</h1>
                <p className="text-xl text-gray-500 indent-16">
                    คุณจะได้คะแนนจากการทำโจทย์ซึ่งแต่ละข้อสูงสุดที่ 100 คะแนน และคุณยังสามารถได้คะแนนจากการโดนกดถูกใจ ถูกใจละ 20 คะแนน
                </p>
                <div className="text-center">
                    <a href="rank.html" className="a-teal-700">ดูอันดับ</a>
                </div>
            </div> */}
        </div>
        <div className="px-4 sm:px-8 space-y-6">
            <h1 className="text-xl font font-extrabold tracking-tight text-gray-900 sm:text-2xl">แจ้งปัญหาการใช้งาน</h1>
            <p className="mt-4 text-xl text-gray-700 indent-16">
                พบปัญหาการใช้งานใช่ไหม? 
            </p>
        </div>
    </div>)
}