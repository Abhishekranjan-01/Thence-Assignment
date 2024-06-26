import { useNavigate } from "react-router-dom";
import HeaderTitle from "../../HomePage/Header/HeaderTitle";

export default function RegistrationFormHeader() {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center sm:px-4 m-6 sm:h-[70px] xxl:h-[111.17px] ">
      <HeaderTitle />
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => navigate("/")}
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="63"
            height="63"
            rx="31.5"
            stroke="#CACACA"
          />
          <g clip-path="url(#clip0_11_215)">
            <path
              d="M40 24L24 40"
              stroke="#0C1319"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24 24L40 40"
              stroke="#0C1319"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_11_215">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(16 16)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </header>
  );
}
