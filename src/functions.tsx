export function handleChangeParam(
  newParam: string,
  setParamURL: any,
  setParamId: any,
  setSearchParams: any
) {
  setParamURL(newParam);
  setParamId("1");
  setSearchParams({ page: newParam.toString() });
  window.scrollTo(0,0)
  // window.history.pushState({}, "", `search?page=${newParam}`);
}

export function handleChangeParamId(
  param: string,
  id: string,
  setParamURL: any,
  setParamId: any,
  setSearchParams: any
) {
  setParamURL(param);
  setParamId(id);
  setSearchParams({ page: param.toString(), id: id.toString() });
  window.scrollTo(0,0)
  // window.history.pushState({}, "", `search?page=${param}&id=${id.toString()}`);
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
