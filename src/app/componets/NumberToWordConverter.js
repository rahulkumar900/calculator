"use client";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { GWF, IWF } from "../../../lib/nw";
import TextareaAutosize from "react-textarea-autosize";
function toSentenceCase(text) {
  console.log(text);
  return text.replace(text[0], text[0].toUpperCase());
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
  const [er, setError] = useState(false);
  const [copy, setCopied] = useState(initialCopy);
  const [word, setWord] = useState(initialState);

  console.log(er);

  const handleChange = useCallback((e) => {
    const inV = e.target.value;
    if (inV != "" && isNaN(Number(inV))) {
      setError(true);
    } else {
      setError(false);
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

  return (
    <div className="flex gap-8 justify-between  flex-row ">
      <div className=" md:w-1/2 flex-auto space-y-4 p-7 border-2 border-indigo-600 bg-indigo-100 rounded-md">
        <div className=" flex justify-left">
          <input
            onChange={handleChange}
            className={`  ${
              value != "" && isNaN(value) ? `border-red-600 text-red-700` : ``
            } border-2 font-semibold  p-2 outline-none border-indigo-600 rounded-l-md`}
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
          <label className=" ">Word In Internatioal Format </label>
          <div>
            <TextareaAutosize
              className="w-full h-full px-3 py-1 border-2 border-indigo-600 rounded-md"
              minRows={2}
              value={word.Inter}
            />
            <div className="flex gap-2 justify-end">
              <CopyToClipboard
                className={`${
                  copy.InterCopy ? `bg-green-600 rounded-md` : `bg-indigo-600`
                } text-indigo-50 text-xs  px-3 py-2`}
                onCopy={() => handleCopy("InterCopy")}
                text={word.Inter}
              >
                <button className="text-xs">
                  {copy.InterCopy ? "Copied" : "Copy to clipboard"}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label className=" ">Word In Internatioal Format </label>
          <div>
            <TextareaAutosize
              className="w-full h-full px-3 py-1 border-2 border-indigo-600 rounded-md"
              minRows={2}
              value={word.local}
            />
            <div className="flex gap-2 justify-end">
              <CopyToClipboard
                className={`${
                  copy.localCopy ? `bg-green-600 rounded-md` : `bg-indigo-600`
                } text-indigo-50 text-xs  px-3 py-2`}
                onCopy={() => handleCopy("localCopy")}
                text={word.local}
              >
                <button className="text-xs">
                  {copy.localCopy ? "Copied" : "Copy to clipboard"}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
      <div className="md:block hidden w-1/2 flex-auto  limitations ">
        <p>
          <strong>Limitations</strong>
        </p>
        <ul>
          <li> one</li>
          <li>two </li>
          <li> one</li>
          <li> one</li>
          <li>two </li>
          <li> one</li>
        </ul>
      </div>
    </div>
  );
}
