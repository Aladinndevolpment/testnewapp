import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineLink, AiOutlinePlus } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";

export default function AddInvoiceForm() {
  const [dateTime, setDateTime] = useState<any>({
    date: new Date(),
    time: "10:00",
  });

  return (
    <div className="m-0 pb-6  bg-mainBg pr-3 ">
      <div className="bg-white rounded-tr-[50px] shadow-md h-screen overflow-y-scroll scrollbar-hide ">
        <div className="flex border-b-2 py-4 px-4">
          <h1 className="font-medium text-2xl">Create New Invoice</h1>
        </div>

        <div>
          <div className="flex justify-between items-center mt-4 mb-2 px-4">
            <h1 className="font-bold text-xl flex gap-2">
              Invoice
              <p className="text-[#0e8fc3] font-bold">
                <span className="text-slate-500 ">#</span>8FB8684C-0001
              </p>
            </h1>

            <button className="flex items-center gap-1 text-slate-400 btn bg-transparent border-none hover:bg-transparent">
              <AiOutlineLink />
              COPY LINK
            </button>
          </div>
        </div>
      

        <div className="px-3">
          <div className="bg-[#f9f9f9] border-gray-300 rounded-lg border px-4 py-4">
            <label className="font-bold block" htmlFor="">
              Recipient Email
            </label>
            <input
              className="border border-gray-300 outline-none rounded-lg  p-2 mt-1 w-full"
              type="email"
              name=""
              placeholder="Enter Email"
            />
          </div>
        </div>

        <div className="m-3 mt-4">
          <form action="">
            <label className="block text-slate-500 " htmlFor="">
              Project Description
            </label>
            <input
              className="border border-gray-300 outline-none rounded-lg p-1 w-full p-2"
              type="text"
              name=""
              placeholder="Enter Project"
            />
          </form>
        </div>

        <div className="flex justify-between m-3 gap-3">
          <div className="w-1/2 ">
  
              <label className="block text-slate-500" htmlFor="">
                Issued On
              </label>
              <DatePicker
              selected={new Date()}
              onChange={(e: any) => {
                setDateTime((prevValues: any) => ({
                  ...prevValues,
                  date: e,
                }));
              }}
              placeholderText={dateTime.date}
              minDate={new Date()}
            />
            
          </div>

          <div className="w-1/2">
            
              <label className="block text-slate-500" htmlFor="">
                Due On
              </label>
              <DatePicker
              selected={new Date()}
              onChange={(e: any) => {
                setDateTime((prevValues: any) => ({
                  ...prevValues,
                  date: e,
                }));
              }}
              placeholderText={dateTime.date}
              minDate={new Date()}
            />
          
          </div>
        </div>

        <div className="px-4 mb-4 flex items-stretch gap-1">
            <input
              type="checkbox"
              name=""
            />
            <label htmlFor="">
              This is a recurring invoice (Monthly)
            </label>
        </div>
              <div className="font-bold p-4 pb-2">
                   <h1>Invoice Items</h1>
              </div>

        <div className="flex justify gap-4 px-4">
          <div className="flex  ">
            <form action="">
              <label className="text-slate-500" htmlFor="">
                Item
              </label>
              <input
                className="border border-gray-300 outline-none rounded-md p-1 w-64 mt-2"
                type="text"
                name=""
                placeholder="Item Name"
              />
            </form>
          </div>

          <div className="flex  gap-2">
            <div className="flex ">
              <form action="">
                <label className="flex w-1/4 text-slate-500 " htmlFor="">
                  Price
                </label>
                <input
                  className="border border-gray-300 outline-none rounded-md w-20 p-1 mt-2"
                  type="number"
                  name=""
                  placeholder="0"
                />
              </form>
            </div>

            <div className="flex w-10 ">
              <form action="">
                <label className="flex text-slate-500" htmlFor="">
                  Qty
                </label>
                <input
                  className="border border-gray-300 outline-none rounded-md  p-1 w-10 mt-2 "
                  type="number"
                  name=""
                  placeholder="0"
                />
              </form>
            </div>

            <div className="flex w-1/4  ">
              <form action="">
                <label className="flex text-slate-500" htmlFor="">
                  Total Price
                </label>
                <input
                  className="border border-gray-300 outline-none rounded-md  p-1 w-20 mt-2"
                  type="number"
                  name=""
                  placeholder="0"
                />
              </form>
            </div>

            <div className="flex w-1/3 m-3  ">
              <button className="slate-500 mt-7 ">
                <HiDotsVertical />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between  items-center">
            <button className="flex items-center text-blue-600 font-bold gap-1 btn bg-transparent border-none hover:bg-transparent" >  
              <AiOutlinePlus /> Add Item
            </button>
         

          <div className="flex justify-evenly w-80 ">
            <span className="text-slate-500 ">Total Amount</span>
            <span className="font-bold text-lg ">$0</span>
          </div>
        </div>

        <div className="p-4 text-slate-500 border-b-2 ">
          <span>Additional Notes</span>
          <textarea
            className="border border-gray-300 outline-none rounded-md p-2  "
            cols={59}
            rows={5}
            name=""
            placeholder="Some additional notes for the client"
          ></textarea>
        </div>

        <div className="flex justify-between px-4 py-4 ">
          <button type="submit" className="text-blue-600  font-bold btn bg-transparent border-none hover:bg-transparent">
            PREVIEW
          </button>
          <div className="flex gap-4">
            <button
              className="border border-gray-300 outline-none rounded-md p-2 font-bold btn bg-transparent hover:bg-transparent text-black"
              type="submit"
            >
              Save as Draft
            </button>


            <button
              className="rounded-md bg-blue-600 text-white btn hover:bg-blue-600 border-none "
              type="submit"
            >
              Send
            </button>


          </div>
        </div>
      </div>
    </div>
  );
}
