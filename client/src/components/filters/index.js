"use client";
import { useState } from "react";
import Link from "next/link";

const Filters = () => {
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  // Función para construir la URL con los query params
  const buildQuery = () => {
    let query = "";
    if (searchText) {
      query += `name=${searchText}&`;
    }
    if (status) {
      query += `status=${status}&`;
    }
    if (gender) {
      query += `gender=${gender}&`;
    }
    // Eliminar el último '&' si es necesario
    if (query.endsWith("&")) {
      query = query.slice(0, -1);
    }
    return query;
  };

  // Manejador para limpiar los filtros al hacer clic en el enlace
  const handleSearchClick = () => {
    // Limpiar los filtros y la barra de búsqueda
    setSearchText("");
    setStatus("");
    setGender("");
  };

  return (
    <aside className="w-full h-[85vh] p-4">
      <div className="w-full flex flex-col gap-4">
        <div>
          <input
            placeholder="Search by name"
            type="text"
            name="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full h-[42px] text-[1rem] text-[#9e9e9e] p-[12px] rounded-[12px] bg-transparent border border-white outline-none transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:border-2 hover:shadow-[0px_0px_20px_-17px] active:scale-95 focus:border-2 focus:border-white focus:text-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white">Status</label>
          <div className="relative flex flex-wrap rounded-md bg-transparent border border-white text-white box-border shadow-[0_0_0px_1px_rgba(0,0,0,0.06)] max-w-full h-[42px] text-[14px]">
            {["Alive", "Dead", "Unknown"].map((statusOption) => (
              <label key={statusOption} className="flex-1 text-center">
                <input
                  type="radio"
                  name="status"
                  value={statusOption}
                  onChange={() => setStatus(statusOption)}
                  checked={status === statusOption}
                  className="hidden peer"
                />
                <span className="flex cursor-pointer text-[1rem] items-center justify-center rounded-md border-none py-2 px-2 text-white transition-all duration-150 ease-in-out peer-checked:bg-white peer-checked:font-semibold peer-checked:text-black">
                  {statusOption}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white">Gender</label>
          <div className="relative flex flex-wrap rounded-md bg-transparent border border-white text-white box-border shadow-[0_0_0px_1px_rgba(0,0,0,0.06)] w-full h-[42px] text-[14px]">
            {["Male", "Female"].map((genderOption) => (
              <label key={genderOption} className="flex-1 text-center">
                <input
                  type="radio"
                  name="gender"
                  value={genderOption}
                  onChange={() => setGender(genderOption)}
                  checked={gender === genderOption}
                  className="hidden peer"
                />
                <span className="flex cursor-pointer text-[1rem] items-center justify-center rounded-md border-none py-2 px-2 text-white transition-all duration-150 ease-in-out peer-checked:bg-white peer-checked:font-semibold peer-checked:text-black">
                  {genderOption}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="pt-2 overflow-visible">
          <div className="w-full overflow-visible">
            <Link
              href={`/characters?${buildQuery()}`}
              onClick={handleSearchClick}
            >
              <span className="w-full font-semibold flex items-center justify-center  rounded-md text-[1rem] h-[42px] px-4 bg-green-300 transition-all duration-300 ease-in-out hover:bg-green-400">
                Search
              </span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
