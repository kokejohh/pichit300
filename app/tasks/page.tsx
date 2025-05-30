export default function Tasks() {
    return (
         <div className="pt-16 sm:pt-24 max-w-7xl mx-auto space-y-10 sm:space-y-16 mb-16">
        <div className="px-4 sm:px-8 space-y-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">ทำโจทย์ข้อไหนดีนะ</h1>
            <div className="flex justify-center">
                <div className="mb-3 w-full">
                  <input
                    type="search"
                    className="
                      w-full
                      sm:w-1/2
                      px-4
                      py-1.5
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded-md
                      m-0
                      mb-3
                      focus:text-gray-700 focus:bg-white focus:border-teal-700 focus:outline-none
                    "
                    id="search"
                    placeholder="ค้นหาโจทย์"
                  />  
                    <div className="block sm:flex sm:justify-between w-1/2 mx-3 space-y-4 sm:space-y-0">
                        <div className="block sm:inline-block">
                            <label>ระดับ: </label>
                            <select id="level" name="level" className="px-3 py-1.5">
                                <option value="ทั้งหมด">ทั้งหมด</option>
                                <option value="ง่าย">ง่าย</option>
                                <option value="ปานกลาง">ปานกลาง</option>
                                <option value="ยาก">ยาก</option>
                                <option value="ยากที่สุด">ยากที่สุด</option>
                            </select>
                        </div>
                        <div className="block sm:inline-block">
                            <label>ประเภท: </label>
                            <select id="from" name="from" className="px-3 py-1.5">
                                <option>โจทย์ทั้งหมด</option>
                                <option>โจทย์จากระบบ</option>
                                <option>โจทย์จากผู้ใช้</option>
                            </select>
                        </div>
                        <div className="block sm:inline-block">
                            <label>สถานะ:</label>
                            <select id="status" name="status" className="px-3 py-1.5">
                                <option>ทั้งหมด</option>
                                <option>ยังไม่ได้ทำ</option>
                                <option>ยังไม่ผ่าน</option>
                                <option>ผ่านแล้ว</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="containerTask" className="px-4 w-full sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        </div>
        
        <div className="px-4 sm:px-8 space-y-6">
            <h1 className="text-xl font font-extrabold tracking-tight text-gray-900 sm:text-2xl">แจ้งปัญหาการใช้งาน</h1>
            <p className="mt-4 text-xl text-gray-700 indent-16">
                พบปัญหาการใช้งานใช่ไหม? 
            </p>
        </div>
    </div>
    );
}