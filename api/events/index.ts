import { supabase } from "@/lib/supabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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

export const userInsertEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    async mutationFn(data: any) {
      const { error, data: newEvent } = await supabase
        .from("events")
        .insert({
          title: data.title,
          image: data.image,
          description: data.description,
          location: data.location,
          city: data.city,
          category: data.category,
        })
        .single();
      if (error) {
        throw new Error(error.message);
      }
      return newEvent;
    },
    async onSuccess() {
      await queryClient.invalidateQueries(["events"]);
    },
  });
};
