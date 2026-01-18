import React from "react";

const Checkbox = React.memo(({ label, checked, onToggle }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onToggle} />
      {label}
    </label>
  );
});

export default Checkbox;
