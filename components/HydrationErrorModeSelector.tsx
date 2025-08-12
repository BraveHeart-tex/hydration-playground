'use client';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from '@/components/ui/select';
import {
  HYDRATION_ERROR_MODE_SEARCH_PARAM_KEY,
  HydrationErrorMode,
  HYDRATION_ERROR_MODES,
} from '@/constants';
import { SelectValue } from '@radix-ui/react-select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const options: { label: string; value: HydrationErrorMode }[] = [
  {
    label: 'Using Browser-only APIs',
    value: HYDRATION_ERROR_MODES.browserApis,
  },
  {
    label: 'Dynamic Content / Content Mismatch',
    value: HYDRATION_ERROR_MODES.contentMismatch,
  },
  {
    label: 'Invalid DOM Nesting',
    value: HYDRATION_ERROR_MODES.invalidDomNesting,
  },
];

function HydrationErrorModeSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const errorMode =
    searchParams.get(HYDRATION_ERROR_MODE_SEARCH_PARAM_KEY) ||
    HYDRATION_ERROR_MODES.contentMismatch;

  const onValueChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(HYDRATION_ERROR_MODE_SEARCH_PARAM_KEY, value);
    router.replace(`${pathname}?${newParams.toString()}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label>Hydration Error Mode</Label>
      <Select onValueChange={onValueChange} defaultValue={errorMode}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={'Select error mode'} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Error Mode</SelectLabel>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="text-xs text-muted-foreground">
        Change how hydration errors are triggered in the examples
      </p>
    </div>
  );
}

export default HydrationErrorModeSelector;
