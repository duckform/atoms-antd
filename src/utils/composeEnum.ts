export const composeEnum = (values: string[], labels: string[]) => {
  return labels.map((label, idx) => {
    return {
      key: values[idx],
      value: values[idx],
      label: label,
    };
  });
};
