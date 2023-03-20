"use client"
import React, { useCallback, useState,useEffect,useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {GWF,IWF} from "../../../lib/nw";

function toSentenceCase(text){
  console.log(text)
 return text.replace(text[0],text[0].toUpperCase())
}




export default function numberToWord() {

  const initialState = {
    local: "",
    Inter: "",
  };

  const initialCopy = {
    InterCopy: false,
    localCopy: false,
  };

  const [value, setValue] = useState("");
  const [er,setError] = useState(false)
  const [copy, setCopied] = useState(initialCopy);
  const [word, setWord] = useState(initialState);

console.log(er);

  const handleChange = useCallback((e) => {
    const inV = e.target.value;
    if(inV != "" && isNaN(Number(inV))){
      setError(true);
    }else{
      setError(false)
    }
    
    setValue(Number(e.target.value));
    setCopied(false);
  }, []);

  const handleCopy = (n) => {
    setCopied({ ...initialCopy, [n]: true });
  };

  const convert = () => {
    let Gword = GWF(value);
    let Iword = IWF(value);
    setWord({ ...initialState, local: Iword, Inter: Gword });
  };


  const textAreaRef = useRef(null);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  useEffect(resizeTextArea, [word]);


  return (
    <div className=" mx-auto w-full">
     
      <div className="p-8 w-full   bg-indigo-500 ">
        <div className="space-y-2">
          <div className=" flex justify-left">
            <input
              onChange={handleChange}
              className={`  ${
                value != "" && isNaN(value) ? `border-red-600 text-red-700` : ``
              } border font-semibold  p-2 outline-none `}
              placeholder="Enter Number"
              type="text"
            />
            <button
              onClick={convert}
              disabled={er}
              className="bg-indigo-700 px-3 py-2 text-indigo-50"
            >
              {er ? "only Number 👿" : "Convert"}
            </button>
          </div>
 
          <div className="space-y-2">
           <label className="text-indigo-50 ">In Word ( Internatioal Format )</label>
           <textarea ref={textAreaRef}
              readOnly
              className="w-full h-auto px-2 leading-normal overflow-y-auto py-1 text-indigo-900 font-semibold"
              value={word.Inter}
            ></textarea>
           <div className="inline-flex gap-2">
          
             <button className="text-indigo-50 bg-indigo-700 px-3 py-2">
               1
             </button>
             <CopyToClipboard
               className={`${
                 copy.localCopy ? `bg-green-600 rounded-md` : `bg-indigo-700`
               } text-indigo-50  px-3 py-2`}
               onCopy={() => handleCopy("localCopy")}
               text={word.local}
             >
               <button className="">
                 {copy.localCopy ? "Copied" : "Copy to clipboard"}
               </button>
            </CopyToClipboard>
           </div>
         </div>

          <div className="space-y-2">
            <label className="text-indigo-50">In Word ( Indian Format )</label>
            <textarea ref={textAreaRef}
              readOnly
              className="w-full h-auto p-2 text-indigo-900 font-semibold"
              value={word.local}
            ></textarea>
            <div className="inline-flex gap-2">
              <button className="text-indigo-50 bg-indigo-700 px-3 py-2">
                1
              </button>
              <button className="text-indigo-50 bg-indigo-700 px-3 py-2">
                1
              </button>
              <button className="text-indigo-50 bg-indigo-700 px-3 py-2">
                1
              </button>
              <CopyToClipboard
                className={`${
                  copy.InterCopy ? `bg-green-600 rounded-sm` : `bg-indigo-700`
                } text-indigo-50  px-3 py-2`}
                onCopy={() => handleCopy("InterCopy")}
                text={word.local}
              >
                <button className="">
                  {copy.InterCopy ? "Copied" : "Copy to clipboard"}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
