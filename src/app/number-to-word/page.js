"use client";

import React, { useCallback, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import numWords from "../../../lib/numtoword";
export default function numberToWord() {
  const initialState = {
    local: "",
    localCopy: false,
    Inter: "",
    InterCopy: false,
  };
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);
  const [word, setWord] = useState(initialState);

  const handleChange = useCallback((e) => {
    setValue(Number(e.target.value));
    setCopied(false);
  }, []);
  const handleCopy = (n) =>
    useCallback(() => {
      setCopied({ ...initialState, [n]: true });
    }, []);

  const convert = () => {
    let word = numWords(value);
    setWord({ ...initialState, local: word[0], Inter: word[1] });
  };

  return (
    <div className=" mx-auto max-w-5xl  ">
      <h1 className="text-4xl font-bold text-indigo-800">
        Conver Number to word
      </h1>
      <div className=" p-8 max-w-2xl bg-indigo-500">
        <div className="space-y-4">
          <div className="flex justify-left">
            <input
              onChange={handleChange}
              className={`  ${
                value != "" && isNaN(value) ? `border-red-600 text-red-700` : ``
              } border  p-2 outline-none `}
              // className={true ? 'border-red-600':"" + "border  p-2 outline-none"}
              placeholder="Enter Number"
              type="text"
            />
            <button
              onClick={convert}
              className="bg-indigo-700 px-3 py-2 text-indigo-50"
            >
              {value != "" && isNaN(value) ? "only Number 👿" : "Convert"}
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-indigo-50">In Word ( Internatioal Format )</p>
            <textarea
              readOnly
              className="w-full h-16 p-2"
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
                  copied ? `bg-green-600` : ""
                } text-indigo-50 bg-indigo-700 px-3 py-2`}
                onCopy={handleCopy("localCopy")}
                text={word.local}
              >
                <button className="">
                  {copied ? "Copied👍" : "Copy to clipboard"}
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-indigo-50">In Word ( Internatioal Format )</p>
            <textarea
              readOnly
              className="w-full h-16 p-2"
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
                  copied ? `bg-green-600` : ""
                } text-indigo-50 bg-indigo-700 px-3 py-2`}
                onCopy={handleCopy("InterCopy")}
                text={word.local}
              >
                <button className="">
                  {copied ? "Copied👍" : "Copy to clipboard"}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
