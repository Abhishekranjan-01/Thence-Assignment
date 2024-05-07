import { useEffect, useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [disableButton, setDisableButton] = useState(false);

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
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full bg-[#EFEFEF] py-5 rounded-[64px] px-10 text-[#1C1C1C] text-xl font-medium outline-none"
        />

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
