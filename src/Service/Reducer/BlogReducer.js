import {
    BLOG_FAIL,
    BLOG_REQUEST,
    BLOG_SUCCESS,

    BLOG_CAT_FAIL,
    BLOG_CAT_REQUEST,
    BLOG_CAT_SUCCESS,

    SINGLE_BLOG_FAIL,
    SINGLE_BLOG_REQUEST,
    SINGLE_BLOG_SUCCESS,

    RELATED_BLOG_FAIL,
    RELATED_BLOG_REQUEST,
    RELATED_BLOG_SUCCESS,
    
    
    CLEAR_ERRORS
} from "../Constants/BlogConstants";

export const blogReducer =
    (state = { post: [] }, action) => {
        switch (action.type) {
            case BLOG_REQUEST:
                return {
                    loading: true,
                    post: [],
                };
            case BLOG_SUCCESS:
               
                return {
                    loading: false,
                    post: action.payload.Blogpost,

                };
            case BLOG_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };

    export const blogCategoryReducer =
    (state = { postCat: [] }, action) => {
        switch (action.type) {
            case BLOG_CAT_REQUEST:
                return {
                    loading: true,
                    postCat: [],
                };
            case BLOG_CAT_SUCCESS:
               
                return {
                    loading: false,
                    postCat: action.payload.blogcategory,

                };
            case BLOG_CAT_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };


    export const SingleBlogReducer =
    (state = { post: [] }, action) => {
        switch (action.type) {
            case SINGLE_BLOG_REQUEST:
                return {
                    loading: true,
                    post: [],
                };
            case SINGLE_BLOG_SUCCESS:
               
                return {
                    loading: false,
                    post: action.payload.Blogpost,

                };
            case SINGLE_BLOG_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };


    export const RelatedBlogReducer =
    (state = { post: [] }, action) => {
        switch (action.type) {
            case RELATED_BLOG_REQUEST:
                return {
                    loading: true,
                    post: [],
                };
            case RELATED_BLOG_SUCCESS:
               
                return {
                    loading: false,
                    post: action.payload.Blogpost,

                };
            case RELATED_BLOG_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };
