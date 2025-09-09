import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type SearchBarProps = {
  onSearch: (term: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          className="pl-10"
          placeholder="Search by title or tag.."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBar;
