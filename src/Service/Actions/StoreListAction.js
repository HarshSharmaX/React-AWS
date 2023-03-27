import axios from "axios";
import {
    LISTCAT_FAIL,
    LISTCAT_REQUEST,
    LISTCAT_SUCCESS,
    ALL_STORE_FAIL,
    ALL_STORE_REQUEST,
    ALL_STORE_SUCCESS,
    LISTSUBCAT_FAIL,
    LISTSUBCAT_REQUEST,
    LISTSUBCAT_SUCCESS,
    CLEAR_ERRORS
} from "../Constants/StoreListConstant";

export const getCat = () => async (dispatch) => {

    try {
        dispatch({ type: LISTCAT_REQUEST });
        let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/Allcategories`;
        const { data } = await axios.get(link);

        dispatch({
            type: LISTCAT_SUCCESS,
            payload: data.products,
        })

    } catch (error) {
        dispatch({
            type: LISTCAT_FAIL,
            payload: error.response.data.message,
        });

    }
};

export const getSubcat = (category = "") => async (dispatch) => {

    try {
        dispatch({ type: LISTSUBCAT_REQUEST });

        let link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/Allsubcategories?category=${category}`;
        const { data } = await axios.get(link);

        dispatch({
            type: LISTSUBCAT_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: LISTSUBCAT_FAIL,
            payload: error.response.data.message,
        });

    }
};

export const getStore = (city, locality, category, sub_category, onlineShop = "", homeDelivery = "",search) => async (dispatch) => {


    try {
        dispatch({ type: ALL_STORE_REQUEST });

        let link = "";
        if(search)
        {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?keyword=${search}`;
        }
        else{

        if (!category && !sub_category && !homeDelivery && !onlineShop && city && !locality ) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}`;
        }

        else if (category && !sub_category && !homeDelivery && !onlineShop && city && !locality ) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&city=${city}`;
        }

        else if (category && sub_category && !homeDelivery && !onlineShop && city && !locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&city=${city}`;
        }
        else if (category && sub_category && onlineShop && !homeDelivery && city && !locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&onlineShop=${onlineShop}&city=${city}`;
        }
        else if (category && sub_category && homeDelivery && !onlineShop && city && !locality ) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&homeDelivery=${homeDelivery}&onlineShop=${onlineShop}&city=${city}`;
        }
        else if (category && sub_category && onlineShop && homeDelivery && city && !locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&onlineShop=${onlineShop}&homeDelivery=${homeDelivery}&city=${city}`;

        }
        else if (!category && !sub_category && !onlineShop && homeDelivery && city && !locality ) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?homeDelivery=${homeDelivery}&city=${city}`;

        }
        else if (!category && !sub_category && !homeDelivery && onlineShop && city && !locality ) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?onlineShop=${onlineShop}&city=${city}`;

        }

        else if (!category && !sub_category && homeDelivery && onlineShop && city && !locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?homeDelivery=${homeDelivery}&onlineShop=${onlineShop}&city=${city}`;
        }

        else if (category && !sub_category && homeDelivery && onlineShop && city && !locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&homeDelivery=${homeDelivery}&onlineShop=${onlineShop}&city=${city}`;
        }
        else if (category && !sub_category && !homeDelivery && onlineShop && city && !locality ) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&onlineShop=${onlineShop}&city=${city}`;
        }
        else if (category && !sub_category && homeDelivery && !onlineShop && city && !locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&homeDelivery=${homeDelivery}&city=${city}`;
        }
        //2 set

       else if (!category && !sub_category && !homeDelivery && !onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&locality=${locality}`;
        }

        else if (category && !sub_category && !homeDelivery && !onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&city=${city}&locality=${locality}`;
        }

        else if (category && sub_category && !homeDelivery && !onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&city=${city}&locality=${locality}`;
        }
        else if (category && sub_category && onlineShop && !homeDelivery && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&onlineShop=${onlineShop}&city=${city}&locality=${locality}`;
        }
        else if (category && sub_category && homeDelivery && !onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&homeDelivery=${homeDelivery}&onlineShop=${onlineShop}&city=${city}&locality=${locality}`;
        }
        else if (category && sub_category && onlineShop && homeDelivery && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&sub_category=${sub_category}&onlineShop=${onlineShop}&homeDelivery=${homeDelivery}&city=${city}&locality=${locality}`;

        }
        else if (!category && !sub_category && !onlineShop && homeDelivery && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?homeDelivery=${homeDelivery}&city=${city}&locality=${locality}`;

        }
        else if (!category && !sub_category && !homeDelivery && onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?onlineShop=${onlineShop}&city=${city}&locality=${locality}`;

        }

        else if (!category && !sub_category && homeDelivery && onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?homeDelivery=${homeDelivery}&onlineShop=${onlineShop}&city=${city}&locality=${locality}`;
        }

        else if (category && !sub_category && homeDelivery && onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&homeDelivery=${homeDelivery}&onlineShop=${onlineShop}&city=${city}&locality=${locality}`;
        }
        else if (category && !sub_category && !homeDelivery && onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&onlineShop=${onlineShop}&city=${city}&locality=${locality}`;
        }
        else if (category && !sub_category && homeDelivery && !onlineShop && city && locality) {
            link = `https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?category=${category}&homeDelivery=${homeDelivery}&city=${city}&locality=${locality}`;
        }
    }
        const { data } = await axios.get(link);

        dispatch({
            type: ALL_STORE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: ALL_STORE_FAIL,
            payload: error.response.data.message,
        });

    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
