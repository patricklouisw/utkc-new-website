export default function Summary() {
  return (
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
                    <td className="px-6 py-4">Athletic Center dance Studio</td>
                  </tr>
                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Every Friday
                    </th>
                    <td className="px-6 py-4">7.30 PM to 10.30 PM</td>
                    <td className="px-6 py-4">Athletic Center dance Studio</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Every Saturday
                    </th>
                    <td className="px-6 py-4">1.30 PM to 4.30 PM</td>
                    <td className="px-6 py-4">Athletic Center dance Studio</td>
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
                    <td className="px-6 py-4">Athletic Center dance Studio</td>
                  </tr>
                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Every Friday
                    </th>
                    <td className="px-6 py-4">7 PM to 9 PM</td>
                    <td className="px-6 py-4">Athletic Center dance Studio</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Every Saturday
                    </th>
                    <td className="px-6 py-4">1.30 PM to 4.30 PM</td>
                    <td className="px-6 py-4">Athletic Center dance Studio</td>
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
  );
}
