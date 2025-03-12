type Recordable<T = any, K extends string | number | symbol = string> = Record<
    K extends null | undefined ? string : K,
    T
  >
export function objToFormData(obj: Recordable) {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => {
    formData.append(key, obj[key]);
  });
  return formData;
}