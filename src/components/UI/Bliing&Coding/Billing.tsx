import Image from "next/image";
import React from "react";
import InputComponent from "./InputComponent";

export default function Billing() {
  return (
    <div>
      <div className="flex items-center justify-center gap-8 mt-4">
        <div className="w-full">
          <InputComponent
            inputComponentProps={{
              label: "Box 25: Federal Tax ID Number *",
              inputClass:
                "text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full shadow-md",
              labelClass: "font-[500] text-[18px] text-[#3D3D3D]",
              required: false,
              errorMessage: null,
              inputType: "text",
              name: "box-25-1",
              inputTag: "text",
            }}
          />
        </div>

        <div className="w-[40%] flex items-center justify-start gap-4">
          <div className="flex items-center justify-center gap-4 flex-col">
            <label htmlFor="" className="font-[500] text-[18px] text-[#3D3D3D]">
              SSN/EIN
            </label>
            <div className="flex items-center justify-center gap-4">
              <label
                htmlFor="ssn_ein"
                className="font-[500] text-[18px] text-[#3D3D3D]"
              >
                SSN
              </label>
              <input
                type="radio"
                name="ssn_ein"
                id="ssn_ein"
                className=" w-6 h-6"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <InputComponent
          inputComponentProps={{
            label: "Box 26: Patient's Account Number",
            inputClass:
              "text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full shadow-md",
            labelClass: "font-[500] text-[18px] text-[#3D3D3D]",
            required: false,
            errorMessage: null,
            inputType: "text",
            name: "box-26-1",
            inputTag: "text",
          }}
        />
      </div>
      <div className="flex items-center justify-center flex-wrap md:flex-nowrap mt-4">
        <div className="w-full">
          <label
            htmlFor="box-27"
            className="font-[500] text-[18px] text-[#3D3D3D]"
          >
            Box 27: Accept Assignment?
          </label>
          <div className="flex mt-4 gap-16">
            <div className="flex items-center">
              <input
                type="radio"
                name="accept-assignment"
                id="yes"
                className="ml-4 w-6 h-6"
              />
              <label htmlFor="yes" className="text-lg ml-3">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="accept-assignment"
                id="no"
                className="ml-4 w-6 h-6"
              />
              <label htmlFor="no" className="text-lg ml-3">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <InputComponent
          inputComponentProps={{
            label: "Box 28: Total Charge",
            inputClass:
              "text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full shadow-md",
            labelClass: "font-[500] text-[18px] text-[#3D3D3D]",
            required: false,
            errorMessage: null,
            inputType: "text",
            name: "box-28-1",
            inputTag: "text",
          }}
        />
      </div>
      <div className="mt-4">
        <InputComponent
          inputComponentProps={{
            label: "Box 29: Amount Paid",
            inputClass:
              "text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full shadow-md",
            labelClass: "font-[500] text-[18px] text-[#3D3D3D]",
            required: false,
            errorMessage: null,
            inputType: "text",
            name: "box-29-1",
            inputTag: "text",
          }}
        />
      </div>
      <div className="flex items-end justify-center gap-6 flex-wrap md:flex-nowrap mt-4">
        <div className="w-full">
          <InputComponent
            inputComponentProps={{
              label: "Box 33a: NPI *",
              inputClass:
                "text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full shadow-md",
              labelClass: "font-[500] text-[18px] text-[#3D3D3D]",
              required: false,
              errorMessage: null,
              inputType: "text",
              name: "box-33a",
              inputTag: "text",
            }}
          />
        </div>
        <div className="w-full">
          <InputComponent
            inputComponentProps={{
              label: "Box 33b: Other ID#",
              inputClass:
                "text-[16px] mt-2 border-none focus:outline-2 focus:outline-[#2E8BC9] rounded-[8px] p-[12px] w-full shadow-md",
              labelClass: "font-[500] text-[18px] text-[#3D3D3D]",
              required: false,
              errorMessage: null,
              inputType: "text",
              name: "box-33b",
              inputTag: "text",
            }}
          />
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between flex-wrap md:flex-nowrap">
        <div>
          <p>Codes Summary</p>
          <p className="my-[12px]">Diagnosis Codes (Box 21) - 0</p>
          <p className="flex items-center justify-start gap-3">
            <Image
              src="/information-circle-1.svg"
              alt="information circel"
              width="20"
              height="20"
            />
            <span className="text-red-600">No diagnosis codes finalized</span>
          </p>
        </div>
        <div className="md:mt-4 mt-0">
          <p>Procedure Codes (Box 24) - 0</p>
          <p className="flex items-center justify-start gap-3 mt-[12px]">
            <Image
              src="/information-circle-1.svg"
              alt="information circel"
              width="20"
              height="20"
            />
            <span className="text-red-600">No diagnosis codes finalized</span>
          </p>
        </div>
      </div>
    </div>
  );
}
