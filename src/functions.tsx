export function handleChangeParam(
  newParam: string,
  setParamURL: (param: string) => void
) {
  setParamURL(newParam);

  const newSearchParams = new URLSearchParams(window.location.search);
  newSearchParams.delete("id");
  newSearchParams.set("search", newParam);
  const newUrl = `?${newSearchParams.toString()}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
}

export function handleChangeParamId(
  noticeId: string,
  setParamURL: (param: string) => void,
  setParamId: (param: string) => void
) {
  setParamURL("notice");
  setParamId(noticeId);

  const newSearchParams = new URLSearchParams(window.location.search);
  newSearchParams.delete("search");
  newSearchParams.delete("id");
  newSearchParams.append("search", "notice");
  newSearchParams.append("id", noticeId);
  const newUrl = `?${newSearchParams.toString()}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
}
