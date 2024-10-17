import Image from "next/image";
import { twMerge } from "tailwind-merge";

import mainImg from "../../public/images/main.png";
import works from "../../public/works.json";

const skills = [
  { category: "dev", name: "HTML" },
  { category: "dev", name: "CSS" },
  { category: "dev", name: "SCSS" },
  { category: "dev", name: "Typescript" },
  { category: "dev", name: "Javascript" },
  { category: "dev", name: "Jquery" },
  { category: "dev", name: "Next.JS" },
  { category: "dev", name: "React" },
  { category: "dev", name: "Vue" },
  { category: "dev", name: "Github" },
  { category: "dev", name: "Tailwind css" },
  { category: "dev", name: "Styled Component" },
  { category: "dev", name: "vuetify" },
  { category: "design", name: "Figma" },
  { category: "design", name: "Photoshop" },
  { category: "design", name: "Illustrator" },
];

export default function Home() {
  return (
    <main>
      <section className="relative flex h-screen flex-col justify-end overflow-hidden bg-[#0F1721]/90 px-6 py-12 md:px-28 md:py-32">
        <p className="text-gray-400 md:text-2xl/none">Front-End Developer</p>
        <h1 className="mb-12 mt-2 text-3xl font-bold leading-none text-white md:mb-28 md:mt-4 md:text-6xl">
          JEON A RYEON
        </h1>
        <ul className="flex flex-col gap-4 md:gap-9">
          <li className="font-medium text-gray-400 md:text-2xl/none">
            유지보수 고려
          </li>
          <li className="font-medium text-gray-400 md:text-2xl/none">
            대시보드 제작
          </li>
          <li className="font-medium text-gray-400 md:text-2xl/none">
            git 활용한 협업 경험
          </li>
          <li className="font-medium text-gray-400 md:text-2xl/none">
            Next.JS, React, Vue 프로젝트 경험
          </li>
        </ul>
        <Image
          src={mainImg}
          alt="메인 이미지"
          className="absolute left-0 top-0 -z-10 h-full object-cover"
        />
      </section>

      <section className="mx-auto flex max-w-screen-xl flex-wrap gap-x-28 gap-y-4 px-6 py-10 md:px-4 md:py-20">
        <h2 className="w-full">
          <strong className="text-xl leading-none md:text-2xl">
            전아련&nbsp;
          </strong>
          <span className="leading-none md:text-xl">Jeon A Ryeon</span>
        </h2>

        <div>
          <div className="mb-8 h-56 rounded-lg bg-gray-100" />
          <h3 className="mb-4 text-lg font-semibold">Contact</h3>
          <ul className="flex flex-col gap-2">
            <li>+82 10-2266-5953</li>
            <li>arjeon.career@gmail.com</li>
          </ul>
        </div>

        <div className="flex flex-1 flex-col gap-10">
          <div>
            <p className="mb-6">
              빠르게 변해가는 사회 속에서 다양한 경험을 통해 개인 역량을 더욱
              발전시키고자 노력합니다.
            </p>
            <div className="flex flex-wrap gap-x-1 gap-y-2">
              {skills.map((skill) => (
                <span
                  className={twMerge(
                    "bg-primary rounded px-4 py-2 text-sm/none text-white md:font-medium",
                    skill.category === "design" && "bg-secondary",
                  )}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <ul className="flex flex-col gap-2">
            <li className="relative pl-2">
              <span className="absolute left-0">·</span> 유지보수가 편리한
              코드를 작성하기 위해 노력합니다.
            </li>
            <li className="relative pl-2">
              <span className="absolute left-0">·</span> 대시보드 제작 경험을
              통해 다양한 상황에 유연한 대응이 가능합니다.
            </li>
            <li className="relative pl-2">
              <span className="absolute left-0">·</span> 홈페이지 운영 PM 경험이
              있어 커뮤니케이션에 익숙합니다.
            </li>
            <li className="relative pl-2">
              <span className="absolute left-0">·</span> git을 활용한 협업
              경험이 있습니다.
            </li>
            <li className="relative pl-2">
              <span className="absolute left-0">·</span> Next.JS, React, Vue를
              활용한 프로젝트 경험이 있습니다.
            </li>
          </ul>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Career</h3>
            <ul className="flex flex-col gap-2">
              <li className="relative pl-2">
                <span className="absolute left-0">·</span>{" "}
                한국직무능력평가연구소 (2023.02 ~ 2024.05, 웹퍼블리셔)
              </li>
              <li className="relative pl-2">
                <span className="absolute left-0">·</span> HDC현대산업개발
                (2022.06 ~ 2022.10, 웹마스터)
              </li>
              <li className="relative pl-2">
                <span className="absolute left-0">·</span> 인터메이저 (2020.02 ~
                2022.06, 웹퍼블리셔)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Project</h3>
            <ul className="flex flex-col gap-2">
              <li className="relative pl-2">
                <span className="absolute left-0">·</span> 오피스너 웹버전 구축
                프로젝트 (2024.09 ~ 진행중, 프론트엔드)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-10 md:px-10 md:py-20">
        <div className="mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          <h2 className="relative z-10 col-span-full text-xl font-semibold leading-none md:text-3xl">
            Work
            <span className="bg-secondary absolute bottom-0 left-[3.15rem] -z-10 size-2 rounded-full md:bottom-1 md:left-[4.7rem] md:size-3" />
          </h2>
          {works.reverse().map((work) => (
            <div
              key={work.id}
              className="flex flex-col rounded-lg border border-gray-300 bg-white px-3 py-4 md:px-6 md:py-7"
            >
              <span className="text-xs/none text-gray-400">
                {work.startDate} ~ {work.endDate}
              </span>
              <h3 className="mb-4 mt-2 font-semibold leading-none tracking-tight lg:text-lg">
                {work.title}
              </h3>
              <div className="mb-4 h-28 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 xl:h-52">
                <Image
                  src={work.img}
                  alt={""}
                  width="365"
                  height="180"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <ul className="flex flex-col gap-0.5">
                {work.tasks.map((task, idx) => (
                  <li key={idx} className="relative pl-2 text-sm text-gray-600">
                    <span className="absolute left-0">·</span> {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
