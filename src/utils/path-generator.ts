import { type BreadCrumbItem } from "@src/components/BreadCrumb";

type Path = [
  string,
  string
]

export default function pathGenerator(paths: Path[]): BreadCrumbItem[] {
  return paths.map(path => ({ title: path[0], to: path[1] }));
}
