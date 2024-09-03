// const PATH_DOMAIN = "http://192.168.196.169"; //honor
// const PATH_DOMAIN = "http://localhost"; //local
// const PATH_DOMAIN = "https://0s75x56n-80.brs.devtunnels.ms/" //RED
const PATH_DOMAIN = "http://192.168.1.153"; //dvivienda
const ENDPOINTS = {
  GET_NOTICE: `${PATH_DOMAIN}/regional/server/?action=get_notice`,
  GET_POST: `${PATH_DOMAIN}/regional/server/?action=get_post`,
  GET_GALLERY: `${PATH_DOMAIN}/regional/server/?action=get_gallery`,
  GET_SYSTEM: `${PATH_DOMAIN}/regional/server/?action=system`,
  ADD_NOTICE: `${PATH_DOMAIN}/regional/server/?action=add_notice`,
  ADD_POST: `${PATH_DOMAIN}/regional/server/?action=add_post`,
  ADD_GALLERY: `${PATH_DOMAIN}/regional/server/?action=add_gallery`,
  UPDATE_POST: `${PATH_DOMAIN}/regional/server/?action=update_post`,
  DELETE_POST: `${PATH_DOMAIN}/regional/server/?action=delete_post&id=`,
  DELETE_NOTICE: `${PATH_DOMAIN}/regional/server/?action=delete_notice&id=`,
  DELETE_GALLERY: `${PATH_DOMAIN}/regional/server/?action=delete_gallery&id=`,
  LOGIN: `${PATH_DOMAIN}/regional/server/?action=verify_user`,
  DIR_IMG: `${PATH_DOMAIN}/regional/server`,
};

export default ENDPOINTS;
