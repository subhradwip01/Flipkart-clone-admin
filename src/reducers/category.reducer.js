import { categoryConstasnts } from "../actions/constant";

const initialState = {
  loading: false,
  categories: [],
  error: null,
  errorMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case categoryConstasnts.GET_ALL_CATEGORIES_REQUEST:
      state = {
        ...state,
        loading: true,
        error: null,
        errorMessage: "",
      };
      break;
    case categoryConstasnts.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
        errorMessage: "",
        categories: action.payload.categories,
      };
      break;
    case categoryConstasnts.GET_ALL_CATEGORIES_FAILURE:
      state = {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.message,
      };
      break;
    case categoryConstasnts.ADD_NEW_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
      };
      break;
    case categoryConstasnts.ADD_NEW_CATEGORY_SUCCESS:
    //   const updateCategories = buildCategories(
    //     state.categories,
    //     action.payload.category
    //   );
    //   console.log(updateCategories);
      state = {
        ...state,
        loading: false,
        error: false,
        errorMessage: "",
        // categories:
      };
      break;
    case categoryConstasnts.ADD_NEW_CATEGORY_FAILURE:
      state = {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.payload.message,
      };
      break;
  }
  return state;
};

// const buildCategories= (categories, category) => {
//     if (category.parentId === undefined){
//         category.children = [];
//         return categories.concat(category)
//     }  
//     return categories.map((cate) => {
//       if (cate._id === category.parentID) {
//         category.children = [];
//         cate.children.push(category);
//       }
//       if (cate.children && cate.children.length > 0)
//       buildCategories(cate.children, category);
//       return cate;
//     });
//   }