
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="header-bg flex relative" style={{ padding: 0, }}>
        <div className="absolute group" style={{top: '30%', right: '300px', zIndex: '10'}}>
          <svg
            className="rotate-[20deg]"
            width="29"
            height="32"
            viewBox="0 0 29 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.4645 2.15092e-06L28.3184 22.7096L3.25382 14.8277L13.2552 9.6072L13.3779 9.3194L16.4645 2.15092e-06Z"
              fill="white"
            />
          </svg>
          <button className="hidden group-hover:flex bg-gray-700 text-white pl-[4.8px] pr-[12.81px] py-[3.2px] rounded-full">
            <img src="/avatar.jpg" alt="" className="w-[25.62px] h-[25.62px] rounded-full"/>
            <p className="text-[19px] font-medium">Your Na..</p>
          </button>
          <svg
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_6003_347)">
              <path
                d="M2.91675 8.51327C2.91675 5.42235 5.42244 2.91666 8.51336 2.91666H67.3201C70.4111 2.91666 72.9167 5.42234 72.9167 8.51326V67.32C72.9167 70.411 70.4111 72.9167 67.3201 72.9167H8.51336C5.42244 72.9167 2.91675 70.411 2.91675 67.32V8.51327Z"
                fill="white"
                shape-rendering="crispEdges"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.9194 49.7078L38.0126 55.4166C37.1605 55.417 36.3419 55.0856 35.7302 54.4925L35.2844 53.9618L24.4545 41.0834L20.7709 36.6991C20.7612 36.6939 20.7534 36.6858 20.7488 36.6758L20.6906 36.6083L20.6789 36.5932C20.6069 36.4982 20.5492 36.3931 20.5078 36.2813C20.4527 36.1442 20.4224 35.9984 20.4182 35.8506V35.7622C20.4182 35.7343 20.4205 35.7052 20.4264 35.6772C20.4518 35.3905 20.5732 35.1207 20.7709 34.9114C21.0071 34.6553 21.3505 34.4924 21.7276 34.4924H25.3647L37.9183 49.7101L37.9206 49.7078H37.9194Z"
                fill="#FCD1CA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.9173 42.8619V49.9371L20.7454 29.4459C20.6423 29.3304 20.5611 29.1971 20.5057 29.0525C20.4513 28.914 20.4214 28.7671 20.4172 28.6184V28.5311C20.4265 28.2029 20.5581 27.9084 20.7699 27.6838C21.005 27.4242 21.3483 27.2648 21.7266 27.2648H24.9831L37.9173 42.8619Z"
                fill="#FF9D8D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.7194 20.4177C21.3447 20.4177 21.0002 20.576 20.7674 20.8343C20.5579 21.0543 20.4275 21.3523 20.4182 21.677V21.7631C20.4217 21.9179 20.452 22.0622 20.5067 22.1937C20.5078 22.2065 20.5137 22.217 20.5183 22.2287C20.5751 22.3655 20.6564 22.4909 20.7581 22.5988L20.7767 22.6197L37.9171 42.8619V55.4166C38.7643 55.4184 39.5786 55.0894 40.1867 54.4995C40.1902 54.4995 40.1902 54.4995 40.1902 54.4972L55.0878 36.8109C55.1064 36.7923 55.1227 36.7713 55.139 36.7504C55.2182 36.6526 55.281 36.542 55.3276 36.421C55.3858 36.2767 55.416 36.1184 55.416 35.9496V21.7177C55.4175 21.3878 55.2916 21.0701 55.0645 20.8308C54.9433 20.6992 54.7958 20.5943 54.6317 20.523C54.4675 20.4516 54.2903 20.4154 54.1113 20.4165H21.7206L21.7194 20.4177Z"
                fill="#FF6661"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_6003_347"
                x="8.13007e-05"
                y="-1.0252e-05"
                width="75.8333"
                height="75.8333"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1.45833" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_6003_347"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_6003_347"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          
        </div>
        <div className="absolute group" style={{top: '30%', left: '300px', zIndex: '10'}}>
          <svg
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_6003_601)">
              <rect
                x="2.91663"
                y="2.91669"
                width="70"
                height="70"
                rx="5.59661"
                fill="white"
                shapeRendering="crispEdges"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.9166 37.9167C37.9166 34.6321 40.5793 31.9694 43.8639 31.9694C47.1485 31.9694 49.8112 34.6321 49.8112 37.9167C49.8112 41.2013 47.1485 43.864 43.8639 43.864C40.5793 43.864 37.9166 41.2013 37.9166 37.9167Z"
                fill="#1ABCFE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.0221 49.8112C26.0221 46.5266 28.6848 43.864 31.9694 43.864H37.9166V49.8112C37.9166 53.0958 35.2539 55.7585 31.9694 55.7585C28.6848 55.7585 26.0221 53.0958 26.0221 49.8112Z"
                fill="#0ACF83"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.9166 20.0749V31.9694H43.8639C47.1485 31.9694 49.8112 29.3067 49.8112 26.0222C49.8112 22.7376 47.1485 20.0749 43.8639 20.0749H37.9166Z"
                fill="#FF7262"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.0221 26.0222C26.0221 29.3067 28.6848 31.9694 31.9694 31.9694H37.9166V20.0749H31.9694C28.6848 20.0749 26.0221 22.7376 26.0221 26.0222Z"
                fill="#F24E1E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.0221 37.9167C26.0221 41.2013 28.6848 43.864 31.9694 43.864H37.9166V31.9694H31.9694C28.6848 31.9694 26.0221 34.6321 26.0221 37.9167Z"
                fill="#A259FF"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_6003_601"
                x="-4.07696e-05"
                y="2.02656e-05"
                width="75.8333"
                height="75.8333"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1.45833" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_6003_601"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_6003_601"
                  result="shape"
                />
              </filter>
            </defs>
            
          </svg>
            <button className="hidden group-hover:flex bg-gray-700 text-white pl-[4.8px] pr-[12.81px] py-[3.2px] rounded-full">
            <img src="/avatar.jpg" alt="" className="w-[25.62px] h-[25.62px] rounded-full"/>
            <p className="text-[19px] font-medium">Your Na..</p>
          </button>
        </div>
        <div className="flex items-center" style={{ width: '100%', padding: 0 }}>
          <img src="/portfolio.jpg" alt="" className="" style={{ width: '500px', margin: 'auto' }} />
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <button className="rounded-full px-[12px] py-[4px] mx-[10px] bg-gray-100 border border-gray-300 hover:shadow-gray-500 shadow-2xl">
          <p className="text-gray-700 font-medium">Product Design</p>
        </button>
        <button className="rounded-full px-[12px] py-[4px] mx-[10px] bg-gray-100 border border-gray-300">
          <p className="text-gray-700 font-medium">UI/UX Design</p>
        </button>
        <button className="rounded-full px-[12px] py-[4px] mx-[10px] bg-gray-100 border border-gray-300">
          <p className="text-gray-700 font-medium">Web Design</p>
        </button>
      </div>
      <div className=" header-bg flex flex-col items-center justify-center">
        <p className="text-[59px] font-bold">
          <span className=" text-gray-700 text-[59px] font-bold">Your </span>
          Name Here
        </p>
          <p className="text-gray-700 font-medium text-[18px] text-center">
          Whether you’re looking to discuss a new project, seek advice, or
          collaborate, I’m always excited to connect and
          <br />
          explore new possibilities.
        </p>
           <button className=" flex items-center gap-2 rounded-full py-[12px] px-[38px] mt-[27px] border border-gray-300">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_6046_91)">
              <path
                d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42187 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043V17.043Z"
                fill="#667085"
              />
            </g>
            <defs>
              <clipPath id="clip0_6046_91">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="font-semibold text-gray-700">Contact Me</p>
        </button>
      </div>
      
      
        
  
      
        
      
    </>
  );
};

export default Hero;
