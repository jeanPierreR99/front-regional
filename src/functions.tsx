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

//HANDLE PAGE
export const HandlePage: React.FC<any> = ({ page, pageMap }) => {
  const ReturnPage = pageMap[page];

  return <div className="">{ReturnPage ? <ReturnPage /> : null}</div>;
};

//SOLICITUDES HTTP
export async function handleData(axios: any, endpoint: string, setState: any) {
  try {
    const response = await axios.get(endpoint);
    if (response.data.response.status === 200) {
      setState(response.data.response.data);
      return;
    }
  } catch (error) {
    console.log("error");
  }
}

export async function addData(axios: any, data: any, endpoint: string) {
  const res = await axios.post(endpoint, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
}
