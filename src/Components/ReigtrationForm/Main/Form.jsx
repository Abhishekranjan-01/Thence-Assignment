import { Suspense, lazy, useEffect, useState } from "react";
import { emailToCheck } from "./emailToCheck";

const WarningMessage = lazy(() => import("./WarningMessage"));

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const [showWarningMessage, setShowWarningMessage] = useState(false);

  useEffect(() => {
    if (name && email) {
      setDisableButton(true);
      document
        .querySelector("button[type='submit']")
        .removeAttribute("disabled");
    } else {
      setDisableButton(false);
      document
        .querySelector("button[type='submit']")
        .setAttribute("disabled", "");
    }
  }, [name, email]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email !== emailToCheck.email) {
          setShowWarningMessage(true);
        } else {
          setShowWarningMessage(false);
        }
        console.log("Submit Detected");
      }}
      action=""
      className="w-[417px] mx-auto py-16 flex flex-col gap-7 font-Manrope "
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        placeholder="Enter your name"
        className="w-full bg-[#EFEFEF] py-5 rounded-[64px] px-10 text-[#1C1C1C] text-xl font-medium outline-none"
      />
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter your email"
            className={
              (showWarningMessage
                ? `bg-[#F5F8FF] border border-[#537FF1]`
                : `bg-[#EFEFEF]`) +
              " w-full py-5 rounded-[64px] px-10 text-[#1C1C1C] text-xl font-medium outline-none"
            }
          />
          {showWarningMessage && (
            <Suspense fallback={<h1>Loading...</h1>}>
              <WarningMessage />
            </Suspense>
          )}
        </div>

        <button
          type="submit"
          className={
            (disableButton ? `bg-[#1C1C1C]` : `bg-[#C9C9C9]`) +
            ` w-full  py-5 rounded-[64px] px-10 text-lg font-semibold outline-none`
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}
