"use client";

import React, { useCallback, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import numWords from "../../../lib/numtoword";

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
    let word = numWords(value);
    setWord({ ...initialState, local: toSentenceCase( word[0]), Inter: toSentenceCase( word[1]) });
  };

  return (
    <div className=" mx-auto max-w-5xl  ">
      <h1 className="px-8 text-4xl text-center mb-14 font-extrabold text-indigo-800">
        Convert Number To Word
      </h1>
      <div className=" p-8 max-w-2xl bg-indigo-500">
        <div className="space-y-4">
          <div className="flex justify-left">
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

          <div className="space-y-4">
            <p className="text-indigo-50 ">In Word ( Internatioal Format )</p>
            <textarea
              readOnly
              className="w-full h-16 p-2 font-semibold"
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

          <div className="space-y-4">
            <p className="text-indigo-50">In Word ( Internatioal Format )</p>
            <textarea
              readOnly
              className="w-full h-16 p-2 text-indigo-900 font-semibold"
              value={word.Inter}
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
                text={word.Inter}
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
