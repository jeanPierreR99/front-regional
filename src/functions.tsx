export function handleChangeParam(
  newParam: string,
  setParamURL: any,
  setParamId: any
) {
  setParamURL(newParam);
  setParamId("1");

  const newSearchParams = new URLSearchParams(window.location.search);
  newSearchParams.delete("id");
  newSearchParams.set("search", newParam);
  const newUrl = `?${newSearchParams.toString()}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
}

export function handleChangeParamId(
  param: string,
  id: string,
  setParamURL: any,
  setParamId: any
) {
  setParamURL(param);
  setParamId(id);

  const newSearchParams = new URLSearchParams(window.location.search);
  newSearchParams.delete("search");
  newSearchParams.delete("id");
  newSearchParams.append("search", param);
  newSearchParams.append("id", id);
  const newUrl = `?${newSearchParams.toString()}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
}
