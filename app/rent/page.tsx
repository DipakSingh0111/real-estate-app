import type { Metadata } from "next";
import propertiesData from "@/data/properties.json";

export const metadata: Metadata = {
  title: "Office Space Inventory for Rent / Lease — Real Estate",
};

const officeInventory = ((propertiesData as any).officeInventory || []) as {
  unit: string;
  area: string;
  condition: string;
}[];

export default function RentPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F2] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Office Space Inventory For{" "}
            <span className="text-[#EF4444]">Rent / Lease</span>
          </h1>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <table className="min-w-full border-separate border-spacing-0">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-[0.24em]">
                  Unit
                </th>
                <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-[0.24em]">
                  Area
                </th>
                <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-[0.24em]">
                  Condition
                </th>
                <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-[0.24em]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {officeInventory.map((item, index) => (
                <tr
                  key={item.unit}
                  className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}
                >
                  <td className="px-6 py-5 text-sm font-medium text-slate-900">
                    {item.unit}
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-600">
                    {item.area}
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-600">
                    {item.condition}
                  </td>
                  <td className="px-6 py-5 text-sm">
                    <a
                      href={`https://wa.me/919811022334?text=Hello%20I%20am%20interested%20in%20office%20unit%20${encodeURIComponent(item.unit)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#EF4444] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#dc2626]"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                      >
                        <path
                          d="M20.52 3.48a11.86 11.86 0 0 0-16.76 0c-4.64 4.64-4.64 12.16 0 16.8l-1.8 5.2 5.36-1.4a11.84 11.84 0 0 0 6.13 1.56h.04c3.16 0 6.14-1.24 8.4-3.5 4.64-4.64 4.64-12.16 0-16.8Zm-1.66 15.5c-2.04 2.04-4.78 3.16-7.68 3.16a10.8 10.8 0 0 1-5.5-1.42l-.4-.24-3.16.84.83-3.08-.26-.42A10.82 10.82 0 0 1 3.92 11.5c0-2.9 1.12-5.64 3.16-7.68 2.04-2.04 4.78-3.16 7.68-3.16 2.9 0 5.64 1.12 7.68 3.16 4.24 4.24 4.24 11.16 0 15.4Z"
                          fill="currentColor"
                        />
                        <path
                          d="M16.7 14.27c-.22-.11-1.28-.63-1.48-.7-.2-.06-.35-.11-.5.11-.16.22-.62.7-.76.85-.14.15-.27.17-.5.06-.22-.11-.95-.35-1.8-1.1-.67-.6-1.13-1.35-1.26-1.57-.14-.22-.02-.34.09-.45.09-.09.22-.24.33-.36.11-.12.15-.22.22-.37.06-.14.03-.27-.02-.37-.06-.11-.5-1.2-.68-1.65-.18-.43-.37-.37-.5-.38-.13-.01-.28-.01-.43-.01-.15 0-.37.06-.56.27-.19.22-.73.71-.73 1.73 0 1.01.75 1.98.86 2.12.11.14 1.48 2.26 3.6 3.17 2.12.92 2.12.61 2.5.57.39-.05 1.28-.53 1.46-1.05.18-.52.18-.96.13-1.05-.05-.09-.19-.14-.41-.25Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>Send Query</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
