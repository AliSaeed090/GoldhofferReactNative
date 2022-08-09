import * as actionTypes from "@actions/actionTypes";
const initialState = {
  theme: null,
  font: null,
  force_dark: null,
  language: null,
  isPrivacyAccepted:false, 
  contact:{
    name:'', number:'',type:''
  },
  menu: "eCommerce",
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case actionTypes.CHANGE_FONT:
      return {
        ...state,
        font: action.font,
      };
    case actionTypes.FORCE_APPEARANCE:
      return {
        ...state,
        force_dark: action.force_dark,
      };
    case actionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
      case actionTypes.SET_CONTACT_DETAILS:
        return {
          ...state,
          contact: action.contact,
        };
    case actionTypes.SET_MENU:
      return {
        ...state,
        menu: action.menu,
      };
      case actionTypes.SET_PRIVACY_POLICY_ACCEPTED:
        return {
          ...state,
          isPrivacyAccepted: true,
        };
      // 
    default:
      return state;
  }
};
