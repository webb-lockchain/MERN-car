export default function HeroSection({ img, mt, words,long=false }) {
  return (
    <div className="w-full  h-fit opacity-95 bg-gradient-to-r from-red-600 to-blue-900 flex flex-col justify-center items-center  relative md:px-10">
      <div className={`h-1/3 absolute bottom-0 w-full bg-gradient-to-b from-transparent to-white -z-20`}></div>
      <div className="w-full items-center lg:items-start flex flex-col lg:flex-row py-10 max-w-[1480px] justify-between md:px-0 ">
        {/* <div className="px-5  max-w-[708px] h-full sm:items-start lg:items-start items-center lg:justify-start justify-left text-white font-barlow-condensed font-bold text-7xl leading-6 uppercase flex flex-wrap">
          {words.map((word, index) => {
            return (
              <div
                key={index}
                className={`${index === 0 ? "lg:w-full lg:text-start text-left " : ""
                  } title text-[70px] md:text-[100px] leading-[70px] w-full md:leading-[100px]`}
              >
                {word}
                {index === 0 ? "" : ""}&nbsp;
              </div>
            );
          })}
        </div> */}
        {long?(<div className="px-5  max-w-[708px] h-full sm:items-start lg:items-start items-center lg:justify-start justify-left text-white font-barlow-condensed font-bold  leading-6 uppercase flex flex-wrap">
          {words.map((word, index) => {
            return (
              <div
                key={index}
                className={`${index === 0 ? "lg:w-full lg:text-start text-left " : ""
                  } title text-[60px] md:text-[100px] leading-[60px] w-full md:leading-[100px]`}
              >
                {word}
                {index === 0 ? "" : ""}&nbsp;
              </div>
            );
          })}
        </div>):(<div className="px-5  max-w-[708px] h-full sm:items-start lg:items-start items-center lg:justify-start justify-left text-white font-barlow-condensed font-bold  leading-6 uppercase flex flex-wrap">
          {words.map((word, index) => {
            return (
              <div
                key={index}
                className={`${index === 0 ? "lg:w-full lg:text-start text-left " : ""
                  } title text-[70px] md:text-[100px] leading-[70px] w-full md:leading-[100px]`}
              >
                {word}
                {index === 0 ? "" : ""}&nbsp;
              </div>
            );
          })}
        </div>)}
        <div className="flex relative">
          <div className="absolute top-5 left-20">
            <svg
              className="w-[95px] h-[95px] md:w-[165px] md:h-[165px]"
              viewBox="0 0 165 165"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_92_7718)">
                <path
                  d="M1.5744 3.1488C2.44391 3.1488 3.1488 2.44391 3.1488 1.5744C3.1488 0.704882 2.44391 0 1.5744 0C0.704882 0 0 0.704882 0 1.5744C0 2.44391 0.704882 3.1488 1.5744 3.1488Z"
                  fill="white"
                />
                <path
                  d="M24.6955 3.1488C25.565 3.1488 26.2699 2.44391 26.2699 1.5744C26.2699 0.704882 25.565 0 24.6955 0C23.826 0 23.1211 0.704882 23.1211 1.5744C23.1211 2.44391 23.826 3.1488 24.6955 3.1488Z"
                  fill="white"
                />
                <path
                  d="M47.8176 3.1488C48.6871 3.1488 49.392 2.44391 49.392 1.5744C49.392 0.704882 48.6871 0 47.8176 0C46.948 0 46.2432 0.704882 46.2432 1.5744C46.2432 2.44391 46.948 3.1488 47.8176 3.1488Z"
                  fill="white"
                />
                <path
                  d="M70.9387 3.1488C71.8082 3.1488 72.5131 2.44391 72.5131 1.5744C72.5131 0.704882 71.8082 0 70.9387 0C70.0691 0 69.3643 0.704882 69.3643 1.5744C69.3643 2.44391 70.0691 3.1488 70.9387 3.1488Z"
                  fill="white"
                />
                <path
                  d="M94.0607 3.1488C94.9302 3.1488 95.6351 2.44391 95.6351 1.5744C95.6351 0.704882 94.9302 0 94.0607 0C93.1912 0 92.4863 0.704882 92.4863 1.5744C92.4863 2.44391 93.1912 3.1488 94.0607 3.1488Z"
                  fill="white"
                />
                <path
                  d="M117.183 3.1488C118.052 3.1488 118.757 2.44391 118.757 1.5744C118.757 0.704882 118.052 0 117.183 0C116.313 0 115.608 0.704882 115.608 1.5744C115.608 2.44391 116.313 3.1488 117.183 3.1488Z"
                  fill="white"
                />
                <path
                  d="M140.304 3.1488C141.173 3.1488 141.878 2.44391 141.878 1.5744C141.878 0.704882 141.173 0 140.304 0C139.434 0 138.729 0.704882 138.729 1.5744C138.729 2.44391 139.434 3.1488 140.304 3.1488Z"
                  fill="white"
                />
                <path
                  d="M163.425 3.1488C164.295 3.1488 165 2.44391 165 1.5744C165 0.704882 164.295 0 163.425 0C162.556 0 161.851 0.704882 161.851 1.5744C161.851 2.44391 162.556 3.1488 163.425 3.1488Z"
                  fill="white"
                />
                <path
                  d="M1.5744 26.2704C2.44391 26.2704 3.1488 25.5655 3.1488 24.696C3.1488 23.8265 2.44391 23.1216 1.5744 23.1216C0.704882 23.1216 0 23.8265 0 24.696C0 25.5655 0.704882 26.2704 1.5744 26.2704Z"
                  fill="white"
                />
                <path
                  d="M24.6955 26.2704C25.565 26.2704 26.2699 25.5655 26.2699 24.696C26.2699 23.8265 25.565 23.1216 24.6955 23.1216C23.826 23.1216 23.1211 23.8265 23.1211 24.696C23.1211 25.5655 23.826 26.2704 24.6955 26.2704Z"
                  fill="white"
                />
                <path
                  d="M47.8176 26.2704C48.6871 26.2704 49.392 25.5655 49.392 24.696C49.392 23.8265 48.6871 23.1216 47.8176 23.1216C46.948 23.1216 46.2432 23.8265 46.2432 24.696C46.2432 25.5655 46.948 26.2704 47.8176 26.2704Z"
                  fill="white"
                />
                <path
                  d="M70.9387 26.2704C71.8082 26.2704 72.5131 25.5655 72.5131 24.696C72.5131 23.8265 71.8082 23.1216 70.9387 23.1216C70.0691 23.1216 69.3643 23.8265 69.3643 24.696C69.3643 25.5655 70.0691 26.2704 70.9387 26.2704Z"
                  fill="white"
                />
                <path
                  d="M94.0607 26.2704C94.9302 26.2704 95.6351 25.5655 95.6351 24.696C95.6351 23.8265 94.9302 23.1216 94.0607 23.1216C93.1912 23.1216 92.4863 23.8265 92.4863 24.696C92.4863 25.5655 93.1912 26.2704 94.0607 26.2704Z"
                  fill="white"
                />
                <path
                  d="M117.183 26.2704C118.052 26.2704 118.757 25.5655 118.757 24.696C118.757 23.8265 118.052 23.1216 117.183 23.1216C116.313 23.1216 115.608 23.8265 115.608 24.696C115.608 25.5655 116.313 26.2704 117.183 26.2704Z"
                  fill="white"
                />
                <path
                  d="M140.304 26.2704C141.173 26.2704 141.878 25.5655 141.878 24.696C141.878 23.8265 141.173 23.1216 140.304 23.1216C139.434 23.1216 138.729 23.8265 138.729 24.696C138.729 25.5655 139.434 26.2704 140.304 26.2704Z"
                  fill="white"
                />
                <path
                  d="M163.425 26.2704C164.295 26.2704 165 25.5655 165 24.696C165 23.8265 164.295 23.1216 163.425 23.1216C162.556 23.1216 161.851 23.8265 161.851 24.696C161.851 25.5655 162.556 26.2704 163.425 26.2704Z"
                  fill="white"
                />
                <path
                  d="M1.5744 49.392C2.44391 49.392 3.1488 48.6871 3.1488 47.8176C3.1488 46.948 2.44391 46.2432 1.5744 46.2432C0.704882 46.2432 0 46.948 0 47.8176C0 48.6871 0.704882 49.392 1.5744 49.392Z"
                  fill="white"
                />
                <path
                  d="M24.6955 49.392C25.565 49.392 26.2699 48.6871 26.2699 47.8176C26.2699 46.948 25.565 46.2432 24.6955 46.2432C23.826 46.2432 23.1211 46.948 23.1211 47.8176C23.1211 48.6871 23.826 49.392 24.6955 49.392Z"
                  fill="white"
                />
                <path
                  d="M47.8176 49.392C48.6871 49.392 49.392 48.6871 49.392 47.8176C49.392 46.948 48.6871 46.2432 47.8176 46.2432C46.948 46.2432 46.2432 46.948 46.2432 47.8176C46.2432 48.6871 46.948 49.392 47.8176 49.392Z"
                  fill="white"
                />
                <path
                  d="M70.9387 49.392C71.8082 49.392 72.5131 48.6871 72.5131 47.8176C72.5131 46.948 71.8082 46.2432 70.9387 46.2432C70.0691 46.2432 69.3643 46.948 69.3643 47.8176C69.3643 48.6871 70.0691 49.392 70.9387 49.392Z"
                  fill="white"
                />
                <path
                  d="M94.0607 49.392C94.9302 49.392 95.6351 48.6871 95.6351 47.8176C95.6351 46.948 94.9302 46.2432 94.0607 46.2432C93.1912 46.2432 92.4863 46.948 92.4863 47.8176C92.4863 48.6871 93.1912 49.392 94.0607 49.392Z"
                  fill="white"
                />
                <path
                  d="M117.183 49.392C118.052 49.392 118.757 48.6871 118.757 47.8176C118.757 46.948 118.052 46.2432 117.183 46.2432C116.313 46.2432 115.608 46.948 115.608 47.8176C115.608 48.6871 116.313 49.392 117.183 49.392Z"
                  fill="white"
                />
                <path
                  d="M140.304 49.392C141.173 49.392 141.878 48.6871 141.878 47.8176C141.878 46.948 141.173 46.2432 140.304 46.2432C139.434 46.2432 138.729 46.948 138.729 47.8176C138.729 48.6871 139.434 49.392 140.304 49.392Z"
                  fill="white"
                />
                <path
                  d="M163.425 49.392C164.295 49.392 165 48.6871 165 47.8176C165 46.948 164.295 46.2432 163.425 46.2432C162.556 46.2432 161.851 46.948 161.851 47.8176C161.851 48.6871 162.556 49.392 163.425 49.392Z"
                  fill="white"
                />
                <path
                  d="M1.5744 72.5135C2.44391 72.5135 3.1488 71.8087 3.1488 70.9391C3.1488 70.0696 2.44391 69.3647 1.5744 69.3647C0.704882 69.3647 0 70.0696 0 70.9391C0 71.8087 0.704882 72.5135 1.5744 72.5135Z"
                  fill="white"
                />
                <path
                  d="M24.6955 72.5135C25.565 72.5135 26.2699 71.8087 26.2699 70.9391C26.2699 70.0696 25.565 69.3647 24.6955 69.3647C23.826 69.3647 23.1211 70.0696 23.1211 70.9391C23.1211 71.8087 23.826 72.5135 24.6955 72.5135Z"
                  fill="white"
                />
                <path
                  d="M47.8176 72.5135C48.6871 72.5135 49.392 71.8087 49.392 70.9391C49.392 70.0696 48.6871 69.3647 47.8176 69.3647C46.948 69.3647 46.2432 70.0696 46.2432 70.9391C46.2432 71.8087 46.948 72.5135 47.8176 72.5135Z"
                  fill="white"
                />
                <path
                  d="M70.9387 72.5135C71.8082 72.5135 72.5131 71.8087 72.5131 70.9391C72.5131 70.0696 71.8082 69.3647 70.9387 69.3647C70.0691 69.3647 69.3643 70.0696 69.3643 70.9391C69.3643 71.8087 70.0691 72.5135 70.9387 72.5135Z"
                  fill="white"
                />
                <path
                  d="M94.0607 72.5135C94.9302 72.5135 95.6351 71.8087 95.6351 70.9391C95.6351 70.0696 94.9302 69.3647 94.0607 69.3647C93.1912 69.3647 92.4863 70.0696 92.4863 70.9391C92.4863 71.8087 93.1912 72.5135 94.0607 72.5135Z"
                  fill="white"
                />
                <path
                  d="M117.183 72.5135C118.052 72.5135 118.757 71.8087 118.757 70.9391C118.757 70.0696 118.052 69.3647 117.183 69.3647C116.313 69.3647 115.608 70.0696 115.608 70.9391C115.608 71.8087 116.313 72.5135 117.183 72.5135Z"
                  fill="white"
                />
                <path
                  d="M140.304 72.5135C141.173 72.5135 141.878 71.8087 141.878 70.9391C141.878 70.0696 141.173 69.3647 140.304 69.3647C139.434 69.3647 138.729 70.0696 138.729 70.9391C138.729 71.8087 139.434 72.5135 140.304 72.5135Z"
                  fill="white"
                />
                <path
                  d="M163.425 72.5135C164.295 72.5135 165 71.8087 165 70.9391C165 70.0696 164.295 69.3647 163.425 69.3647C162.556 69.3647 161.851 70.0696 161.851 70.9391C161.851 71.8087 162.556 72.5135 163.425 72.5135Z"
                  fill="white"
                />
                <path
                  d="M1.5744 95.6351C2.44391 95.6351 3.1488 94.9302 3.1488 94.0607C3.1488 93.1912 2.44391 92.4863 1.5744 92.4863C0.704882 92.4863 0 93.1912 0 94.0607C0 94.9302 0.704882 95.6351 1.5744 95.6351Z"
                  fill="white"
                />
                <path
                  d="M24.6955 95.6351C25.565 95.6351 26.2699 94.9302 26.2699 94.0607C26.2699 93.1912 25.565 92.4863 24.6955 92.4863C23.826 92.4863 23.1211 93.1912 23.1211 94.0607C23.1211 94.9302 23.826 95.6351 24.6955 95.6351Z"
                  fill="white"
                />
                <path
                  d="M47.8176 95.6351C48.6871 95.6351 49.392 94.9302 49.392 94.0607C49.392 93.1912 48.6871 92.4863 47.8176 92.4863C46.948 92.4863 46.2432 93.1912 46.2432 94.0607C46.2432 94.9302 46.948 95.6351 47.8176 95.6351Z"
                  fill="white"
                />
                <path
                  d="M70.9387 95.6351C71.8082 95.6351 72.5131 94.9302 72.5131 94.0607C72.5131 93.1912 71.8082 92.4863 70.9387 92.4863C70.0691 92.4863 69.3643 93.1912 69.3643 94.0607C69.3643 94.9302 70.0691 95.6351 70.9387 95.6351Z"
                  fill="white"
                />
                <path
                  d="M94.0607 95.6351C94.9302 95.6351 95.6351 94.9302 95.6351 94.0607C95.6351 93.1912 94.9302 92.4863 94.0607 92.4863C93.1912 92.4863 92.4863 93.1912 92.4863 94.0607C92.4863 94.9302 93.1912 95.6351 94.0607 95.6351Z"
                  fill="white"
                />
                <path
                  d="M117.183 95.6351C118.052 95.6351 118.757 94.9302 118.757 94.0607C118.757 93.1912 118.052 92.4863 117.183 92.4863C116.313 92.4863 115.608 93.1912 115.608 94.0607C115.608 94.9302 116.313 95.6351 117.183 95.6351Z"
                  fill="white"
                />
                <path
                  d="M140.304 95.6351C141.173 95.6351 141.878 94.9302 141.878 94.0607C141.878 93.1912 141.173 92.4863 140.304 92.4863C139.434 92.4863 138.729 93.1912 138.729 94.0607C138.729 94.9302 139.434 95.6351 140.304 95.6351Z"
                  fill="white"
                />
                <path
                  d="M163.425 95.6351C164.295 95.6351 165 94.9302 165 94.0607C165 93.1912 164.295 92.4863 163.425 92.4863C162.556 92.4863 161.851 93.1912 161.851 94.0607C161.851 94.9302 162.556 95.6351 163.425 95.6351Z"
                  fill="white"
                />
                <path
                  d="M1.5744 118.757C2.44391 118.757 3.1488 118.052 3.1488 117.182C3.1488 116.313 2.44391 115.608 1.5744 115.608C0.704882 115.608 0 116.313 0 117.182C0 118.052 0.704882 118.757 1.5744 118.757Z"
                  fill="white"
                />
                <path
                  d="M24.6955 118.757C25.565 118.757 26.2699 118.052 26.2699 117.182C26.2699 116.313 25.565 115.608 24.6955 115.608C23.826 115.608 23.1211 116.313 23.1211 117.182C23.1211 118.052 23.826 118.757 24.6955 118.757Z"
                  fill="white"
                />
                <path
                  d="M47.8176 118.757C48.6871 118.757 49.392 118.052 49.392 117.182C49.392 116.313 48.6871 115.608 47.8176 115.608C46.948 115.608 46.2432 116.313 46.2432 117.182C46.2432 118.052 46.948 118.757 47.8176 118.757Z"
                  fill="white"
                />
                <path
                  d="M70.9387 118.757C71.8082 118.757 72.5131 118.052 72.5131 117.182C72.5131 116.313 71.8082 115.608 70.9387 115.608C70.0691 115.608 69.3643 116.313 69.3643 117.182C69.3643 118.052 70.0691 118.757 70.9387 118.757Z"
                  fill="white"
                />
                <path
                  d="M94.0607 118.757C94.9302 118.757 95.6351 118.052 95.6351 117.182C95.6351 116.313 94.9302 115.608 94.0607 115.608C93.1912 115.608 92.4863 116.313 92.4863 117.182C92.4863 118.052 93.1912 118.757 94.0607 118.757Z"
                  fill="white"
                />
                <path
                  d="M117.183 118.757C118.052 118.757 118.757 118.052 118.757 117.182C118.757 116.313 118.052 115.608 117.183 115.608C116.313 115.608 115.608 116.313 115.608 117.182C115.608 118.052 116.313 118.757 117.183 118.757Z"
                  fill="white"
                />
                <path
                  d="M140.304 118.757C141.173 118.757 141.878 118.052 141.878 117.182C141.878 116.313 141.173 115.608 140.304 115.608C139.434 115.608 138.729 116.313 138.729 117.182C138.729 118.052 139.434 118.757 140.304 118.757Z"
                  fill="white"
                />
                <path
                  d="M163.425 118.757C164.295 118.757 165 118.052 165 117.182C165 116.313 164.295 115.608 163.425 115.608C162.556 115.608 161.851 116.313 161.851 117.182C161.851 118.052 162.556 118.757 163.425 118.757Z"
                  fill="white"
                />
                <path
                  d="M1.5744 141.878C2.44391 141.878 3.1488 141.173 3.1488 140.304C3.1488 139.434 2.44391 138.729 1.5744 138.729C0.704882 138.729 0 139.434 0 140.304C0 141.173 0.704882 141.878 1.5744 141.878Z"
                  fill="white"
                />
                <path
                  d="M24.6955 141.878C25.565 141.878 26.2699 141.173 26.2699 140.304C26.2699 139.434 25.565 138.729 24.6955 138.729C23.826 138.729 23.1211 139.434 23.1211 140.304C23.1211 141.173 23.826 141.878 24.6955 141.878Z"
                  fill="white"
                />
                <path
                  d="M47.8176 141.878C48.6871 141.878 49.392 141.173 49.392 140.304C49.392 139.434 48.6871 138.729 47.8176 138.729C46.948 138.729 46.2432 139.434 46.2432 140.304C46.2432 141.173 46.948 141.878 47.8176 141.878Z"
                  fill="white"
                />
                <path
                  d="M70.9387 141.878C71.8082 141.878 72.5131 141.173 72.5131 140.304C72.5131 139.434 71.8082 138.729 70.9387 138.729C70.0691 138.729 69.3643 139.434 69.3643 140.304C69.3643 141.173 70.0691 141.878 70.9387 141.878Z"
                  fill="white"
                />
                <path
                  d="M94.0607 141.878C94.9302 141.878 95.6351 141.173 95.6351 140.304C95.6351 139.434 94.9302 138.729 94.0607 138.729C93.1912 138.729 92.4863 139.434 92.4863 140.304C92.4863 141.173 93.1912 141.878 94.0607 141.878Z"
                  fill="white"
                />
                <path
                  d="M117.183 141.878C118.052 141.878 118.757 141.173 118.757 140.304C118.757 139.434 118.052 138.729 117.183 138.729C116.313 138.729 115.608 139.434 115.608 140.304C115.608 141.173 116.313 141.878 117.183 141.878Z"
                  fill="white"
                />
                <path
                  d="M140.304 141.878C141.173 141.878 141.878 141.173 141.878 140.304C141.878 139.434 141.173 138.729 140.304 138.729C139.434 138.729 138.729 139.434 138.729 140.304C138.729 141.173 139.434 141.878 140.304 141.878Z"
                  fill="white"
                />
                <path
                  d="M163.425 141.878C164.295 141.878 165 141.173 165 140.304C165 139.434 164.295 138.729 163.425 138.729C162.556 138.729 161.851 139.434 161.851 140.304C161.851 141.173 162.556 141.878 163.425 141.878Z"
                  fill="white"
                />
                <path
                  d="M1.5744 165C2.44391 165 3.1488 164.295 3.1488 163.425C3.1488 162.556 2.44391 161.851 1.5744 161.851C0.704882 161.851 0 162.556 0 163.425C0 164.295 0.704882 165 1.5744 165Z"
                  fill="white"
                />
                <path
                  d="M24.6955 165C25.565 165 26.2699 164.295 26.2699 163.425C26.2699 162.556 25.565 161.851 24.6955 161.851C23.826 161.851 23.1211 162.556 23.1211 163.425C23.1211 164.295 23.826 165 24.6955 165Z"
                  fill="white"
                />
                <path
                  d="M47.8176 165C48.6871 165 49.392 164.295 49.392 163.425C49.392 162.556 48.6871 161.851 47.8176 161.851C46.948 161.851 46.2432 162.556 46.2432 163.425C46.2432 164.295 46.948 165 47.8176 165Z"
                  fill="white"
                />
                <path
                  d="M70.9387 165C71.8082 165 72.5131 164.295 72.5131 163.425C72.5131 162.556 71.8082 161.851 70.9387 161.851C70.0691 161.851 69.3643 162.556 69.3643 163.425C69.3643 164.295 70.0691 165 70.9387 165Z"
                  fill="white"
                />
                <path
                  d="M94.0607 165C94.9302 165 95.6351 164.295 95.6351 163.425C95.6351 162.556 94.9302 161.851 94.0607 161.851C93.1912 161.851 92.4863 162.556 92.4863 163.425C92.4863 164.295 93.1912 165 94.0607 165Z"
                  fill="white"
                />
                <path
                  d="M117.183 165C118.052 165 118.757 164.295 118.757 163.425C118.757 162.556 118.052 161.851 117.183 161.851C116.313 161.851 115.608 162.556 115.608 163.425C115.608 164.295 116.313 165 117.183 165Z"
                  fill="white"
                />
                <path
                  d="M140.304 165C141.173 165 141.878 164.295 141.878 163.425C141.878 162.556 141.173 161.851 140.304 161.851C139.434 161.851 138.729 162.556 138.729 163.425C138.729 164.295 139.434 165 140.304 165Z"
                  fill="white"
                />
                <path
                  d="M163.425 165C164.295 165 165 164.295 165 163.425C165 162.556 164.295 161.851 163.425 161.851C162.556 161.851 161.851 162.556 161.851 163.425C161.851 164.295 162.556 165 163.425 165Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_92_7718">
                  <rect width="165" height="165" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="relative h-fit w-full z-10 ">
            <img
              src={img}
              alt="sellcars"
              className={`${mt}  max-w-[709px] w-full h-full`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
