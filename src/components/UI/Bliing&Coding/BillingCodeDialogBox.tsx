import Image from "next/image";
import CodeReview from "./CodeReview";
import CMS100Data from "./CMS100Data";

export default function BillingCodeDialogBox() {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-50 flex justify-end"
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white w-1/2 h-full flex flex-col relative">
      
        <div className="flex-1 overflow-y-auto p-4">
          <h1 className="text-2xl font-semibold">Code Review</h1>
          <br />
          <div className="bg-slate-100 flex items-center justify-between p-4 rounded-md mr-4">
            <div>
              <p className="text-[#7C7C7C]">Patient</p>
              <p className="text-[2xl]">John Smith</p>
            </div>
            <div>
              <p className="text-[#7C7C7C]">Appointment time</p>
              <p className="text-[2xl]">09:00 AM</p>
            </div>
            <div>
              <p className="text-[#7C7C7C]">Doctor</p>
              <p className="text-[2xl]">Dr. Sarah Chen</p>
            </div>
          </div>

          <div className="bg-slate-100 flex items-center justify-between p-4 rounded-md mr-4 mt-8">
            <button className="bg-white p-2 rounded-md cursor-pointer shadow-md">Assessment</button>
            <button className="cursor-pointer">Code Review</button>
            <button className="cursor-pointer">CMS-1500 Data</button>
            <button className="cursor-pointer">Form Preview</button>
          </div>

          {/* <CodeReview /> */}
          <CMS100Data />
        </div>

        <div
          style={{ boxShadow: "0 -1px 10px rgb(0, 0, 0)" }}
          className="bg-white p-4 flex items-center justify-center gap-4 mr-4"
        >
          <button className="border-[1px] border-[#2E8BC9] rounded-md w-full py-2 text-center cursor-pointer">
            Close
          </button>
          <button className="bg-[#2E8BC9] rounded-md w-full py-2 text-center flex items-center justify-center gap-2 text-white cursor-pointer">
            <Image
              src="/checkmark-circle-02.svg"
              alt="checkmark"
              width="15"
              height="15"
            />
            Finalize
          </button>
        </div>
      </div>
    </div>
  );
}
