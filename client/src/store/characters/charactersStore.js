import { create } from "zustand";

export const useCharactersStore=create((set)=>({
    characters:[],
    count:null,
    pages:null,
    nextPage:null,
    prevPage:null,
    setState:async (data)=>{
        set(()=>({
            characters:data?.body?.results,
            count:data?.body?.info?.count,
            pages:data?.body?.info?.pages,
            nextPage:data?.body?.info?.next,
            prevPage:data?.body?.info?.prev,
        }))
    }
}))