interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  type: string;
  className: string;
  disabled?: boolean;
}
