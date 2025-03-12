import { SVGProps, FC } from "react";

export interface Skill {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}
