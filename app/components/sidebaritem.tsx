import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const toPascalCase = (str:string) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

type SidebarProps = {
  icon: string;
  active?: boolean;
  label: string;
}

const SidebarItem = ({ icon, label, active }: SidebarProps) => {

  const pascalName = toPascalCase(icon);
  const LucideIcon = Icons[pascalName as keyof typeof Icons] as LucideIcon | undefined;
  return (
    <div
      className={`flex items-center p-2 text-sm font-medium rounded-lg hover:text-white hover:bg-blue-500 ${
        active ? "bg-blue-600" : "text-[#717171]"
      }`}
    >
      {LucideIcon && <LucideIcon className="mr-2 w-5 h-5" />}
      <span className="mr-2">{label}</span>
    </div>
  );
};

export default SidebarItem;