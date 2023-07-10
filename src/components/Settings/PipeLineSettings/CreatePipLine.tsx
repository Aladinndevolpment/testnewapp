import item from "@/components/Contact/dnd/styles/item";
import { baseUrl, locationID, token } from "@/config/APIConstants";
import { PlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import React, { useState } from "react";
import { AiFillPieChart, AiOutlineClose } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const CreatePipLine = ({ onClose, handleChange }: any) => {
  const [val, setVal] = useState("");
  const [pipeLine, setPipeLine] = useState<any>([]);
  const [stageName, setStageName] = useState<any>();
  const [addStage , setAddStage] = useState<any>([
    {text:""}
  ])
  const [id , setId] = useState<any>(null);
   const handleAddField = () => {
    setAddStage([...addStage, {text:""}])
  };
 
  const requestData = {
    locationID: locationID,
    name: val
  };
  

  const StageRankData = {
    name:addStage,
    pipelineID:id
  }

 
  const handleStoreStages = async () => {
    addNewStage()
    }


const handleStoreValue = async (e:any) => {
const name = e.target.value
    setVal(name);

}

const AddNewPipeLine = async () => {
// console.log("RequestData",requestData)
    await axios.post(`${baseUrl}pipelines`, requestData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }: any) => {
      console.log(data)
      // console.log("dataNew",data )
      // console.log("dataId",data?.pipeline?.id )
      setId(data?.pipeline?.id )
    
    }).catch((err)=>console.log(err))
}

// handleChange(requestData)

const addNewStage = async() => {
  await axios.post(`${baseUrl}pipeline-stages`, StageRankData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(({ data }: any) => {
    // console.log("newStage",data )
    
  
  }).catch((err)=>console.log(err))
}

  return (
    <>
      <div className=" bg-white rounded-lg  h-[85vh] pb-[5%]  overflow-y-hidden w-full scrollbar-hide ">
        <div className=" h-[100vh]  pt-5 pb-3 w-screen md:w-[100vh]">
          <div className="h-[6vh] flex justify-between items-start border-b-[1px] pb-4 px-5">
            <div>
              <p className="text-gray-800 font-medium md:text-lg ">
                Add Pipeline
              </p>
            </div>
            <button onClick={onClose}>
              <AiOutlineClose className="text-gray-800 h-6 w-6" />
            </button>
          </div>
          <div className="">
            <div className="h-[65vh]">
              {/*  Add Domain */}
              <div className="mx-5 py-3">
                <div className="flex items-center  justify-between ">
                  <label
                    className="block text-[#47494b] text-sm pt-1 font-semibold"
                    htmlFor=""
                  >
                    Pipeline Name
                  </label>
                </div>
                <input
                  type="text"
                  id=""
                  name="Pipeline Name"
                  value={val}
                  onChange={(e) => {handleStoreValue(e)}}
                  placeholder="Pipeline Name"
                  className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                />
                   {/* Stages */}
                   {id ? ( 
                    <div>               <div className="flex justify-between items-center px-2  gap-5 py-4">
                      <div className="w-full lg:w-[80%]">
                        <p className="text-gray-800 font-semibold text-base">
                          {" "}
                          Stage Name
                        </p>
                      </div>
                      <div className="w-full lg:w-[20%]">
                        <p className="text-gray-800 font-semibold text-base text-right">
                          {" "}
                          Actions
                        </p>
                      </div>
                    </div>
          
                    <div  className="w-full px-2 h-[40vh] pb-5 overflow-y-scroll scrollbar-hide">

                      <div className=" ">
                       
                          {addStage.map((item:any,index:any) => (
                              <div key={index} className="flex justify-between items-center gap-5">
                                <div className="w-full lg:w-[80%]">
                                  <input
                                    type="text"
                                    value={stageName}
                                    onChange={({target}:any)=> {

                                      // setStageName(e.target.value)
                                      let arr = addStage
                                      let obj = arr[index]
                                      obj.text = target.value
                                      arr[index] = obj
                                      setAddStage(arr)
                                      handleStoreStages()
                                    }}
                                    className=" w-full placeholder:text-gray-400 text-gray-500 text-[12px] px-3 py-3 rounded-md mt-2 mb-2   font-medium bg-transparent focus:bg-transparent   border-[1px] border-gray-200 text-space focus:outline-none focus:border-gray-300   "
                                  />
                                </div>
                                <div className="w-full lg:w-[20%]">
                                  <div className="flex justify-end align-center">
                                  
                                    <RiDeleteBin6Fill
                                      className="text-red-400" />
                                  </div>
                                </div>
                              </div>
                               ))}
                              <button
                      onClick={() => {handleAddField() }}
                      className="flex justify-start items-center  pl-2 pt-4 text-newBlue gap-1"
                    >
                      <PlusIcon className="h-5 w-5" /> Add SubData
                    </button>
                            </div>
                      
                    </div>
                    </div>

                    ) : ""}
              </div>
            </div>
          </div>
          <div className="h-[10vh] flex justify-end items-center border-t-[1px] pt-3 pb-2 px-5">
            <div className=" flex justify-end items-center gap-3">
              <button
                onClick={onClose}
                className="text-base text-gray-600 font-medium flex justify-start items-center border-[1px] border-gray-300 py-2 px-5 rounded-md  "
              >
                Cancel
              </button>
               {id ?  
               
               <button
                // onClick={() => {handleChange(val) , onclick(val)}}
                onClick={()=>{
                  setId(null)
                  handleChange()
                }}
                type="submit"
                className="text-base flex justify-start items-center bg-newBlue py-2 px-5 text-white rounded-md  "
              >
                Save
              </button>
               : <button
                // onClick={() => {handleChange(val) , onclick(val)}}
                onClick={()=>{AddNewPipeLine()}}
                type="submit"
                className="text-base flex justify-start items-center bg-newBlue py-2 px-5 text-white rounded-md  "
              >
                Save
              </button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

 export default CreatePipLine;
