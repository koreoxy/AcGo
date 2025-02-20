import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

export const useEventList = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase.from("events").select("*");
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
};

export const useEvent = (id: number) => {
  return useQuery({
    queryKey: ["events", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
};
