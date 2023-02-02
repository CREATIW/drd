import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Span } from "../components";
import Page from "../page/Page";
import { getCategorySlug } from "../redux/reducers/categoryReducers";

function CategoryPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const {
    categoryBrands,
    paginatyAttrebutes,
    categorion,
    subCats
  } = useSelector((state) => state.categoryState);
  useEffect(() => {
    dispatch(getCategorySlug(slug));
  }, [slug]);
  return <Page>{slug}</Page>;
}

export default CategoryPage;
