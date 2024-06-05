// const PATH_DOMAIN = "http://192.168.56.169"; //honor
// const PATH_DOMAIN = "http://localhost"; //local
// const PATH_DOMAIN = "https://0s75x56n-80.brs.devtunnels.ms/" //RED
const PATH_DOMAIN = "http://192.168.1.153"; //dvivienda
const ENDPOINTS = {
  GET_NOTICE: `${PATH_DOMAIN}/regional/server/?action=get_notice`,
  GET_SYSTEM: `${PATH_DOMAIN}/regional/server/?action=system`,
  DELETE_NOTICE: `${PATH_DOMAIN}/regional/server/?action=delete_notice&id=`,
  ADD_NOTICE: `${PATH_DOMAIN}/regional/server/?action=add_notice`,
  LOGIN: `${PATH_DOMAIN}/regional/server/?action=verify_user`,
  DIR_IMG: `${PATH_DOMAIN}/regional/server`,
};

export default ENDPOINTS;
