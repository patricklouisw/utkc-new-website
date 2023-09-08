export default function Home() {
  return (
    <main>
      {/* HERO */}
      <div className="w-screen h-screen flex justify-end items-center">
        <div className="absolute flex flex-col justify-center items-end mr-5 lg:mr-16 xl:mr-28 gap-4">
          <h1 className="text-5xl font-semibold tracking-wide text-white xl:text-6xl">
            University of Toronto Karate Club
          </h1>
          <h2 className="text-3xl tracking-wide text-amber-200 xl:text-4xl">
            Train the warrior in you
          </h2>
          {/* <form action="">
            <input type="email" className="rounded" placeholder="email" />
            <button> Sign Up</button>
          </form> */}
        </div>
        <img
          className="w-screen h-screen object-cover"
          src="/images/splash-images/b1.jpg"
          alt="banner"
        />
        {/* <video autoPlay loop muted className="w-screen h-screen object-cover">
          <source src="/videos/vid4.mp4" type="video/mp4" />
        </video> */}
      </div>

      {/* Summary */}
      <div className="w-full py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className="flex flex-col justify-center items-start gap-6">
            <div>
              <h2 className="text-3xl font-semibold leading-normal mb-2">
                More than 50 years legacy of <br />
                Traditional Karate
              </h2>
              <h3 className="text-xl font-semibold leading-none italic text-amber-500 mb-2">
                Join our All-Inclusive Training Environment
              </h3>
              <hr className="border-y-2 border-y-amber-400 w-1/2" />
            </div>

            <p className="leading-loose text-orange-500">
              As a diverse and inclusive community, we proudly offer martial{" "}
              <br />
              arts training programs open to people of all skills and
              capabilities.
            </p>
          </div>

          <div className="flex justify-end items-end max-w-lg">
            <img src="/images/stock/stock2.png" alt="karate_pic" />
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="w-full h-50 flex justify-end items-center py-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          {/* Title */}
          <h2 className="text-4xl font-semibold leading-normal mb-10">
            Enrich Your Life With Martial Arts!
          </h2>

          <div className="flex justify-around items-stretch gap-4 flex-wrap lg:flex-nowrap lg:px-4">
            {/* Card */}
            <div className="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-900 dark:border-gray-700 transition ease-in-out hover:-translate-y-1 hover:scale-105 ">
              <img
                className="rounded-t-lg"
                src="/images/splash-images/b2.jpg"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-xl font-semibold tracking-wide text-orange-400 ">
                  Build Your Confidence
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-white">
                  Our fun and interactive programs help students gain confidence
                  by setting goals, learning new skills, and pushing further in
                  a safe and supportive environment.
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-900 dark:border-gray-700 transition ease-in-out hover:-translate-y-1 hover:scale-105 ">
              <img
                className="rounded-t-lg"
                src="/images/splash-images/b3.jpg"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-xl font-semibold tracking-wide text-orange-400 ">
                  Instill Self-Discipline
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-white">
                  Martial arts instill self-discipline by helping students learn
                  to control emotions, focus attention, respect others, and
                  persevere through life's challenges.
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-900 dark:border-gray-700 transition ease-in-out hover:-translate-y-1 hover:scale-105 ">
              <img
                className="rounded-t-lg"
                src="/images/splash-images/b4.jpg"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-xl font-semibold tracking-wide text-orange-400 ">
                  Master Self-Defense
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-white">
                  In the modern world, there are many threats to our safety,
                  both physical and emotional. Karate teaches the skills needed
                  to defend ourselves on all levels, which is essential for
                  well-being.
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-900 dark:border-gray-700 transition ease-in-out hover:-translate-y-1 hover:scale-105 ">
              <img
                className="rounded-t-lg"
                src="/images/splash-images/b6.jpg"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-xl font-semibold tracking-wide text-orange-400 ">
                  Boost Focus And Concentration
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-white">
                  Karate is a lifelong learning journey. Students learn focus
                  and concentration, even in the face of distractions. A skill
                  that translates to real life success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule & Location */}
      <div className="w-full h-50 py-20 bg-orange-100 px-4">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
          {/* Title */}
          <h2 className="w-full text-4xl font-semibold leading-normal mb-10">
            Schedule & Location
          </h2>

          {/* Schedule & Map split */}
          <div className="w-full flex flex-row justify-start items-start gap-10">
            {/* Schedule */}
            <div className="flex flex-col ">
              <h3 className="text-2xl font-semibold leading-normal">
                Fall & Winter Semester
              </h3>
              <div className="relative overflow-x-auto shadow-md mb-5">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Day
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Time
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Every Tuesday
                      </th>
                      <td className="px-6 py-4">9 PM to 11 PM</td>
                      <td className="px-6 py-4">
                        Athletic Center dance Studio
                      </td>
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Every Friday
                      </th>
                      <td className="px-6 py-4">7.30 PM to 10.30 PM</td>
                      <td className="px-6 py-4">
                        Athletic Center dance Studio
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Every Saturday
                      </th>
                      <td className="px-6 py-4">1.30 PM to 4.30 PM</td>
                      <td className="px-6 py-4">
                        Athletic Center dance Studio
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 className="text-2xl font-semibold leading-normal">
                Spring & Summer Semester
              </h3>
              <div className="relative overflow-x-auto shadow-md ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Day
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Time
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Every Tuesday
                      </th>
                      <td className="px-6 py-4">7 PM to 9 PM</td>
                      <td className="px-6 py-4">
                        Athletic Center dance Studio
                      </td>
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Every Friday
                      </th>
                      <td className="px-6 py-4">7 PM to 9 PM</td>
                      <td className="px-6 py-4">
                        Athletic Center dance Studio
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Every Saturday
                      </th>
                      <td className="px-6 py-4">1.30 PM to 4.30 PM</td>
                      <td className="px-6 py-4">
                        Athletic Center dance Studio
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold leading-normal">
                Directions to University of Toronto Athletic Centre
              </h3>
              <h4 className="text-xl font-semibold leading-normal mb-2">
                Taking the TTC?
              </h4>
              <p>
                From Spadina subway station, you can walk south along Spadina or
                take the street car until you reach Harbord Street.
              </p>
              <iframe
                src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=55+Harbord+St.,+toronto,+canada&amp;sll=37.0625,-95.677068&amp;sspn=48.77566,78.310547&amp;ie=UTF8&amp;hq=&amp;hnear=55+Harbord+St,+Toronto,+Toronto+Division,+Ontario,+Canada&amp;z=16&amp;ll=43.663275,-79.401036&amp;output=embed"
                style={{
                  border: 0,
                  width: "100%",
                  aspectRatio: "2/1",
                  marginTop: "20px",
                }}
                aria-hidden="false"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
