import React from "react";
import img from '../assets/wallpaper.jpg'

const First = () => {
  return (
    <div>
      <div className="bg-white flex w-100% h-[70px]">
        <div className="mt-5 ml-[90px]">
          <svg
            width="123"
            height="25"
            viewBox="0 0 123 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.9415 25C44.6381 25 44.3726 24.8957 44.145 24.6871C43.9364 24.4785 43.8321 24.213 43.8321 23.8907V3.89422C43.8321 3.59081 43.9364 3.33481 44.145 3.12622C44.3726 2.89866 44.6381 2.78489 44.9415 2.78489C45.2449 2.78489 45.5009 2.89866 45.7095 3.12622C45.937 3.33481 46.0508 3.59081 46.0508 3.89422V22.8951H57.1726C57.476 22.8951 57.732 22.9994 57.9406 23.208C58.1681 23.3976 58.2819 23.6441 58.2819 23.9476C58.2819 24.251 58.1681 24.507 57.9406 24.7156C57.732 24.9052 57.476 25 57.1726 25H44.9415ZM68.2037 25.1422C66.6867 25.1422 65.3308 24.8009 64.1361 24.1182C62.9415 23.4356 62.0028 22.4969 61.3201 21.3022C60.6375 20.1076 60.2961 18.7517 60.2961 17.2347C60.2961 15.6987 60.6375 14.3333 61.3201 13.1387C62.0028 11.944 62.9415 11.0053 64.1361 10.3227C65.3308 9.64 66.6867 9.29866 68.2037 9.29866C69.7207 9.29866 71.0671 9.64 72.2428 10.3227C73.4375 11.0053 74.3761 11.944 75.0588 13.1387C75.7415 14.3333 76.0923 15.6987 76.1113 17.2347C76.1113 18.7517 75.7604 20.1076 75.0588 21.3022C74.3761 22.4969 73.4375 23.4356 72.2428 24.1182C71.0671 24.8009 69.7207 25.1422 68.2037 25.1422ZM68.2037 23.1511C69.3036 23.1511 70.2896 22.8951 71.1619 22.3831C72.0342 21.8711 72.7169 21.1695 73.2099 20.2782C73.703 19.387 73.9495 18.3724 73.9495 17.2347C73.9495 16.0969 73.703 15.0824 73.2099 14.1911C72.7169 13.2809 72.0342 12.5698 71.1619 12.0578C70.2896 11.5458 69.3036 11.2898 68.2037 11.2898C67.1038 11.2898 66.1178 11.5458 65.2455 12.0578C64.3732 12.5698 63.681 13.2809 63.169 14.1911C62.676 15.0824 62.4295 16.0969 62.4295 17.2347C62.4295 18.3724 62.676 19.387 63.169 20.2782C63.681 21.1695 64.3732 21.8711 65.2455 22.3831C66.1178 22.8951 67.1038 23.1511 68.2037 23.1511ZM86.7995 25.1422C85.3014 25.1422 83.974 24.8104 82.8173 24.1467C81.6605 23.464 80.7503 22.5253 80.0866 21.3307C79.4419 20.136 79.1195 18.7707 79.1195 17.2347C79.1195 15.6797 79.4608 14.3049 80.1435 13.1102C80.8261 11.9156 81.7648 10.9864 82.9595 10.3227C84.1541 9.64 85.51 9.29866 87.027 9.29866C88.563 9.29866 89.9189 9.64 91.0946 10.3227C92.2893 10.9864 93.2184 11.9156 93.8821 13.1102C94.5648 14.3049 94.9156 15.6797 94.9346 17.2347V23.0373C94.9346 24.5733 94.5933 25.9481 93.9106 27.1618C93.2279 28.3944 92.2987 29.3615 91.123 30.0631C89.9473 30.7837 88.601 31.144 87.0839 31.144C85.5859 31.144 84.2679 30.8596 83.1301 30.2907C81.9924 29.7407 81.0537 28.9822 80.3141 28.0151C80.1056 27.7876 80.0107 27.541 80.0297 27.2756C80.0676 27.0101 80.2099 26.792 80.4564 26.6213C80.7029 26.4507 80.9779 26.3938 81.2813 26.4507C81.5847 26.5076 81.8217 26.6498 81.9924 26.8773C82.5423 27.56 83.2439 28.1099 84.0973 28.5271C84.9696 28.9443 85.9746 29.1529 87.1124 29.1529C88.1743 29.1529 89.1319 28.8969 89.9853 28.3849C90.8386 27.8729 91.5118 27.1523 92.0048 26.2231C92.5168 25.2939 92.7728 24.2036 92.7728 22.952V21.6436C92.2039 22.7244 91.398 23.5778 90.355 24.2036C89.331 24.8293 88.1459 25.1422 86.7995 25.1422ZM87.027 23.1511C88.1459 23.1511 89.1319 22.9046 89.9853 22.4116C90.8576 21.8996 91.5402 21.1979 92.0333 20.3067C92.5263 19.4154 92.7728 18.3914 92.7728 17.2347C92.7728 16.0779 92.5263 15.0539 92.0333 14.1627C91.5402 13.2524 90.8576 12.5508 89.9853 12.0578C89.1319 11.5458 88.1459 11.2898 87.027 11.2898C85.9082 11.2898 84.9127 11.5458 84.0404 12.0578C83.1681 12.5508 82.4854 13.2524 81.9924 14.1627C81.4993 15.0539 81.2528 16.0779 81.2528 17.2347C81.2528 18.3914 81.4993 19.4154 81.9924 20.3067C82.4854 21.1979 83.1681 21.8996 84.0404 22.4116C84.9127 22.9046 85.9082 23.1511 87.027 23.1511ZM105.85 25.1422C104.333 25.1422 102.977 24.8009 101.783 24.1182C100.588 23.4356 99.6495 22.4969 98.9668 21.3022C98.2841 20.1076 97.9428 18.7517 97.9428 17.2347C97.9428 15.6987 98.2841 14.3333 98.9668 13.1387C99.6495 11.944 100.588 11.0053 101.783 10.3227C102.977 9.64 104.333 9.29866 105.85 9.29866C107.367 9.29866 108.714 9.64 109.889 10.3227C111.084 11.0053 112.023 11.944 112.705 13.1387C113.388 14.3333 113.739 15.6987 113.758 17.2347C113.758 18.7517 113.407 20.1076 112.705 21.3022C112.023 22.4969 111.084 23.4356 109.889 24.1182C108.714 24.8009 107.367 25.1422 105.85 25.1422ZM105.85 23.1511C106.95 23.1511 107.936 22.8951 108.809 22.3831C109.681 21.8711 110.364 21.1695 110.857 20.2782C111.35 19.387 111.596 18.3724 111.596 17.2347C111.596 16.0969 111.35 15.0824 110.857 14.1911C110.364 13.2809 109.681 12.5698 108.809 12.0578C107.936 11.5458 106.95 11.2898 105.85 11.2898C104.751 11.2898 103.764 11.5458 102.892 12.0578C102.02 12.5698 101.328 13.2809 100.816 14.1911C100.323 15.0824 100.076 16.0969 100.076 17.2347C100.076 18.3724 100.323 19.387 100.816 20.2782C101.328 21.1695 102.02 21.8711 102.892 22.3831C103.764 22.8951 104.751 23.1511 105.85 23.1511Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8469 2.96289H0.000496864L6.67265 9.63504H22.519L15.8469 2.96289ZM6.67264 9.63505V25.4814L0.000488281 18.8093V2.96289L6.67264 9.63505Z"
              fill="#CCCCCC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.6726 25.4814L22.519 25.4814L15.8468 18.8093L0.000450134 18.8093L6.6726 25.4814ZM15.8468 18.8093L15.8468 2.96292L22.519 9.63508L22.519 25.4814L15.8468 18.8093Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="flex mt-5 ml-[350px] justify-between gap-[20px]">
          <div>Features</div>
          <div>Pricing</div>
          <div>Community</div>
          <div>Support</div>
        </div>
        <div className="flex mt-5 ml-[420px] gap-[10px]">
          <div className="border-2 rounded border-b-cyan-500 text-center justify-center w-[100px] h-[40px]"><button>Login</button></div>
          <div className="rounded bg-cyan-400 text-white text-center w-[100px] h-[40px]"><button>SignUp</button></div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute">
           <img src={img} className="w-[1510px] h-[600px]" />
        </div>
        <div className="absolute w-[1000px]">
           <div className="absolute mt-[180px] ml-[100px] text-6xl text-white">The Photo the image of entusiast</div>
           <div className="absolute mt-[300px] ml-[700px] rounded bg-cyan-400 text-white text-center w-[100px] h-[40px]"><button>Today Join</button></div>
        </div>
           
      </div>
      <div className="flex mt-[700px] ml-[10px]">
        <div className="ml-[70px] w-[500px]">
          <div className="text-4xl font-extrabold mt-[10px]">Snap Photos and share like never before</div>
          <div className="mt-[20px] text-xl font-bold">Lorem Tech</div>
          <div className="mt-[10px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Accusamus modi voluptate atque eum. Dolorem repellat amet ipsam <br/> ad quisquam</div>
          <div className="mt-[20x] rounded bg-cyan-400 text-white text-center w-[100px] h-[30px]"><button>Login</button></div>
          <div className="mt-[20px] text-xl font-bold">Lorem Tech</div>
          <div className="mt-[10px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Accusamus modi voluptate atque eum. Dolorem repellat amet ipsam <br/> ad quisquam </div>
          <div className="mt-[10px] rounded bg-cyan-400 text-white text-center w-[100px] h-[30px]"><button>Login</button></div>
        </div>
        <div className="ml-[200px] mt-[70px]">
           <div className="mt-[20px] text-xl font-bold">Lorem tech</div>
           <div className="mt-[10px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Accusamus modi voluptate atque eum. Dolorem repellat amet ipsam <br/>ad quisquam </div>
           <div className="mt-[10px] rounded bg-cyan-400 text-white text-center w-[100px] h-[30px]"><button>Login</button></div>
           <div className="mt-[20px] text-xl font-bold">Lorem tech</div>
           <div className="mt-[10px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Accusamus modi voluptate atque eum. Dolorem repellat amet ipsam <br/> ad quisquam </div>
           <div className="mt-[10px] rounded bg-cyan-400 text-white text-center w-[100px] h-[30px]"><button>Login</button></div>
        </div>
      </div>
    </div>
  );
};

export default First;