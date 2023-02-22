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
      const updateCategories = buildCategories(
        state.categories,
        action.payload.category
      );
      // console.log(updateCategories);
      state = {
        ...state,
        loading: false,
        error: false,
        errorMessage: "",
        categories:updateCategories
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

const buildCategories= (categories, category) => {
    if (category.parentId === undefined){
        category.children = [];
        return categories.concat(category)
    }  
    let newCategories =[];
    for(let i=0;i<categories.length;i++){
      if(categories[i]._id === category.parentId){
        category.children=[];
        categories[i].children.push({
          _id:category._id,
          name:category.name,
          slug:category.slug,
          parentId:category.parentId,
          children:category.children
        });
        return categories;
      }else{
        if(categories[i].children && categories[i].children.length>0 ) 
        categories[i].children=[...buildCategories(categories[i].children,category)];
      }
    }
    return categories;
  }