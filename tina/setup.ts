import { TinaCMS } from "tinacms";
import { useForm, usePlugin } from "tinacms";

export const setupTina = () => {
  const cms = new TinaCMS({
    enabled: true,
    sidebar: true,
    toolbar: true,
  });

  return cms;
};
